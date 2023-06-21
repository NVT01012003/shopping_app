import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Discount = sequelize.define(
    "discount",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        discount_percent: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true,
        },
        discount: {
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true,
        },
        time_apply: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        time_expried: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    },
    {
        indexes: [
            {
                name: "idx_discont_type",
                using: "BTREE",
                fields: ["type"],
            },
            {
                name: "idx_discount_percent",
                using: "BTREE",
                fields: ["discount_percent"],
            },
            {
                name: "idx_discount",
                using: "BTREE",
                fields: ["discount"],
            },
            {
                name: "idx_discount_time_apply",
                using: "BTREE",
                fields: ["time_apply"],
            },
        ],
        timestamps: true,
    }
);
