import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        oauth_id: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        email: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
            unique: true,
        },
        phone_number: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            defaultValue: null,
        },
        avatar_url: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        address: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_email",
                using: "BTREE",
                fields: ["email"],
            },
            {
                name: "idx_phone_number",
                using: "BTREE",
                fields: ["phone_number"],
            },
        ],
        timestamps: true,
        createdAt: true,
    }
);
