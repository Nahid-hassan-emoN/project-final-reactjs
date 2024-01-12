import React, { useEffect, useState } from "react";

import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { BsMap, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import { FiCheckCircle, FiTruck } from "react-icons/fi";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartData, setCartData] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedShipping, setSelectedShipping] = useState("Standard");
  async function getCart() {
    const url = "https://eshop-backend-rose.vercel.app/customer/cart";

    try {
      const token = localStorage.getItem("eshopCustomerToken");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCartData(data.cart);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCart();
  }, []);

  const handleDeleteItem = (productId) => {
    console.log(productId);
    const token = localStorage.getItem("eshopCustomerToken");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(
        `https://eshop-backend-rose.vercel.app/customer/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            // Add any additional headers as needed, such as authorization headers
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("DELETE request failed");
          }

          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
          }
          getCart();
          console.log("DELETE request successful");
          // You may want to handle additional logic here after successful deletion
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };
  const handleQuantityChange = (productId, newQuantity) => {
    // Update the quantity and price in the state when input changes
    setCartData((prevCartData) => {
      const updatedProductList = prevCartData.productList.map((item) => {
        if (item.productId._id === productId) {
          const updatedItem = {
            ...item,
            quantity: newQuantity,
            price: newQuantity * item.unitPrice,
          };
          return updatedItem;
        }
        return item;
      });

      const totalPrice = updatedProductList.reduce(
        (total, product) => total + product.price,
        0
      );

      return { ...prevCartData, productList: updatedProductList, totalPrice };
    });
  };

  const handleShippingChange = (e) => {
    setSelectedShipping(e.target.value);
  };
  if (loading) {
    return <Loading />;
  }

  const productList = cartData?.productList || [];
  console.log(productList);

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
                      your selected items
                    </div>
                  </div>
                </div>
                {productList.length === 0 ? (
                  <p className="textCenter font-bold">Cart is empty</p>
                ) : (
                  <div className="">
                    {productList.map((item) => (
                      <div
                        className="row border-top border-bottom"
                        key={item.productId}
                      >
                        <div className="row main align-items-center">
                          <div className="col-2">
                            <img
                              className="img-fluid"
                              src={item.productId.productImage} // Make sure the API response has an 'image' property
                              alt={item.name} // Make sure the API response has a 'name' property
                            />
                          </div>
                          <div className="col">
                            <div className="row text-muted">
                              {item.productId.company}
                            </div>
                            <div className="row">
                              {item.productId.name.substring(0, 35)}
                            </div>
                          </div>
                          <div className="col">
                            <div className="productsQuantity">
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item.productId._id,
                                    parseInt(e.target.value, 10)
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div className="col">
                            &#2547; {item.price}
                            <span
                              className="close"
                              onClick={() =>
                                handleDeleteItem(item.productId._id)
                              }
                            >
                              <AiFillDelete />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="back-to-shop">
                  <Link to="/store">
                    <MdOutlineArrowBack className="text-dark" />
                    &nbsp;&nbsp;
                    <span className="textMuted">Back to Store</span>
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
                  <div className="col text-right"></div>
                </div>
                <form>
                  <p>SHIPPING</p>
                  <select
                    onChange={handleShippingChange}
                    value={selectedShipping}
                  >
                    <option className="text-muted" value="Standard">
                      Standard-Delivery-&#2547; 50
                    </option>
                    <option className="text-muted" value="Fast">
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
                  <div className="col text-right">
                    &#2547;{" "}
                    <strong>
                      {productList.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </strong>
                  </div>
                </div>
                <Link
                  to={
                    productList.length > 0
                      ? `/payment?total=${productList.reduce(
                          (total, product) => total + product.price,
                          0
                        )}`
                      : "#"
                  }
                  onClick={(e) =>
                    productList.length === 0 && alert("Cart is empty")
                  }
                >
                  <button className="btn" disabled={productList.length === 0}>
                    CHECKOUT
                  </button>
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
