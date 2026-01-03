import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt.js";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  try {
    const payload = verifyAccessToken(token);

    if (!payload) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }

    req.user = payload; 
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
