import type { Response } from "express";

const baseOptions = {
    httpOnly: true,
    secure: true,
    samesite: "none" as const,
};

export const setAuthCookies = (res: Response, accessToken: string, refreshToken: string) => {

    res.cookie("accessToken", accessToken, {
        ...baseOptions,
        maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
        ...baseOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
};

export const clearAuthCookies = (res: Response) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
}