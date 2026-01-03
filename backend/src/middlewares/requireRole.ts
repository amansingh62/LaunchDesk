import type { Request, Response, NextFunction } from "express";

export const requireRole =
  (...allowedRoles: Array<"ADMIN" | "MANAGER" | "STAFF">) =>
  (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
