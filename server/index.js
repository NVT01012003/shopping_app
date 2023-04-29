import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { router } from "./api/index.js";
import { sequelize } from "./db/db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", router);
app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        (async () => {
            await sequelize.sync();
        })();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
