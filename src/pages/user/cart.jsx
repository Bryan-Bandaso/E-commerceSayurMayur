import React from 'react';
import Navbar from '../../components/navbar';
import { Box } from '@mui/material';
import Footer from '../../components/footer';

import '../../css/style.css';

import TableCustom from '../../components/table';
import SummaryCart from '../../components/summaryCart';

const CartPage = () => {
  return (
    <>
      <Navbar />
      <Box
        className="cart"
        sx={{
          height: 'auto',
          paddingY: '40px',
          paddingX: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F9F7C9',
        }}
      >
        <Box className="cart-table" sx={{ width: '65%' }}>
          <TableCustom />
        </Box>
        <Box className="cart-summary" sx={{ width: '31%' }}>
          <SummaryCart />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default CartPage;
