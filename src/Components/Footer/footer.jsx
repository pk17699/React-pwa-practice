import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { grey} from '@mui/material/colors';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: grey[900]}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Copyright@2022
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}