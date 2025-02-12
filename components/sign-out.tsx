import Button from "@mui/material/Button"
import { signOut } from "../auth"
import React from "react"

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await signOut({ redirect: true, redirectTo: `${process.env.NEXTAUTH_URL}/login` })
        } catch (error) {
          console.log(error)
          throw error // Rethrow all other errors
        }
      }}
    >
      <Button type="submit">SignOut</Button>
    </form>
  )
} 