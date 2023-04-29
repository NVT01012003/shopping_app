import { User } from "../models/user.js";

export const createUser = async (data) => {
    const user = User.create({ ...data });
    return user;
};

export const findUser = async (data) => {
    const user = await User.findAll({
        oauth_id: data.id,
        email: data.email,
    });
    return user;
};
