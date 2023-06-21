import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const My_vouchers = sequelize.define(
    "my_voucher",
    {
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        discount_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        used: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        indexes: [
            {
                name: "idxc_my_voucher_user_id_used",
                using: "BTREE",
                fields: ["user_id", "used"],
            },
            {
                name: "idx_my_voucher_discount_id",
                using: "BTREE",
                fields: ["discount_id"],
            },
        ],
        timestamps: true,
    }
);
