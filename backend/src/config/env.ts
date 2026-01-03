import "dotenv/config";

export const env = {
  nodeEnv: process.env.NODE_ENV!,
  port: process.env.PORT!,
  clientUrl: process.env.CLIENT_URL!,
  apiUrl: process.env.API_URL!,
  jwtAccess: process.env.JWT_ACCESS_SECRET!,
  jwtRefresh: process.env.JWT_REFRESH_SECRET!,
};
