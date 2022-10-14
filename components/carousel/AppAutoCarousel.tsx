import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

interface AppNavarCarouselProps {
    links: JSX.Element[]
}

export default function AppAutoCarousel({links}: AppNavarCarouselProps) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            links.map((x,i) => <SwiperSlide key={i}>{x}</SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
