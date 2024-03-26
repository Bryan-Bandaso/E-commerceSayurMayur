import { Box, Typography } from '@mui/material'
import CustomButton from '../components/button'

const SummaryCart = () => {
  return (
    <>
      {' '}
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#76453B',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '18px',
            color: 'white',
          }}
        >
          Summary Cart
        </Typography>
        <Box sx={{ paddingX: '20px', paddingY: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Total Harga</p>
            <p>RP. 500.000</p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Biaya Pengiriman</p>
            <p>Rp. 20.000</p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Diskon atau Kode Promo</p>
            <p>Rp. 30.000</p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Metode Pembayaran</p>
            <p></p>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Total Bayar</p>
            <p>Rp. 49.000</p>
          </Box>
          <CustomButton
            sx={{
              width: '100%',
              backgroundColor: '#43766C',
              color: 'white',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
          >
            Check Out
          </CustomButton>
        </Box>
      </Box>
    </>
  )
}

export default SummaryCart
