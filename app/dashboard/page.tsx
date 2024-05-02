import React from "react";
import SignOut from "../../components/sign-out";
import { auth } from "../../auth";

export default async function Page() {
  const session = await auth();
  return (<>
    <p>{session?.user?.email}</p>
    <SignOut />
  </>);
}