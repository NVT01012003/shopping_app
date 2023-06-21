import { DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        session: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_cart_id",
                using: "BTREE",
                fields: ["id"],
            },
            {
                nam: "idx_cart_session",
                using: "BTREE",
                fields: ["session"],
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
