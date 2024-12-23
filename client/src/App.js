// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100vh',
          width: '100%',
          backgroundColor: '#ffffff',
          margin: 0,
          padding: 0,
          gap: 0,
          position: 'relative',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <NavBar />
        <Box 
          component="main" 
          sx={{ 
            flex: '1 1 auto',
            position: 'relative',
            zIndex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#ffffff',
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
