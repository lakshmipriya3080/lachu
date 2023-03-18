import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br>
        </br>
        <h1>Login</h1>
      
     
      <TextField label='email' variant='outlined'></TextField>
      <TextField label='password' type='password' variant='filled'></TextField>
      <br></br>
      <Button variant='outlined' color='primary'>Login</Button>

      
    </div>
  )
}

export default Login
