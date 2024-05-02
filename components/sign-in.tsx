import Button from "@mui/material/Button"
import { signIn } from "../auth"
import React from "react"
import { Avatar } from "@mui/material"

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
      <Button type="submit" startIcon={<Avatar sx={{
        height:'1.5rem',
        width:'1.5rem',
      }}src={'https://authjs.dev/img/providers/google.svg'} />}>Signin with Google</Button>
    </form>
  )
} 