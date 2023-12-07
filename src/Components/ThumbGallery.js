import { React, onClick, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../App.css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const ThumbGallery = () => {
  //   const handleClick = () => {
  //     console.log("handle");
  //   };
  const [thumbsSwiper, setThumbsSwiper] = useState("1");
  const params = useParams();
  console.log(params);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://eshop-backend-rose.vercel.app/admin/products/all/${params.productId}`
    );
    const data = await response.json();
    return data;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Error: {error.message} </h3>;
  }

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src={product.productImage} />
        </SwiperSlide>
        {/* <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src={product.productImage} />
        </SwiperSlide>
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src={product.productImage} />
        </SwiperSlide>
        <SwiperSlide thumbsSwiper={thumbsSwiper}>
          <img src={product.productImage} />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide onClick={setThumbsSwiper}>
          <img src={product.images[0]} />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src={product.images[1]} />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src={product.images[2]} />
        </SwiperSlide>
        <SwiperSlide onClick={setThumbsSwiper}>
          <img src={product.images[3]} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ThumbGallery;
