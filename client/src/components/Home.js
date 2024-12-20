import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to ZETA
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your gateway to personalized AI assistance
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/login"
        sx={{ mt: 3 }}
      >
        Get Started
      </Button>
    </Container>
  );
}

export default Home; 