import React from "react";
import Marquee from "react-fast-marquee";

const MarqueProduct = () => {
  return (
    <>
      <section className="marque-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="gap-15">
                  <div className="d-flex gap-10 align-items-center mx-4 w-22">
                    <img src="images/camera.jpg" alt="" />
                    <div className="">
                      <h6>Camera & video</h6>
                      <p>10 Items</p>
                    </div>
                  </div>

                  <div className="d-flex gap-10 align-items-center mx-4 w-22">
                    <img src="images/laptop9.png" alt="" />
                    <div className="">
                      <h6>computer & Laptop</h6>
                      <p>10 Items</p>
                    </div>
                  </div>

                  <div className="d-flex gap-10 align-items-center mx-4 w-22">
                    <img src="images/headphone.jpg" alt="" />
                    <div className="">
                      <h6>Headphones</h6>
                      <p>10 Items</p>
                    </div>
                  </div>

                  <div className="d-flex gap-10 align-items-center mx-4 w-22">
                    <img src="images/tv.jpg" alt="" />
                    <div className="">
                      <h6>Smart Television</h6>
                      <p>10 Items</p>
                    </div>
                  </div>

                  <div className="d-flex gap-10 align-items-center mx-4 w-22">
                    <img src="images/acc.jpg" alt="" />
                    <div className="">
                      <h6>Accessories</h6>
                      <p>10 Items</p>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarqueProduct;
