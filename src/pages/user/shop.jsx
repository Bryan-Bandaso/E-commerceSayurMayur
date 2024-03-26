import React from 'react';
import { Typography, TextField } from '@mui/material';
import Navbar from '../../components/navbar';
import Box from '@mui/material/Box';

import CardSliderLayout from '../../layouts/CardSlider.layout';
import Footer from '../../components/footer';

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#F9F7C9' }}>
        <Box sx={{ height: '200px', zIndex: '-1' }}>
          <img
            src="/images/bgShop.jpg"
            alt=""
            width={'100%'}
            height={'400px'}
          />
        </Box>

        <Box
          sx={{
            width: '70%',
            margin: '0 auto',
            padding: '40px',
            backgroundColor: '#FFFBE9',
            height: 'auto',
            zIndex: '1',
            position: 'relative',
            borderRadius: '20px',
            paddingBottom: '10px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              align="left"
              fontWeight={'bold'}
              marginBottom={'10px'}
            >
              Categories
            </Typography>

            <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              InputProps={{
                sx: { color: 'white' },
              }}
              InputLabelProps={{
                sx: { color: 'white' },
              }}
              sx={{
                backgroundColor: '#43766C',
                width: '200px',
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              marginBottom: '50px',
            }}
          >
            {/* Categories Boxes */}
          </Box>

          {/* Card Slider Layouts */}
          <CardSliderLayout title="Vegetable" />
          <CardSliderLayout title="Meat" />
          <CardSliderLayout title="Fruits" />
          <CardSliderLayout title="Seasoning" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ShopPage;
