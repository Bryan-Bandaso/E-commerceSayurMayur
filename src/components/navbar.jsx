import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize > 600) {
      setIsMenuOpen(false);
    }
  }, [screenSize]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#F9F7C9',
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '20px',
          flexDirection: { xs: 'column', sm: 'row' },
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: { xs: '20px', sm: 0 },
          }}
        >
          <Box
            onClick={handleMenuToggle}
            sx={{
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <MenuIcon
              sx={{ color: 'black', mr: '10px', width: '40px', height: '30px' }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ color: '#76453B', fontWeight: 'bold' }}
            >
              Sayur Mayur
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: '#76453B',
              fontWeight: 'bold',
              width: '350px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Sayur Mayur
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',
            gap: '20px',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Link href="#" underline="hover">
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              Home
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              Shop
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <AccountCircleIcon
            sx={{ color: 'black', width: '40px', height: '30px' }}
          />
          <ShoppingCartIcon
            sx={{ color: 'black', width: '40px', height: '30px' }}
          />
        </Box>
      </AppBar>
      {isMobileMenuOpen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: '20px',
            position: 'absolute',
            top: '60px',
            left: '0',
            right: '0',
            backgroundColor: '#F9F7C9',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            zIndex: 1,
            px: '20px',
          }}
        >
          <Link href="#" underline="hover">
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              Home
            </Typography>
          </Link>
          <Link href="#" underline="hover">
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              Shop
            </Typography>
          </Link>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <AccountCircleIcon
              sx={{ color: 'black', mr: '10px', width: '40px', height: '30px' }}
            />
            <ShoppingCartIcon
              sx={{ color: 'black', width: '40px', height: '30px' }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
