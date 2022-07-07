import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1 style={{textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>Login Page</h1>
    <TextField id="outlined-basic" label="Enter email Id" variant="outlined" />
    <br />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <br />
    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
    <br />
    <Button variant="contained">Register</Button>
    </Box>
  );
}