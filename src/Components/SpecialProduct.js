import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="specialProductCard mt-3">
        <div className="special-product-card justify-content-between">
          <div className="special-product-img img-fluid">
            <img src="images/s-22-ultra.png" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Samsung</h5>
            <h6 className="title">Samsung Galaxy Notepad10+ Mobile Phone</h6>
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
              <span className="text-red-400">৳ 120000 </span>
              <br />
              <strike className="text-red-400">৳ 125000</strike>
            </p>

            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-warning">1</span>:
                <span className="badge rounded-circle p-2 bg-warning">1</span>:
                <span className="badge rounded-circle p-2 bg-warning">1</span>
              </div>
            </div>

            <div className="prod-count mt-3">
              <p>Product: 5</p>
              <div className="progress">
                <div
                  classNames="progress-bar bg-info"
                  role="progressbar"
                  aria-label="Info example"
                  style={{ width: "10%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <Link className="cart-btn mt-2" to="/store">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
