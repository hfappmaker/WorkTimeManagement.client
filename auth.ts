import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [Google],
  debug: process.env.NODE_ENV !== "production",
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     if (isLoggedIn) return true;

  //     const isProtectedPath = PROTECTED_PATHS.some((path) =>
  //       nextUrl.pathname.startsWith(path),
  //     );
  //     if (!isProtectedPath) return true;

  //     return NextResponse.redirect(new URL('/api/auth/signin', nextUrl));
  //  },
  // },
});
