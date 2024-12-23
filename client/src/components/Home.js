import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden',
      fontFamily: `'Poppins', sans-serif`
    }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(60%)'
        }}
      >
        <source src="/vedios/ZETA_VEDIO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Text Content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
        zIndex: 1
      }}>
        <Typography 
          variant="h2" 
          component="h1" 
          style={{
            fontWeight: 700,
            letterSpacing: '3px',
            marginBottom: '30px',
            animation: 'fadeInScale 1.5s ease-in-out',
            fontSize: '3rem', // Larger font size for the title
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
          }}
        >
          Welcome to ZETA
        </Typography>
        <Typography 
          variant="h4" 
          component="h2" 
          style={{
            fontWeight: 400,
            marginBottom: '40px',
            animation: 'fadeInScale 2s ease-in-out',
            fontSize: '1.8rem', // Larger font size for the subtitle
            color: '#eee',
            textShadow: '1px 1px 6px rgba(0, 0, 0, 0.6)'
          }}
        >
          Your gateway to personalized AI assistance
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/login"
          style={{
            animation: 'bounceIn 2.5s ease-in-out',
            padding: '12px 40px',
            fontWeight: 600,
            fontSize: '18px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          Get Started
        </Button>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes bounceIn {
            0% {
              transform: scale(0.9);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
