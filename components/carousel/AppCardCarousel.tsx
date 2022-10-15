import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from '../../styles/swiper-card.module.css'

// import required modules
import { EffectCards } from "swiper";

export default function AppCardCarousel({images}:{images: JSX.Element[]}) : JSX.Element {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {
            images.map((x,i) => (
                <SwiperSlide className={styles['swiper-slide']} key={i}>{x}</SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
