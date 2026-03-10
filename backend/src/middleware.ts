import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      message: "No token provided",
    });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_PASSWORD) as { id: string };

    req.userId = decoded.id;

    next();
  } catch (e) {
    res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};

// Signin → get token
// Token → send in Authorization
// Middleware → verify token
// Valid → next()
// Invalid → 403 error
