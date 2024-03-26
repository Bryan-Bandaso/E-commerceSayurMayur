import React from 'react';
import { Box, TextField, Button, Typography, Link, Grid } from '@mui/material';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const LoginPage = () => {
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
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box sx={{ padding: '20px' }}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Login
              </Typography>
              <TextField
                label="Username"
                margin="normal"
                fullWidth
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                sx={{ backgroundColor: 'white', marginBottom: '20px' }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#43766C' }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: '20px', color: 'blue' }}>
                Forgot your Password?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
