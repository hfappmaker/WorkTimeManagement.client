import Button from "@mui/material/Button"
import { signIn } from "../auth"
import React from "react"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await signIn("google")
        } catch (error) {
          console.log(error)
          throw error // Rethrow all other errors
        }
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  )
} 