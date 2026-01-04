import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    const accessToken = req.cookies.get("accessToken");

    const isAuthRoute = req.nextUrl.pathname.startsWith("/login");
    const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

    if(!accessToken && isDashboard) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if(accessToken && isAuthRoute){
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};