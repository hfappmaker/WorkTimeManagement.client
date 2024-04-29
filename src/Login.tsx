import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import './Login.css'
import { usePostsQuery } from './api/getValue'
import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useMutation } from "react-query"
// import Fade from '@mui/material/Fade';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, mutate } = useMutation(
    () => axios.get('http://localhost:8000/ping'),
    {
      onSuccess: () => {
        console.log("Success");
      },
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate()
  }

  return (
    <>
      <Dialog aria-describedby="progress" open={isLoading} aria-busy={isLoading} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <form onSubmit={handleSubmit}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '35ch' },
        button: { m: 1 },
      }}>
        <TextField id="input-mailaddress" label="メールアドレス" variant="outlined" margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField id="input-password" label="パスワード" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" type="submit">ログイン</Button>
      </Box>
      </form>
    </>
  )
}

export default Login
