import { Router } from "express";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
} from "../controllers/users.js";

export const userRouter: any = Router();

userRouter.route("/").get(getUsers).post(addUser);

userRouter.get("/:id", getUser);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", removeUser);
