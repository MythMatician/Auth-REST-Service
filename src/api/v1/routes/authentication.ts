import { Router } from "express";
import {
  login,
  createPassword,
  forgotPassword,
  resetPassword,
  logout,
} from "../controllers/authentication.js";

export const authRouter = Router();

authRouter.post("/login", login);

authRouter.post("/create-password", createPassword);

authRouter.post("/forgot-password", forgotPassword);

authRouter.post("/reset-password", resetPassword);

authRouter.post("/logout", logout);
