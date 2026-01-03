import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface AuthJwtPayload {
  userId: string;
  role: "ADMIN" | "MANAGER" | "STAFF";
}

/* ---------- SIGN ---------- */

export const signAccessToken = (payload: AuthJwtPayload): string =>
  jwt.sign(payload, env.jwtAccess, { expiresIn: "15m" });

export const signRefreshToken = (payload: AuthJwtPayload): string =>
  jwt.sign(payload, env.jwtRefresh, { expiresIn: "7d" });

/* ---------- VERIFY ---------- */

export const verifyAccessToken = (token: string): AuthJwtPayload => {
  const decoded = jwt.verify(token, env.jwtAccess);

  if (typeof decoded === "string") {
    throw new Error("Invalid access token payload");
  }

  return decoded as AuthJwtPayload;
};

export const verifyRefreshToken = (token: string): AuthJwtPayload => {
  const decoded = jwt.verify(token, env.jwtRefresh);

  if (typeof decoded === "string") {
    throw new Error("Invalid refresh token payload");
  }

  return decoded as AuthJwtPayload;
};
