import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'

const Footer = () => {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#B67352',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: { xs: '20px', sm: '50px' },
            paddingX: { xs: '20px', sm: '50px' },
            paddingTop: '30px',
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              About
            </Typography>
            <p>Our shop sell many kinds of fresh produce</p>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            <p>
              You can contact us for more information through our whatsapp
              number : +62xxxxxxxxxxxx
            </p>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '350px' },
              height: { xs: '250px', sm: '250px' },
              position: 'relative',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3646713682238!2d134.0505925750935!3d-0.8640226991275946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d540b2c49a506c1%3A0xd04ca726c093f408!2sMama%20kitchen!5e0!3m2!1sen!2sid!4v1706319079420!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: 'black', color: 'white', p: '10px' }}>
          <p>Copyright &copy; 2024. All Rights Reserved.</p>
        </Box>
      </Box>
    </>
  )
}

export default Footer
