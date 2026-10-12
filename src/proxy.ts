import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("lang") === "vi" ? "vi" : "en";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/", "/projects/healthcare", "/projects/healthcare/:path*"],
};
