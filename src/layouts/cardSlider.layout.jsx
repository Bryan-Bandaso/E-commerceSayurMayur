import React from 'react';
import CardSlider from '../components/cardSlider';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CustomButton from '../components/button';

const CardSliderLayout = ({ title }) => {
  return (
    <>
      <Box sx={{ marginBottom: '50px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h5"
            align="left"
            fontWeight={'bold'}
            marginTop={'10px'}
          >
            {title}
          </Typography>
          <CustomButton
            variant="contained"
            sx={{
              width: '130px',
              height: '30px',
              backgroundColor: '#43766C',
            }}
          >
            See all
          </CustomButton>
        </Box>

        <CardSlider />
      </Box>
    </>
  );
};

export default CardSliderLayout;
