import Navbar from '../../components/navbar'

import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Box,
  Paper,
} from '@mui/material'
import { AddShoppingCart, Favorite } from '@mui/icons-material'
import { useState } from 'react'

const DetailProductPage = () => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#F9F7C9', height: '250px' }}>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src="/images/buah naga.jpg"
                alt="product"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4" gutterBottom align="left">
                    Dragon Fruit
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Rp.10.000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    backgroundColor: '#76453B',
                    width: '180px',
                    padding: '10px',
                    borderRadius: '8px',
                  }}
                >
                  <Typography variant="body1" sx={{ mr: 1, color: 'white' }}>
                    Rating
                  </Typography>
                  <Typography variant="body1" color="error">
                    ⭐⭐⭐⭐⭐
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Button variant="contained" onClick={handleDecrement}>
                    -
                  </Button>
                  <TextField
                    type="text"
                    variant="outlined"
                    value={quantity}
                    InputProps={{
                      inputProps: { min: 1 },
                      sx: {
                        textAlign: 'center',
                        '& input': {
                          textAlign: 'center',
                        },
                      },
                    }}
                    sx={{
                      mx: 1,
                      width: '60px',
                    }}
                  />

                  <Button variant="contained" onClick={handleIncrement}>
                    +
                  </Button>
                </Box>

                <TextField
                  multiline
                  rows={6}
                  fullWidth
                  variant="outlined"
                  placeholder="Description..."
                />
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCart />}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Favorite />}
                  >
                    Save to Wishlist
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: '#76453B', height: '350px' }}></Box>
    </>
  )
}

export default DetailProductPage
