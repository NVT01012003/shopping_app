import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Order_item = sequelize.define(
    "order_item",
    {
        order_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_order_item_order_id",
                using: "BTREE",
                fields: [order_id],
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
