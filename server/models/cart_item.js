import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Cart_item = sequelize.define(
    "cart_item",
    {
        cart_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_cart_item_id",
                using: "BTREE",
                fields: ["id"],
            },
        ],
        timestamps: true,
    }
);
