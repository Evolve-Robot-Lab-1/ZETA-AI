import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        backgroundColor: '#000000',
        color: '#ffffff',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        zIndex: 2,
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          fontFamily: `'Poppins', sans-serif`,
          fontSize: '1.2rem',
          letterSpacing: '1px',
          animation: 'fadeIn 2s ease-in-out',
          textShadow: '1px 1px 6px rgba(0, 0, 0, 0.4)',
        }}
      >
        © {new Date().getFullYear()} ZETA. All rights reserved.
      </Typography>

      {/* Decorative line for style */}
      <Box
        sx={{
          mt: 2,
          height: '2px',
          width: '60%',
          margin: '0 auto',
          background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
          animation: 'growWidth 2s ease-in-out',
        }}
      />
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes growWidth {
            0% {
              width: 0%;
            }
            100% {
              width: 60%;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Footer;
