/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import './Login.css'
import { useValidateLoginUser } from './api/Login'
import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import { DialogContent, FilledInput, FormHelperText } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation, useQuery } from "react-query"
import useEpic from "./useEpic"
import { interval, zip, empty } from "rxjs";
import { map, mapTo, switchMap } from "rxjs/operators";
// import Fade from '@mui/material/Fade';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, isError, validateLoginUser } = useValidateLoginUser(email, password, (data) => {
    console.log(data.isSuccess ? "Success" : "Failed")
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLoginUser();
  }

  // useEpic(
  //   (p) => {
  //     const [email$, ] = p;
  //     return email$;
  //   },
  //   {
  //     next: () => {},
  //     error: () => {},
  //     complete: () => {},
  //   },
  //   [email, password]
  // )

  // useEffect(() => {
  //   inputs.forEach((d, i) => {
  //     inputs$Ref.current[i].next(d)
  //   });
  //   return () => { };
  // }, inputs)

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
          <TextField id="input-mailaddress" label="メールアドレス" variant="outlined" margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="input-password" label="パスワード" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" type="submit">ログイン</Button>
        </Box>
      </form>
    </>
  )
}

export default Login
