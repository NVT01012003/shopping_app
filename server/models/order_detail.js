import { DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export const Order_detail = sequelize.define(
    "order_detail",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        app_voucher: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
        shop_voucher: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
        free_shipping_voucher: {
            type: DataTypes.UUID,
            defaultValue: null,
            allowNull: true,
        },
        payment_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        indexes: [
            {
                name: "idx_order_detail_user_id",
                using: "BTREE",
                fields: ["user_id"],
            },
            {
                name: "idx_order_detail_id",
                using: "BTREE",
                fields: ["id"],
            },
            {
                name: "idx_order_detail_status",
                using: "BTREE",
                fields: ["status"],
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);
