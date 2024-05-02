import Button from "@mui/material/Button"
import { signOut } from "../auth"
import React from "react"

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await signOut({ redirect: true, redirectTo: "http://localhost:3000/login" })
        } catch (error) {
          console.log(error)
          throw error // Rethrow all other errors
        }
      }}
    >
      <Button type="submit">SignOut with Google</Button>
    </form>
  )
} 