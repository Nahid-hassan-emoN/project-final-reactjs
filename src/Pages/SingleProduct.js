import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import PopularPord from "../Components/PopularPord";
import ReactStars from "react-rating-stars-component";
import ThumbGallery from "../Components/ThumbGallery";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);

  // fetch data

  const params = useParams();
  console.log(params);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://eshop-backend-rose.vercel.app/admin/products/${params.productId}`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["", params.data],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Error: {error.message} </h3>;
  }
  // const { id, price, stock } = product;

  return (
    <>
      <Meta title={data.name} />
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
                  <h4>{data.name}</h4>

                  <h6>
                    Brand :&nbsp;&nbsp;
                    <span
                      className="
                    text-red-400"
                    >
                      {data.company}
                    </span>
                  </h6>
                  <div className=" mt-4">
                    <h5 htmlFor="">Specification</h5>
                    <hr />
                    <div className="specifiCation gap-10">
                      {data.specification.map((item, index) => (
                        <p key={index}>
                          <span className="title">{item.title}:</span>
                          &nbsp;&nbsp; &nbsp;&nbsp;
                          <span>{item.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <hr />
                </div>

                <div className="price">
                  <h3>৳ {data.price}</h3>
                </div>

                <div className="buy-button">
                  <Link to="/cart">
                    <button className="button-71 ">Add To Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="description-wrapper py-3 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Details:</h4>
                  <p>{data.details}</p>
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
                          value={data.rating}
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
