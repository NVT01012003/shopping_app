import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Shop = sequelize.define(
    "shop",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        followers: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        following: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        indexes: [
            {
                name: "idx_shop_name",
                using: "BTREE",
                fields: ["name"],
            },
            {
                name: "idx_shop_user_id",
                using: "BTREE",
                fields: ["user_id"],
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
