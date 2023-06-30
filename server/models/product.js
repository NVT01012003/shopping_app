import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Product = sequelize.define(
    "products",
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
        desc: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        discount_id: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
        feedback_id: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
        rating: {
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_product_name",
                using: "BTREE",
                fields: ["name"],
            },
            {
                name: "idx_product_category",
                using: "BTREE",
                fields: ["category"],
            },
            {
                name: "idx_product_price",
                using: "BTREE",
                fields: ["price"],
            },
        ],
    }
);
