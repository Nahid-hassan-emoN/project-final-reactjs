import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const ProductCard = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
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
      {products.map((product) => (
        <div className="productCard" key={product.id}>
          <Link
            to={`/product/${product.id}`}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute ">
              <Link to="">
                <img src="images/wish.svg" alt="" />
              </Link>
            </div>

            <div className="product-image">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="inner-img"
              />
            </div>

            <div className="product-details text-dark">
              <h6 className="brand mt-3">{product.brand}</h6>
              <h5 className="product-title">
                {product.description.substring(0, 34)}
              </h5>
              <div className="rate-stars d-flex">
                <ReactStars
                  count={5}
                  size={18}
                  value="4"
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="rate-stars-p">({product.rating})</p>
              </div>

              <p className="price">৳ {product.price}</p>
            </div>

            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-10">
                <Link to="">
                  <img src="images/prodcompare.svg" alt="" />
                </Link>

                <Link to="">
                  <img src="images/view.svg" alt="" />
                </Link>

                <Link to="">
                  <img src="images/add-cart.svg" alt="" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
