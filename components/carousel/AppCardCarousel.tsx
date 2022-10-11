import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/future/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function AppCardCarousel({images}:{images: JSX.Element[]}) : JSX.Element {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            images.map((x,i) => (
                <SwiperSlide key={i}>{x}</SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
