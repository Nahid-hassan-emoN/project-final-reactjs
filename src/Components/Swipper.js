import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Swipper = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          loop: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="justify-content-center">
          <img src="images/tab.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tab1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tab2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tab3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tv.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/phone.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
