import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>Signup</h2>
        <TextField label='First name'></TextField><br></br>
        <TextField label='Last name'></TextField><br></br>
        <TextField label='email' variant='outlined'></TextField><br></br>
        <TextField label='password' type='password' variant='outlined'></TextField><br></br>
        <Button variant='contained' color='secondary'>Signup</Button>
      
    </div>
  )
}

export default Signup
