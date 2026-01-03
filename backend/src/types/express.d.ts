import type { AuthJwtPayload  } from "../utils/jwt.ts";

declare global {
  namespace Express {
    interface Request {
      user?: AuthJwtPayload ;
    }
  }
}

export {};
