import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          paddingTop: '40px',
          backgroundColor: '#F9F7C9',
          width: '100%',
          marginBottom: '0',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '400px', sm: '600px' },
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: { xs: '20px', sm: '50px' },
          }}
        >
          <Box sx={{ flex: { xs: 1, sm: 0.5 } }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Register
            </Typography>
            <TextField
              label="Username"
              margin="normal"
              sx={{ backgroundColor: 'white', width: '100%' }}
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              sx={{
                backgroundColor: 'white',
                width: '100%',
                marginBottom: '20px',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100%', backgroundColor: '#43766C' }}
            >
              Register
            </Button>
            <Typography align="center" sx={{ mt: '20px' }}>
              have an account? <Link href="#">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default RegisterPage;
