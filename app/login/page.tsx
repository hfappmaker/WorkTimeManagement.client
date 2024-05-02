import React from "react";
import SignIn from "../../components/sign-in";
import { auth } from "../../auth";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth()
  if (session) {
    redirect("/dashboard")
  }
  else {
    return <SignIn />;
  }
}