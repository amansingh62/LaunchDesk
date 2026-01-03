import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, env.jwtAccess, { expiresIn: "15m" });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, env.jwtRefresh, { expiresIn: "7d" });

export const verifyAccessToken = (token: string) => 
    jwt.verify(token, env.jwtAccess);

export const verifyRefreshAccessToken = (token: string) => 
    jwt.verify(token, env.jwtRefresh);