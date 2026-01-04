import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
    {
      method: "POST",
      headers: {
        Cookie: req.headers.get("cookie") || "",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
