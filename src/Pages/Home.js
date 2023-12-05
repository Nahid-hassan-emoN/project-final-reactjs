import React from "react";
import "../App.css";
import Marquee from "react-fast-marquee";

import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";
import PopularPord from "../Components/PopularPord";

import "./Responsive.css";
import MarqueBrand from "../Components/MarqueBrand";
import MarqueProduct from "../Components/MarqueProduct";

const Home = () => {
  return (
    <>
      <Meta title={"Home"} />

      <section className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="topMainBanner gap-20">
            <div className="topMainBanner1">
              <div className="main-banner ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content ">
                  <h4>SuperCharged For Pros</h4>
                  <h5>Airpod Pro S13+.</h5>
                  <p>
                    From $199.00 or $11.99/mo.
                    <br />
                    for 24mo/mo*
                  </p>
                </div>
              </div>
            </div>

            {/* --------small-banner--------- */}
            <div className="topMainBanner2">
              <div className="d-flex flex-wrap justify-content-between align-items-center ">
                <div className="small-banner ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content ">
                    <h4>Best sale</h4>
                    <h5>Mac-Book Pro.</h5>
                    <p>
                      From $999.00 or <br /> $41.99/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner py-2">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content ">
                    <h4>New Arrival</h4>
                    <h5>iWatch 9.</h5>
                    <p>
                      From $299.00 or <br /> $21.99/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner py-2">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content ">
                    <h4>New Arrival</h4>
                    <h5>ipad Pro.</h5>
                    <p>
                      From $399.00 or <br /> $31.99/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner py-2">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content ">
                    <h4>New Arrival</h4>
                    <h5>AirPods Max.</h5>
                    <p>
                      From $199.00 or <br /> $11.99/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---First--Marque-Collection--- */}
      <MarqueProduct />

      {/* ---Featured Collection--- */}
      <section className="featured-wrapper py-3">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      {/* ----famous-wrapper---- */}

      <section className="famous-wrapper py-3">
        <div className="container-xxl">
          <h3 className="section-heading">Treading Products</h3>
          <div className="d-flex flex-wrap gap-10">
            <div className="treadingCardPro">
              <div className="famous-card position-relative">
                <img src="images/iwatch2.jpg" alt="" className="img-fluid" />

                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart Watch series-9</h6>
                  <p>From ৳ 8000 or ৳ 1500/mo. for 24 mo.</p>
                </div>
              </div>
            </div>

            <div className="treadingCardPro">
              <div className="famous-card position-relative">
                <img src="images/laptop5.jpg" alt="" className="img-fluid" />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark mb-0">Studio Display</h5>
                  <h6 className="text-dark">600 nits of Brightness</h6>
                  <p className="">27-inch 5k Retina Display</p>
                </div>
              </div>
            </div>

            <div className="treadingCardPro">
              <div className="famous-card position-relative">
                <img
                  src="images/iphone3.jpg"
                  alt=""
                  className="img-fluid iphone-12"
                />

                <div className="famous-content position-absolute">
                  <h5>SmartPhones</h5>
                  <h6>SmartPhone 14 pro max</h6>
                  <p>From ৳ 120000 or ৳ 11000/mo. for 12 mo.</p>
                </div>
              </div>
            </div>

            <div className="treadingCardPro">
              <div className="famous-card position-relative">
                <img
                  src="images/i-speaker3.png"
                  alt=""
                  className="img-fluid "
                />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-filling sound</h6>
                  <p className="text-dark">
                    From ৳ 25000 or ৳ 12000/mo. for 12 mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---Deals & Discounts:--- */}

      <section className="special-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Deals & Discounts:</h3>

              <div className="row">
                <SpecialProduct />
                <SpecialProduct />
                <SpecialProduct />
                <SpecialProduct />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---Our Popular Products--- */}
      <section className="popular-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>

              <div className="row">
                <PopularPord />
                <PopularPord />
                <PopularPord />
                <PopularPord />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---marque---- */}
      <MarqueBrand />
      {/* ---DELIVERY--- */}

      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="service-content gap-15">
                  <img src="images/service.png" alt="" />
                  <div className="service-content-text">
                    <h6>Free Shipping</h6>
                    <p>From all order over $100</p>
                  </div>
                </div>
                <div className="service-content gap-15">
                  <img src="images/service-02.png" alt="" />
                  <div className="service-content-text">
                    <h6>Daily Surprise Offer</h6>
                    <p>Save up to 25%</p>
                  </div>
                </div>

                <div className="service-content gap-15">
                  <img src="images/service-03.png" alt="" />
                  <div className="service-content-text">
                    <h6>Support 24/7</h6>
                    <p> Shop With an Expert</p>
                  </div>
                </div>

                <div className="service-content gap-15">
                  <img src="images/service-04.png" alt="" />
                  <div className="service-content-text">
                    <h6>Affordable Prices</h6>
                    <p>Get Factory Direct price</p>
                  </div>
                </div>

                <div className="service-content gap-15">
                  <img src="images/service-05.png" alt="" />
                  <div className="service-content-text">
                    <h6>Secure Payment</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---Our Latest Blogs--- */}
      {/* <section className="blog-wrapper py-3">
                <div className="container-xxl">
                    <h3 className='section-heading'>
                        Our Latest Blogs
                    </h3>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>

                    </div>


                </div>
            </section> */}
    </>
  );
};

export default Home;
