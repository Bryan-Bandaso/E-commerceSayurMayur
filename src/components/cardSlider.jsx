import CardCustom from './card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardSlider = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />

        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />

        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />

        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />

        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />

        <CardCustom
          bgColor="#364F6B"
          title="Special title treatment"
          subtitle="With supporting text below as a natural lead-in to additional content."
          imageUrl="/images/buah naga.jpg"
          flexDirection="column"
          showButton={true}
          cardSize="190px"
          cardHeight="auto"
          color="white"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        />
      </Carousel>
    </>
  );
};

export default CardSlider;
