import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("antara_session");
  const redirectUrl = `${process.env.APP_URL}/auth/login/`;

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(redirectUrl);
  }
}
