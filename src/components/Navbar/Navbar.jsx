import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { Link } from '@mui/icons-material';
import './Navbar.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar id='toolbar'>
          
          <Typography  component={RouterLink} to="/" >
            Home
          </Typography>
          <Typography variant="h6" component={RouterLink} to="/About">
            About Us
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}