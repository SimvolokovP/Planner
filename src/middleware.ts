import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";

export async function middleware(request: NextRequest) {
  const { url, cookies } = request;
  console.log(cookies);
  const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
  const isAuthPage = url.includes("/auth");

  if (isAuthPage && accessToken) {
    return NextResponse.redirect(new URL("/i", request.url));
  }

  if (!accessToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/i/:path*", "/auth"],
};
