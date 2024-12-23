import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #000000, #1a1a1a)',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(40, 40, 40, 0.4), rgba(0, 0, 0, 0.4))',
          animation: 'gradientShift 8s ease infinite',
        }
      }}
    >
      <Toolbar
        sx={{
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      >
        {/* Logo / Title */}
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            fontFamily: `'Poppins', sans-serif`,
            fontWeight: 'bold',
            letterSpacing: '2px',
            animation: 'slideInLeft 1.5s ease-in-out, glow 3s ease-in-out infinite',
            textShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        >
          ZETA AI
        </Typography>

        {/* Navigation Links */}
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            fontFamily: `'Roboto', sans-serif`,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            fontFamily: `'Roboto', sans-serif`,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            animation: 'fadeIn 2.5s ease-in-out',
          }}
        >
          Login
        </Button>
      </Toolbar>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </AppBar>
  );
}

export default NavBar;
