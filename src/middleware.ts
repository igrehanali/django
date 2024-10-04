// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   const authToken = request.cookies.get("authToken")
//   if (!authToken?.value) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     '/',
//     '/overview',
//     '/download',
//     '/news',
//     '/community',
//     '/documentation',
//     '/code',
//     '/issue',
//     '/about',
//     '/donate',
//   ]
// }
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function is no longer checking for authentication
export function middleware(request: NextRequest) {
  // No authentication check needed, allowing access to all routes
  return NextResponse.next(); // Proceed to the next middleware or the requested route
}

// No need for matcher configuration as no routes require authentication
export const config = {
  matcher: [], // Empty matcher as we're not restricting any routes
}
