import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(`${process.env.NEXTAUTH_URL}/login`);
  }
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|login).*)'],
};
