import type {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";

export const handleError: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({
    success: false,
    status: 500,
    data: {},
    message: err.message,
  });
};
