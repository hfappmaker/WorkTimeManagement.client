import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import './Login.css'
import { usePostsQuery } from './api/getValue'

function Login() {
  const result = usePostsQuery();
  if (result.isError) {
    return (
      <>
        <h3>error</h3>
      </>
    )
  }

  if (result.isLoading) {
    return (
      <>
        <h3>loading</h3>
      </>
    )
  }

  console.log(result)

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '35ch' },
        button: { m: 1 },
      }}>
        <TextField id="input-mailaddress" label="メールアドレス" variant="outlined" margin="normal"/>
        <TextField id="input-password" label="パスワード" variant="outlined" type='password' />
        <Button variant="contained" >ログイン</Button>
      </Box>
    </>
  )
}

export default Login
