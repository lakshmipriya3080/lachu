import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Link to='/'>React app</Link>
        </Typography>
        <Button color='inherit'><Link to="/login">Login</Link></Button>
        <Button color='inherit'><Link to="/signup">Signup</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
