import { Router } from "express";
import { handleError } from "../helpers/handleError.js";
import { createShop } from "../controllers/shop.js";

export const shopRouter = Router;

shopRouter.post("/create_shop", async (req, res) => {
    try {
        const { owner, name } = req.body;
        const shop = await createShop({ owner, name });
        res.status(200).json({
            code: 200,
            status: "success",
            elements: {
                shop,
            },
        });
    } catch (e) {
        const error = handleError(e);
        res.status(error.code).json(error);
    }
});
