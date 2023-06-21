import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Feedback = sequelize.define(
    "feedback",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
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
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
