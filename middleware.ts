import { verifyJwtToken } from "@/libs/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const payload = await verifyJwtToken(request.cookies.get("token")?.value);

  if (request.nextUrl.pathname === "/login" && payload) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // else if (!payload && request.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
