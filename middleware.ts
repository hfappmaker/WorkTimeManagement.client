import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect("http://localhost:3000/login");
  }
});

export const config = {
  matcher: ["/dashboard(.*)", "/"],
};
