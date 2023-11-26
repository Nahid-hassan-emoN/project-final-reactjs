import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import { FaCcMastercard, FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
const Payment = () => {
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
                      Add insurance card
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
                        <b>
                          Patient Balance
                          <span className="text-success">$13.24</span>
                        </b>
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
                  <button type="button" class="btn btn-primary">
                    Proceed to payment
                  </button>
                </div>
              </div>

              <div className="payment-2" md="5" xl="4" offsetXl="1">
                <div className="py-4 d-flex justify-content-end">
                  <h6>
                    <Link to="/cart">Cancel and return to website</Link>
                  </h6>
                </div>
                <div
                  className="rounded d-flex flex-column p-2"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="p-2 me-3">
                    <h4>Order Recap</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col" size="8">
                      Contracted Price
                    </div>
                    <div className="ms-auto">$186.76</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col" size="8">
                      Amount toward deductible
                    </div>
                    <div className="ms-auto">$0.00</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col" size="8">
                      Coinsurance(0%)
                    </div>
                    <div className="ms-auto">+ $0.00</div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col" size="8">
                      Copayment
                    </div>
                    <div className="ms-auto">+ $40.00</div>
                  </div>
                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col" size="8">
                      Total Deductible, Coinsurance, and Copay
                    </div>
                    <div className="ms-auto">$40.00</div>
                  </div>

                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col" size="8">
                      Insurance Responsibility
                    </div>
                    <div className="ms-auto">
                      <b>$71.76</b>
                    </div>
                  </div>
                  <div className="p-2 d-flex">
                    <div className="col" size="8">
                      Patient Balance
                      <span className="fa fa-question-circle text-dark"></span>
                    </div>
                    <div className="ms-auto">
                      <b>$71.76</b>
                    </div>
                  </div>
                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <div className="col" size="8">
                      <b>Total</b>
                    </div>
                    <div className="ms-auto">
                      <b className="text-success">$85.00</b>
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
