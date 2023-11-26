import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ReactStars from "react-rating-stars-component";

const RandomProduct = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone.jpg" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone2.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone3.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone4.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone5.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone4.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone3.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone2.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="random-products d-flex align-items-center gap-10 ">
            <img src="images/headphone6.png" alt="" />
            <div className="random-products-text">
              <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
              <div className="rate-stars">
                <ReactStars
                  count={5}
                  size={18}
                  value={"4"}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <span className="red-p">৳ 1200 </span>
                &nbsp;
                <strike>৳ 1500</strike>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RandomProduct;
