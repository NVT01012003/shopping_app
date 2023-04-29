import { Router } from "express";
import { auth } from "./auth.js";
import { googleAuthRouter } from "./oauth/google.js";
import { facebookRouter } from "./oauth/facebook.js";

export const authRouter = Router();

authRouter.use("/google", googleAuthRouter);
authRouter.use("/facebook", facebookRouter);
authRouter.use("/", auth);
