import { Shop } from "../models/shop";

export const createShop = async (data) => {
    const shop = await Shop.create({ ...data });
    return shop;
};
