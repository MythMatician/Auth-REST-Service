import { Request, Response, NextFunction } from "express";
import  jwt from "jsonwebtoken";
const { JsonWebTokenError } = jwt;

export const verifyToken: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("AccessToken");
  
  if (!token) {
    return res.status(403).json({
      success: false,
      status: 403,
      data: {},
      message: "Token required",
    });
  }

  try {
    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        status: 401,
        data: {},
        message: "Invalid token",
      });
    }
  }
};
