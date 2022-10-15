import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from '../../styles/swiper-perview.module.css'

// import required modules
import { Autoplay } from "swiper";

interface AppNavarCarouselProps {
    links: JSX.Element[]
}

export default function AppPerViewCarousel({links}: AppNavarCarouselProps) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        navigation={true}
        className={`${styles['swiper-slide']} mySwiper`}
      >
        {
            links.map((x,i) => <SwiperSlide className={`${styles['swiper-slide']}`} key={i}>{x}</SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
