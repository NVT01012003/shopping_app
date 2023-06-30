import { google } from "googleapis";
import dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";
import { createUser, findUser } from "../../../controllers/user.js";
import { handleError } from "../../../helpers/handleError.js";
import {
    generateAccessToken,
    generateRefreshToken,
    generate_uuid,
} from "../../../helpers/algorithms.js";

dotenv.config();
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    "http://localhost:5050/api/auth/google/callback"
);
const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
];
const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    prompt: "consent",
});
const getGoogleUser = async ({ code }) => {
    const { tokens } = await oauth2Client.getToken(code);
    const googleUser = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${tokens.id_token}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.message);
        });

    return googleUser;
};

export const googleAuthRouter = Router();

googleAuthRouter.get("/", (req, res) => {
    res.redirect(authorizationUrl);
});

googleAuthRouter.get("/callback", async (req, res) => {
    try {
        const code = req.query.code;
        const { id, email, name, picture } = await getGoogleUser({ code });

        const find_user = await findUser({ email });
        if (!find_user[0]) {
            console.log("false");
            var user = await createUser({
                id: generate_uuid(),
                auth_id: id,
                email,
                user_name: name,
                avatar_url: picture,
            });
        } else {
            var user = find_user[0];
        }
        const access_token = generateAccessToken({ user_name: name });
        const refresh_token = generateRefreshToken({
            user_name: name,
            id: user.id,
        });
        res.cookie("token", refresh_token, {
            httpOnly: true,
            secure: true,
        })
            .status(200)
            .json({
                code: 200,
                status: "success",
                elements: {
                    access_token: `Bearer ${access_token}`,
                    user: {
                        id: user.id,
                        user_name: user.user_name,
                        address: user.address,
                        type: user.type,
                        avatar_url: user.avatar_url,
                    },
                },
            });
    } catch (e) {
        if (
            e.parent?.message ==
            `duplicate key value violates unique constraint "users_phone_number_key"`
        ) {
            var error = handleError(e.parent);
        } else if (
            e.parent?.message ==
            `duplicate key value violates unique constraint "users_email_key"`
        ) {
            var error = handleError(e.parent);
        } else {
            var error = handleError(e);
        }
        res.status(error.code).json(error);
    }
});
