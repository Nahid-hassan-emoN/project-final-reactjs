import React, { useState } from "react";

import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { BsMap, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import { FiCheckCircle, FiTruck } from "react-icons/fi";

import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <div className="cart home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="cartIcons mx-auto d-flex py-3 gap-10">
              <div className="cart--icon">
                <AiOutlineShoppingCart className="cart__icon" />
                <p>1.</p>
                <p> My Cart</p>
              </div>
              <div className="cart--icon">
                <BsMap className="cart__icon" />
                <p>2.</p>
                <p>Shipping info</p>
              </div>
              <div className="cart--icon">
                <FiTruck className="cart__icon" />
                <p>3.</p>
                <p> Delivery info</p>
              </div>
              <div className="cart--icon">
                <BsCreditCard2Back className="cart__icon" />
                <p>4. </p>
                <p>Payment info</p>
              </div>
              <div className="cart--icon">
                <FiCheckCircle className="cart__icon" />
                <p>5. </p>
                <p> Confirmation &nbsp; </p>
              </div>
            </div>
          </div>

          <div className="cart-table mx-auto py-5">
            <div className="row">
              <div className="cart-table-info">
                <div className="title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Shopping Cart</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      3 items
                    </div>
                  </div>
                </div>
                <div className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/1GrakTl.jpg"
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">Shirt</div>
                      <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                      <div className="productsQuantity ">
                        <input type="number" />
                      </div>
                    </div>
                    <div className="col">
                      &#2547; 44.00
                      <span className="close">
                        <AiFillDelete />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/ba3tvGm.jpg"
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">Shirt</div>
                      <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                      <div className="productsQuantity ">
                        <input type="number" />
                      </div>
                    </div>
                    <div className="col">
                      &#2547; 44.00
                      <span className="close">
                        <AiFillDelete />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/pHQ3xT3.jpg"
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">Shirt</div>
                      <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                      <div className="productsQuantity ">
                        <input type="number" />
                      </div>
                    </div>
                    <div className="col">
                      &#2547; 44.00
                      <span className="close">
                        <AiFillDelete />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="back-to-shop">
                  <Link to="/store">
                    <MdOutlineArrowBack className="text-dark" />
                    &nbsp;&nbsp;
                    <span className="text-muted">Back to Store</span>
                  </Link>
                </div>
              </div>
              <div className="summary">
                <div>
                  <h5>
                    <b>Summary</b>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col" style={{ paddingLeft: "0" }}>
                    ITEMS 3
                  </div>
                  <div className="col text-right">&#2547; 132.00</div>
                </div>
                <form>
                  <p>SHIPPING</p>
                  <select>
                    <option className="text-muted">
                      Standard-Delivery-&#2547; 50
                    </option>
                    <option className="text-muted">
                      Very Fast-Delivery- &#2547; 100
                    </option>
                  </select>
                  <p>GIVE CODE</p>
                  <input id="code" placeholder="Enter your code" />
                </form>
                <div
                  className="row"
                  style={{
                    borderTop: " 1px solid rgba(0,0,0,.1)",
                    padding: "2vh 0",
                  }}
                >
                  <div className="col">TOTAL PRICE</div>
                  <div className="col text-right">&#2547; 137.00</div>
                </div>
                <Link to="/payment">
                  <button className="btn">CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between gap-10">
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
    </>
  );
};

export default Cart;
