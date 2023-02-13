import { Request, Response, NextFunction } from "express";
import { handleLogin, handlePassword } from "../services/authentication.js";

export const login: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await handleLogin(req.body);
    if (!response) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Email or Password incorrect",
      });
    }
    res
      .status(200)
      .header("AccessToken", response)
      .json({
        success: true,
        status: 200,
        data: { AccessToken: response },
        message: "Success",
      });
  } catch (err) {
    next(err);
  }
};

export const createPassword: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Password, PasswordConfirm }: any = req.body;

    if (!Password === PasswordConfirm) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Passwords do not match.",
      });
    }

    const response: any = await handlePassword(Password);

    if (!response) {
      return res.status(500).json({
        success: false,
        status: 500,
        data: {},
        message: "Internal Server Error",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: response,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const forgotPassword: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Email } = req.body;

    res.status(200).json({
      success: true,
      status: 200,
      data: {},
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const resetPassword: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Password, PasswordConfirm }: any = req.body;

    if (!Password === PasswordConfirm) {
      return res.status(400).json({
        success: false,
        status: 400,
        data: {},
        message: "Passwords do not match.",
      });
    }

    const response: any = await handlePassword(Password);

    if (!response) {
      return res.status(500).json({
        success: false,
        status: 500,
        data: {},
        message: "Internal Server Error",
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      data: response,
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};

export const logout: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).header("AccessToken", null).json({
      success: true,
      status: 200,
      data: {},
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
};
