import { Request, Response, NextFunction } from "express";
import {
  findUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
} from "../services/users.js";

export const getUsers: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: any = await findUsers();

    if (!users) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Error ocurred while trying to find users",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: users,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const getUser: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id }: any = req.params;
    const user: any = await findUser(id);

    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Error ocurred while trying to find user",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: user,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const addUser: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await createUser(req.body);

    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Error ocurred while trying to create user",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: user,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id }: any = req.params;
    const user: any = await editUser(id, req.body);

    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Error ocurred while trying to edit user",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: user,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const removeUser: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id }: any = req.params;
    const user: any = await deleteUser(id);

    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Error ocurred while trying to remove user",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: user,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};
