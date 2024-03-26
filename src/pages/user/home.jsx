import React from 'react'
import CardCustom from '../../components/card'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Box, Container, Typography, Grid } from '@mui/material'
import CustomButton from '../../components/button'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import '../../css/style.css'

const HomePage = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 620 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 619, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%', backgroundColor: '#F9F7C9' }}>
        {/* Hero */}
        <Box
          className="hero-container"
          sx={{
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            paddingX: '40px',
            paddingY: '40px',
          }}
        >
          <img
            src="/images/home.png"
            alt="food"
            width={'500px'}
            height={'auto'}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Welcome to <br />
              our shop!
            </Typography>
            <p>
              We sell many fresh product that include fruits,vegetables, meats,{' '}
              <br />
              and dairy products
            </p>
            <CustomButton
              variant="contained"
              sx={{ width: '150px', backgroundColor: '#43766C' }}
              s
            >
              Explore Now
            </CustomButton>
          </Box>
        </Box>

        {/* Content 1 */}

        <Box
          className="best-seller"
          sx={{
            padding: 0,
            marginTop: '-5px',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container>
            <Typography
              variant="h5"
              gutterBottom
              color={'black'}
              align="left"
              fontWeight={'bold'}
            >
              Best Seller
            </Typography>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
            >
              <CardCustom
                bgColor="#364F6B"
                title="Dragon Fruit"
                subtitle="Description"
                imageUrl="/images/buah naga.jpg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />

              <CardCustom
                bgColor="#364F6B"
                title="Meat"
                subtitle="Description"
                imageUrl="/images/daging2.jpg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />

              <CardCustom
                bgColor="#364F6B"
                title="Cheese"
                subtitle="Description"
                imageUrl="/images/cheese.jpg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />

              <CardCustom
                bgColor="#364F6B"
                title="Milk"
                subtitle="Description"
                imageUrl="/images/milk.jpg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />

              <CardCustom
                bgColor="#364F6B"
                title="Apple"
                subtitle="Description"
                imageUrl="/images/apple.jpg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />

              <CardCustom
                bgColor="#364F6B"
                title="Spinach"
                subtitle="Description"
                imageUrl="/images/spinach.jpeg"
                flexDirection="column"
                showButton={true}
                cardSize="250px"
                cardHeight="auto"
                color="white"
              />
            </Carousel>
          </Container>
        </Box>

        <Box
          className="why-choose-us"
          sx={{ paddingX: '100px', paddingY: '40px' }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', marginBottom: '40px' }}
          >
            Why Choose Us!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexDirection: 'column',
            }}
          >
            <Box
              className="why-choose-us-card"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E3CAA5',
                padding: '40px',
                borderRadius: '20px',
              }}
            >
              <img
                src="/images/fresh.png"
                alt=""
                width={'150px'}
                height={'150px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  margin: 'auto',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Fresh
                </Typography>
                <Typography variant="h6">
                  We choose the freshest product just for you
                  <br />
                  that includes fruit, fresh meat, dairy product, etc.
                </Typography>
              </Box>
            </Box>
            <Box
              className="why-choose-us-card"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#FFFBE9',
                padding: '40px',
                borderRadius: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  margin: 'auto',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Delivered to your home
                </Typography>
                <Typography variant="h6">
                  We also offer delivery option so you can just wait
                  <br />
                  for us to deliver our product to your home
                </Typography>
              </Box>
              <img
                src="/images/truck.png"
                alt=""
                width={'150px'}
                height={'150px'}
              />
            </Box>
            <Box
              className="why-choose-us-card"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E3CAA5',
                padding: '40px',
                borderRadius: '20px',
              }}
            >
              <img
                src="/images/income.png"
                alt=""
                width={'150px'}
                height={'150px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  margin: 'auto',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Affordable Price
                </Typography>
                <Typography variant="h6">
                  We provide fresh product for everyone to
                  <br />
                  enjoy at an affordable price
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  )
}

export default HomePage
