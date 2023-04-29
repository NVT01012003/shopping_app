import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

export const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "postgres",
    port: 5433,
});
