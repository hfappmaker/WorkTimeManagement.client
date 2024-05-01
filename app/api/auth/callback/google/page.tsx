'use client'
import { useQuery } from "react-query";
import { httpGet } from "../../../../../common/fetch/http"
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import { DialogContent, FilledInput, FormHelperText } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { interval, zip, empty } from "rxjs";
import { map, mapTo, switchMap } from "rxjs/operators";
import React from "react"
// import Fade from '@mui/material/Fade';

// レスポンスの型定義
interface ValidateLoginUserResponse {
    isSuccess: boolean;
}

const useValidateLoginUser = (
    email: string,
    password: string,
    onSuccess: (data: ValidateLoginUserResponse) => void
) => {
    const { isLoading, isError, refetch } = useQuery(
        [email + password],
        httpGet<ValidateLoginUserResponse>("/ValidateLoginUser", {
            email: email,
            password: password,
        }),
        { enabled: false, onSuccess: onSuccess }
    );
    return { isLoading, isError, validateLoginUser: refetch };
};

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, isError, validateLoginUser } = useValidateLoginUser(email, password, (data) => {
        console.log(data.isSuccess ? "Success" : "Failed")
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        validateLoginUser();
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
                    <TextField id="input-mailaddress" label="メールアドレス" variant="outlined" margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="input-password" label="パスワード" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button variant="contained" type="submit">ログイン</Button>
                </Box>
            </form>
        </>
    )
}