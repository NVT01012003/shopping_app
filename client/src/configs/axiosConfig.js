import axios from "axios";
import { auth_api } from "./apis";

export const auth_instance = axios.create({
    baseURL: auth_api.auth,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});

export const public_instance = axios.create({
    baseURL: auth_api.auth,
    headers: {
        Accept: "application/json",
    },
});

export const secure_instance = axios.create({
    baseURL: auth_api.auth,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});
