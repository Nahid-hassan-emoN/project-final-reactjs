import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Colors from "../Components/Colors";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3 gap-10">
                    ৳ 500 &nbsp;
                    <strike>৳ 650</strike>
                  </h6>
                </div>
                <div className="product-detail">
                  <h6>Brand :</h6>
                  <p> Havels</p>
                </div>
                <div className="product-detail">
                  <h6>Type :</h6>
                  <p> Watch</p>
                </div>
                <div className="product-detail">
                  <h6>SKU :</h6>
                  <p> SKU023</p>
                </div>
                <div className="product-detail">
                  <h6>Availability :</h6>
                  <p> In Stock</p>
                </div>
                <div className="product-detail">
                  <h6>color :</h6>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h6>Size :</h6>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                    <p>XL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3 gap-10">
                    ৳ 500 &nbsp;
                    <strike>৳ 650</strike>
                  </h6>
                </div>
                <div className="product-detail">
                  <h6>Brand :</h6>
                  <p> Havels</p>
                </div>
                <div className="product-detail">
                  <h6>Type :</h6>
                  <p> Watch</p>
                </div>
                <div className="product-detail">
                  <h6>SKU :</h6>
                  <p> SKU023</p>
                </div>
                <div className="product-detail">
                  <h6>Availability :</h6>
                  <p> In Stock</p>
                </div>
                <div className="product-detail">
                  <h6>color :</h6>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h6>Size :</h6>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                    <p>XL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
