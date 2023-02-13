import { Router } from "express";
import { verifyToken } from "../../../middleware/verifyToken.js";
import { authRouter } from "./authentication.js";
import { userRouter } from "./users.js";

export const routerV1: any = Router();

routerV1.use("/authentication", authRouter);

routerV1.use("/users", verifyToken, userRouter);
