import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import PopularPord from "../Components/PopularPord";
import ReactStars from "react-rating-stars-component";
import ThumbGallery from "./ThumbGallery";
import { Link } from "react-router-dom";

const SingleProduct = (product) => {
  const [orderProduct, setOrderProduct] = useState(true);
  const { id, price, stock } = product;

  // const [color, setColor] = useState(color[0]);

  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <Meta title={" Product Name"} />
      <BreadCrumb title=" Product Name" />

      <div className="single-product py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="main-product-wrapper py-3 home-wrapper-2">
            <div className="row">
              <div className="col-7 image-gallery">
                <ThumbGallery />
              </div>
              <div className="col-5">
                <div className="branding">
                  <h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <h6>
                    <span>Brand</span>lorem
                  </h6>
                  <p>
                    <span>Specification</span>
                  </p>
                  <hr />
                </div>

                <div className="price">
                  <h3>৳ 6,299</h3>
                </div>

                <div className="buy-button">
                  <Link to="/cart" onClick={() => (id, amount, price, product)}>
                    <button className="button-71 ">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="description-wrapper py-3 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Details</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis error, illo rem ut itaque vitae exercitationem
                    culpa voluptate aspernatur rerum officia autem! Aliquid,
                    magni debitis!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="reviews-wrapper py-3 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-center">
                    <div className=" ">
                      <h4>Customer Review</h4>
                      <div className="d-flex gap-10 align-items-center">
                        <ReactStars
                          count={5}
                          size={18}
                          value="4"
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p>Based On 2 Reviews</p>
                      </div>
                    </div>
                    {orderProduct && (
                      <div className="">
                        <a href="" className=" text-decoration-underline ">
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="review-form"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="popular-wrapper py-3">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">You also Link</h3>

                <div className="row">
                  <PopularPord />
                  <PopularPord />
                  <PopularPord />
                  <PopularPord />
                  <PopularPord />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
