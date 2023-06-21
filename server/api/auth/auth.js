import { Router } from "express";
import { createUser } from "../../controllers/user.js";
import { credentialValidator } from "../../helpers/validator.js";
import { handleError } from "../../helpers/handleError.js";
import { User } from "../../models/user.js";
import {
    comparePassword,
    generateAccessToken,
    generatePasswordHash,
    generateRefreshToken,
    generate_uuid,
} from "../../helpers/algorithms.js";

export const auth = Router();

auth.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const { user_name, email, phone_number, password, confirm } = data;
        if (!user_name) throw new Error("User name is required");
        credentialValidator.validateRegister({ ...data });
        const hash = generatePasswordHash(password);
        let user = await createUser({
            id: generate_uuid(),
            user_name,
            email,
            phone_number,
            password: hash,
        });
        const refresh_token = generateRefreshToken({ user_name });
        const access_token = generateAccessToken({ user_name, id: user.id });
        res.cookie("token", `Bearer ${refresh_token}`)
            .status(200)
            .json({
                code: 200,
                status: "success",
                elements: {
                    user: {
                        id: user.id,
                        user_name: user.user_name,
                        address: user.address,
                        contact_number: user.contact_number,
                        cart: user.cart,
                        type: user.type,
                    },
                    access_token: `Bearer ${access_token}`,
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

auth.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const { email, phone_number, password } = data;
        credentialValidator.validateLogin({ ...data });
        if (email) {
            var user = await User.findAll({
                attributes: [
                    "user_name",
                    "id",
                    "type",
                    "cart",
                    "address",
                    "contact_number",
                    "password",
                ],
                where: {
                    email,
                },
            });
        } else {
            var user = await User.findOne({
                attributes: [
                    "user_name",
                    "id",
                    "type",
                    "cart",
                    "address",
                    "contact_number",
                    "password",
                ],
                where: {
                    phone_number,
                },
            });
        }
        comparePassword(password, user[0].password);
        const refresh_token = generateRefreshToken({
            user_name: user[0].user_name,
        });
        const access_token = generateAccessToken({
            user_name: user[0].user_name,
            id: user[0].id,
        });
        res.cookie("token", `Bearer ${refresh_token}`)
            .status(200)
            .json({
                code: 200,
                status: "success",
                elements: {
                    user: {
                        id: user[0].id,
                        user_name: user[0].user_name,
                        address: user[0].address,
                        contact_number: user[0].contact_number,
                        cart: user[0].cart,
                        type: user[0].type,
                    },
                    access_token: `Bearer ${access_token}`,
                },
            });
    } catch (e) {
        const error = handleError(e);
        res.status(error.code).json(error);
    }
});
