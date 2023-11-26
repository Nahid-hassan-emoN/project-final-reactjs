import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className="productCard">
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute ">
            <Link to="">
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>

          <div className="product-image">
            <img
              src="images/watch.jpg"
              alt="product img"
              className="inner-img"
            />
          </div>

          <div className="product-details text-dark">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <div className="rate-stars d-flex">
              <ReactStars
                count={5}
                size={18}
                value="4"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="rate-stars-p">(4.9)</p>
            </div>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis in
              perspiciatis error molestiae a ullam!
            </p>
            <p className="price">৳ 15000.00</p>
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
    </>
  );
};

export default ProductCard;
