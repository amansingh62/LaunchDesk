import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface JwtPayload {
  userId: string;
  role: "ADMIN" | "MANAGER" | "STAFF"; 
}

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, env.jwtAccess, { expiresIn: "15m" });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, env.jwtRefresh, { expiresIn: "7d" });

export const verifyAccessToken = (token: string) => 
    jwt.verify(token, env.jwtAccess);

export const verifyRefreshToken = (token: string) => 
    jwt.verify(token, env.jwtRefresh);