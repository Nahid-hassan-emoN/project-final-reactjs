import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { FaCartPlus } from "react-icons/fa";
const PopularPord = () => {
  return (
    <>
      <div className="popularProduct mt-3">
        <div className="popular-product-card position-relative">
          <div className="popular-product-image">
            <img
              src="/images/alexa.png"
              alt="product img"
              className="inner-img"
            />
          </div>

          <div className="product-details">
            <h6 className="brand mt-3">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <div className="rate-stars">
              <ReactStars
                count={5}
                size={18}
                value="4"
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            <p className="price">৳ 15000.00</p>
            <Link to="/store">
              <div className="button-71">
                <FaCartPlus />
                &nbsp;&nbsp;&nbsp; Buy Now
              </div>
            </Link>
          </div>

          <div className="action-icon position-absolute">
            <div className="d-flex flex-column gap-10">
              <Link to="">
                <FavoriteBorderIcon />
              </Link>
              <Link to="">
                <CompareArrowsIcon />
              </Link>

              <Link to="">
                <RemoveRedEyeIcon />
              </Link>

              <Link to="">
                <ShoppingBagIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPord;
