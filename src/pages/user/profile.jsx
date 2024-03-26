import React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          paddingTop: '40px',
          backgroundColor: '#F9F7C9',
          width: '100%',
          marginBottom: '0',
          minHeight: '70vh',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mt: '20px' }}
        >
          Profile
        </Typography>
        <Box sx={{ flexGrow: 1, width: '100%', maxWidth: '700px', mx: 'auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nama Lengkap"
                margin="normal"
                sx={{ backgroundColor: 'white', width: '100%' }}
              />
              <TextField
                label="Nomor Telepon"
                margin="normal"
                sx={{ backgroundColor: 'white', width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Alamat"
                multiline
                rows={6}
                sx={{
                  backgroundColor: 'white',
                  width: '100%',
                  marginTop: '14px',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            maxWidth: '300px',
            mx: 'auto',
            mt: '20px',
            backgroundColor: '#43766C',
          }}
        >
          Simpan
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
