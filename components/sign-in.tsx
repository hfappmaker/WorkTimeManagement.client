import { signIn } from "../app/auth"
// import { AuthError } from "next-auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await signIn("google")
        } catch (error) {
          console.log(error)
          //if (error instanceof AuthError){
           // console.log('AuthError')
          //}
          throw error // Rethrow all other errors
        }
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 