import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className=" px-2 py-2">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3"> ৳ 500</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className=" px-2 py-2">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3"> ৳ 500</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className=" px-2 py-2">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3"> ৳ 500</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className=" px-2 py-2">
                  <h5 className="title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <h6 className="price mt-3 mb-3"> ৳ 500</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
