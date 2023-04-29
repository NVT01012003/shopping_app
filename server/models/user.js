import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "purchaser",
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        cart: {
            type: DataTypes.UUID,
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
        contact_number: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_user_id",
                using: "BTREE",
                fields: ["id"],
            },
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
    }
);
