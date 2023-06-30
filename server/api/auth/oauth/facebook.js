import { Router } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { createUser, findUser } from "../../../controllers/user.js";
import {
    generateAccessToken,
    generateRefreshToken,
    generate_uuid,
} from "../../../helpers/algorithms.js";
import { handleError } from "../../../helpers/handleError.js";

dotenv.config();
const client_id = process.env.FACEBOOK_CLIENT_ID;
const client_secret = process.env.FACEBOOK_CLIENT_SECRET;
const redirect_uri = "http://localhost:5050/api/auth/facebook/callback";
const scope = ["email", "public_profile"].join(",");

const authorizationUrl =
    `https://www.facebook.com/v16.0/dialog/oauth?` +
    `client_id=${client_id}` +
    `&redirect_uri=${redirect_uri}` +
    `&scope=${scope}`;

const getFacebookUser = async (code) => {
    const authenticationUrl =
        `https://graph.facebook.com/v16.0/oauth/access_token?` +
        `client_id=${client_id}` +
        `&redirect_uri=${redirect_uri}` +
        `&client_secret=${client_secret}` +
        `&code=${code}`;

    const { data } = await axios.get(authenticationUrl);
    return data;
};

export const facebookRouter = Router();

facebookRouter.get("/", (req, res) => {
    res.redirect(authorizationUrl);
});

facebookRouter.get("/callback", async (req, res) => {
    try {
        const code = req.query.code;
        const token = await getFacebookUser(code);
        const { data } = await axios({
            url: "https://graph.facebook.com/me",
            method: "get",
            params: {
                fields: [
                    "id",
                    "email",
                    "first_name",
                    "last_name",
                    "picture",
                ].join(","),
                access_token: token.access_token,
            },
        });
        const find_user = await findUser({ email: data.email });
        if (!find_user[0]) {
            var user = await createUser({
                id: generate_uuid(),
                auth_id: data.id,
                email: data.email,
                user_name: `${data.first_name} ${data.last_name}`,
                avatar_url: data.picture.data.url,
            });
        } else {
            var user = find_user[0];
        }
        const access_token = generateAccessToken({
            user_name: `${data.first_name} ${data.last_name}`,
        });
        const refresh_token = generateRefreshToken({
            user_name: `${data.first_name} ${data.last_name}`,
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
