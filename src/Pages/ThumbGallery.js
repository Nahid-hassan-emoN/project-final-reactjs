import { React, onClick, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../App.css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";

const ThumbGallery = () => {
  //   const handleClick = () => {
  //     console.log("handle");
  //   };
  const [thumbsSwiper, setThumbsSwiper] = useState("1");
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ThumbGallery;
