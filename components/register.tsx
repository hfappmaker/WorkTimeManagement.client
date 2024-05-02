import Button from "@mui/material/Button"
import React from "react"
import { signOut } from "../auth"

const register = async () => {
  await signOut({ redirect: true, redirectTo: `${process.env.NEXTAUTH_URL}/login` })
}

export default function Register() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await register()
        } catch (error) {
          console.log(error)
          throw error // Rethrow all other errors
        }
      }}
    >
      <Button type="submit" >Register</Button>
    </form>
  )
} 