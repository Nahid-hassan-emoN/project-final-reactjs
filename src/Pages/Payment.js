import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import { FaCcMastercard, FaCreditCard } from "react-icons/fa";
import { Link, Navigate, unstable_HistoryRouter } from "react-router-dom";
import Swal from "sweetalert2";
const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Cash On Delivery");
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Fetch cart data when the component mounts
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem("eshopCustomerToken");
        const response = await fetch(
          "https://eshop-backend-rose.vercel.app/customer/cart",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }

        const cartData = await response.json();
        console.log(cartData);

        setCart(cartData.cart);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCartData();
  }, []);
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleConfirmPayment = async () => {
    const orderConfirmationData = {
      paymentMethod: selectedPaymentMethod,
      // Add other necessary data for order confirmation
    };

    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Confirm This Order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("eshopCustomerToken");
          const response = await fetch(
            "https://eshop-backend-rose.vercel.app/customer/orders",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
              body: JSON.stringify(orderConfirmationData),
            }
          );

          if (!response.ok) {
            throw new Error("Order confirmation request failed");
          }

          const responseData = await response.json();
          console.log("Order confirmation response:", responseData);

          // Show success message
          Swal.fire({
            title: "Confirmed!",
            text: "Your order has been confirmed.",
            icon: "success",
          }).then(() => {
            // Redirect to the home page
            window.location.href = "/"; // Replace "/" with your home page URL
          });

          // Handle success, e.g., redirect to a confirmation page or update UI
        } catch (error) {
          console.error("Error:", error);
          // Handle error, e.g., show an error message to the user
          Swal.fire({
            title: "Error",
            text: "Failed to confirm the order.  Already Ordered",
            icon: "error",
          });
        }
      }
    });
  };
  const totalCartPrice = cart.productList
    ? cart.productList.reduce((total, product) => total + product.price, 0)
    : 0;
  return (
    <>
      <Meta title={"Confirm Payment"} />
      <BreadCrumb title="Confirm Payment" />

      <div className="container-xxl">
        <div fluid className="p-5 mb-5 " style={{ backgroundColor: "#eee" }}>
          <div>
            <div className="paymentALlInfo justify-content-center pb-5 gap-10">
              <div md="7" xl="5" className="payment-1 mb-4 mb-md-0">
                <div className="py-4 d-flex flex-row">
                  <h5>
                    <span className="far fa-check-square pe-2"></span>
                    <b>Confirm Your Payment</b> |
                  </h5>
                  <span className="ps-2">Pay now</span>
                </div>

                <div className="d-flex pt-2">
                  <div className="ms-auto">
                    <p className="text-primary">
                      <p fas icon="plus-circle" className="text-primary pe-1" />
                      Add your Address
                    </p>
                  </div>
                </div>
                <div className="row discountCode gap-20">
                  <div
                    className="rounded d-flex col-5 mt-3"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="">Discount Codes & Offers</div>
                    <input
                      type="text"
                      placeholder="Discount Code"
                      className="ms-auto p-2"
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div
                    className="rounded d-flex col-6 mt-3"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="p-2">Enter Your Address</div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="ms-auto p-2"
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <hr />
                <div className="pt-2">
                  <div className="d-flex pb-2">
                    <div>
                      <p>
                        <b>Payment Gateway</b>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="text-primary">
                        <p
                          fas
                          icon="plus-circle"
                          className="text-primary pe-1"
                        />
                        confirm payment Method
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <input
                        type="radio"
                        name="radioNoLabel"
                        id="radioNoLabel1"
                      />
                    </div>
                    <div className="rounded border d-flex w-100 p-3 align-items-center">
                      <p className="mb-0">
                        <FaCreditCard />
                        &nbsp; Visa Debit Card
                      </p>
                      <div className="ms-auto">************3456</div>
                    </div>
                  </div>

                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <input
                        type="radio"
                        name="radioNoLabel"
                        id="radioNoLabel1"
                      />
                    </div>
                    <div className="rounded border d-flex w-100 p-3 align-items-center">
                      <p className="mb-0">
                        <FaCcMastercard />
                        &nbsp; Mastercard Office
                      </p>
                      <div className="ms-auto">************1038</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <input
                        type="radio"
                        name="radioNoLabel"
                        id="radioNoLabel2"
                        checked
                      />
                    </div>
                    <div className="rounded border d-flex w-100 p-3 align-items-center">
                      <p className="mb-0">
                        <FaCcMastercard />
                        &nbsp; Cash On Delivery
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleConfirmPayment}
                  >
                    Confirm The Order
                  </button>
                </div>
              </div>

              <div className="payment-2" md="5" xl="4" offsetXl="1">
                <div className="py-4 d-flex justify-content-start">
                  <h6>
                    <Link to="/cart">Cancel and return to store</Link>
                  </h6>
                </div>
                <div
                  className="rounded d-flex flex-column p-2"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2 me-3">
                    <h4>Order Recap</h4>
                  </div>

                  {Array.isArray(cart.productList) &&
                  cart.productList.length > 0 ? (
                    cart.productList.map((product) => (
                      <div key={product._id} className="border-top px-2 mx-2">
                        <div className="row text-end">
                          <div className="col-2 paymentImage ">
                            <img
                              className="img-fluid"
                              src={product.productId.productImage}
                            />
                          </div>
                          <div className="col-2">
                            <b>&nbsp; {product.quantity}</b>
                          </div>
                          <div className="col-1">
                            <b>*</b>
                          </div>
                          <div className="col-3">
                            <b>{product.unitPrice}</b>
                          </div>
                          <div className="col-4">
                            <b>= &nbsp; {product.price}</b>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No products in the cart</p>
                  )}

                  <div className="p-2 d-flex pt-3">
                    <div className="col" size="8">
                      <b>Total s</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">&#2547; {totalCartPrice}</b>
                    </div>
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

export default Payment;
