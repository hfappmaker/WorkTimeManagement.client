import React from "react";
import SignOut from "../../components/sign-out";
import { auth } from "../../auth";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth();
  if (session?.user?.email?.startsWith(`nuke`)) {
    return (<>
      <p>{session?.user?.email}</p>
      <SignOut />
    </>);
  }

  redirect(`/register`)
}