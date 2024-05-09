import React, { useState } from 'react'
import {Paper, Container, Typography, TextField, Button} from "@mui/material"

const Login = () => {

    const [isLogin, setIsLogin] = useState(true)

    const toggleLogin = () => setIsLogin((prev => !prev))

  return (
    <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Paper
            elevation={3}
            sx={{
                padding: 4,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {isLogin ? 
                <>
                    <Typography variant='h5'>Login</Typography>
                    <form>
                        <TextField required fullWidth label="username" margin="normal" variant="outlined"/>
                        <TextField required fullWidth label="password" type='password' margin="normal" variant="outlined"/>
                        <Button sx = {{marginTop: "1rem"}} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button fullWidth variant='text' onClick={toggleLogin}>Sign Up Instead</Button>
                    </form>
                </>
                : 
                <>
                    <Typography variant='h5'>Sign Up</Typography>
                    <form>
                        <TextField required fullWidth label="Name" margin="normal" variant="outlined"/>
                        <TextField required fullWidth label="Bio" margin="normal" variant="outlined"/>
                        <TextField required fullWidth label="username" margin="normal" variant="outlined"/>
                        <TextField required fullWidth label="password" type='password' margin="normal" variant="outlined"/>
                        <Button sx = {{marginTop: "1rem"}} variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button fullWidth variant='text' onClick={toggleLogin}>Log In Instead</Button>
                    </form>
                </>
                }
        </Paper>
    </Container>
  )
}

export default Login
