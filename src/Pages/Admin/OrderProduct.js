import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "./Admin.css";
import AdminHeader from "./AdminHeader";

const OrderProduct = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("eshoptoken");
        const response = await fetch(
          "https://eshop-backend-rose.vercel.app/admin/orders?status=pending",
          {
            method: "GET",
            headers: {
              Authorization: token,
              // Add any headers if needed
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-10">
              <h1 className="main-header text-center "> Order List</h1>
              <div className="allProduct">
                <div className="row">
                  <div className="my-3 searchBar col-6">
                    <h5 className="text-center">Search Product Here:</h5>
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Search Product Here..."
                        aria-label="Search Product Here..."
                      />

                      <button
                        className="input-group-text py-2"
                        id="basic-addon2"
                      >
                        <SearchIcon className="search-icon" />
                      </button>
                    </div>
                  </div>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="allProduct-table">
                      <table className="rwd-table ">
                        <tbody>
                          <tr>
                            <th>Order Code</th>
                            <th>Order Date</th>
                            <th>User Name</th>
                            <th>Items</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>order Action</th>
                          </tr>

                          {orders.map((order) => (
                            <tr key={order._id}>
                              <td data-th="Order Code">{order._id}</td>

                              <td data-th="Date">
                                {order.date.substring(0, 10)}
                              </td>

                              <td data-th="email">{order.customer.email}</td>
                              <td data-th="Total Items">
                                {order.cart.productList.length}
                              </td>
                              <td data-th="Address">
                                {order.customer.fname}
                                &nbsp;
                                {order.customer.lname}
                              </td>
                              <td data-th="Address">{order.customer.image}</td>
                              <td data-th="Net Amount">
                                {order.cart.productList.reduce(
                                  (total, product) => total + product.price,
                                  0
                                )}
                              </td>
                              <td data-th="Status">{order.status}</td>
                              <td>
                                <select className="tableStatus">
                                  <option value="option1">Confirm</option>
                                  <option value="option2">Deny</option>
                                  <option value="option3">Delete</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProduct;
