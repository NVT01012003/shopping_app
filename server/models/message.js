import { DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export const Message = sequelize.define(
    "message",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        chat: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
        photo: {
            type: DataTypes.TEXT,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_message_id",
                using: "BTREE",
                fields: ["id"],
            },
            {
                name: "idx_message_chat",
                using: "BTREE",
                fields: ["chat"],
            },
            {
                name: "idx_message_user_id",
                using: "BTREE",
                fields: ["user_id"],
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
