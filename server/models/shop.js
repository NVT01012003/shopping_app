import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Shop = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        owner: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        products: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        followers: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        follows: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        rating: {
            type: DataTypes.NUMBER,
            defaultValue: null,
            allowNull: true,
        },
        status: {
            type: DataTypes.TEXT,
            defaultValue: "active",
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_shop_id",
                using: "BTREE",
                fields: ["id"],
            },
            {
                name: "idx_shop_owner",
                using: "BTREE",
                fields: ["owner"],
            },
            {
                name: "idx_shop_name",
                using: "BTREE",
                fields: ["name"],
            },
            {
                name: "idx_shop_status",
                using: "BTREE",
                fields: ["status"],
            },
        ],
        timestamps: true,
    }
);
