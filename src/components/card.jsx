import React from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import CustomButton from '../components/button';

import Typography from '@mui/material/Typography';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardCustom = (props) => {
  const {
    bgColor,
    imageUrl,
    title,
    subtitle,
    flexDirection,
    imageSizes,
    showButton,
    cardSize,
    cardHeight,
    color,
    boxShadow,
  } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: flexDirection,
        backgroundColor: bgColor,
        paddingY: '10px',
        paddingX: '10px',
        width: cardSize,
        height: cardHeight,
        boxShadow: boxShadow,
      }}
    >
      <CardMedia
        component="img"
        sx={imageSizes}
        image={imageUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            component="div"
            variant="h7"
            color={color}
            textAlign="auto"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography
            variant="h7"
            color={color}
            component="div"
            textAlign="auto"
          >
            {subtitle}
          </Typography>
        </CardContent>
        {showButton && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CustomButton
              variant="contained"
              sx={{
                backgroundColor: '#43766C',
                width: '150px',
                fontSize: '12px',
                height: '40px',
              }}
            >
              <AddShoppingCartIcon sx={{ width: '20px', height: '20px' }} />
              Buy Now
            </CustomButton>
            <CustomButton
              variant="contained"
              sx={{
                backgroundColor: 'green',
                marginLeft: '10px',
                width: '150px',
                fontSize: '12px',
                height: '40px',
              }}
            >
              Details
              <DoubleArrowIcon sx={{ width: '20px', height: '20px' }} />
            </CustomButton>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default CardCustom;
