import { Router } from "express";
import { authRouter } from "./auth/index.js";

export const router = Router();

router.use("/auth", authRouter);
