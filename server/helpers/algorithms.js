import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { v4 as uuidv4, v4 } from "uuid";

dotenv.config();
const access_token_secret = process.env.ACCESS_TOKEN_SECRET;
const refresh_token_secret = process.env.REFRESH_TOKEN_SECRET;

export const generateAccessToken = (payload) => {
    return jwt.sign({ ...payload }, access_token_secret, {
        expiresIn: "1h",
    });
};

export const generateRefreshToken = (payload) => {
    return jwt.sign({ ...payload }, refresh_token_secret, {
        expiresIn: "7d",
    });
};

export const generatePasswordHash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

export const verifyToken = ({ access_token, refresh_token }) => {
    try {
        if (access_token) {
            return jwt.verify(access_token, access_token_secret);
        } else {
            return jwt.verify(refresh_token, refresh_token_secret);
        }
    } catch (e) {
        throw new Error("Token invalid");
    }
};

export const comparePassword = (password, hash) => {
    try {
        var result = bcrypt.compareSync(password, hash);
    } catch (e) {
        console.log(e);
    }
    if (!result) throw new Error("Password incorrect");
    else return true;
};

export const generate_uuid = () => {
    return v4();
};
