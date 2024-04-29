import Button from '@mui/material/Button'
import './Login.css'
import { usePostsQuery } from './api/getValue'

function Login() {
  const result = usePostsQuery();
  if(result.isError){
    return (
      <>
      <h3>error</h3>
      </>
    )
  }

  if(result.isLoading){
    return (
      <>
      <h3>loading</h3>
      </>
    )
  }

  console.log(result)

  return (
    <>
      <Button variant="contained">ログイン</Button>
    </>
  )
}

export default Login
