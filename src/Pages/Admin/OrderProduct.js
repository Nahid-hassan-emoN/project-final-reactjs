import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TbLogout } from "react-icons/tb";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";

import "./Admin.css";
import AdminHeader from "./AdminHeader";

const OrderProduct = () => {
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

                  <div className="allProduct-table">
                    <table class="rwd-table">
                      <tbody>
                        <tr>
                          <th>Order Code</th>
                          <th>Order Date</th>
                          <th>User Name</th>

                          <th>Address</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                          <th>order Action</th>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">UPS5005</td>
                          <td data-th="Supplier Name">UPS</td>
                          <td data-th="Invoice Number">ASDF19218</td>
                          <td data-th="Invoice Date">06/25/2016</td>
                          <td data-th="Net Amount">$8,322.12</td>
                          <td>Shipping</td>
                          <td>
                            <select className="tableStatus">
                              <option value="option1">Confirm</option>
                              <option value="option2">Deny</option>
                              <option value="option3">Delete</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">UPS3449</td>
                          <td data-th="Supplier Name">UPS South Inc.</td>
                          <td data-th="Invoice Number">ASDF29301</td>
                          <td data-th="Invoice Date">6/24/2016</td>

                          <td data-th="Net Amount">$3,255.49</td>
                          <td>Shipping</td>
                          <td>
                            <select className="tableStatus">
                              <option value="option1">Confirm</option>
                              <option value="option2">Deny</option>
                              <option value="option3">Delete</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">BOX5599</td>
                          <td data-th="Supplier Name">BOX Pro West</td>
                          <td data-th="Invoice Number">ASDF43000</td>
                          <td data-th="Invoice Date">6/27/2016</td>

                          <td data-th="Net Amount">$45,255.49</td>
                          <td>Shipping</td>
                          <td>
                            <select className="tableStatus">
                              <option value="option1">Confirm</option>
                              <option value="option2">Deny</option>
                              <option value="option3">Delete</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">PAN9999</td>
                          <td data-th="Supplier Name">Pan Providers and Co.</td>
                          <td data-th="Invoice Number">ASDF33433</td>
                          <td data-th="Invoice Date">6/29/2016</td>

                          <td data-th="Net Amount">$12,335.69</td>
                          <td>Shipping</td>
                          <td>
                            <select className="tableStatus">
                              <option value="option1">Confirm</option>
                              <option value="option2">Deny</option>
                              <option value="option3">Delete</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default OrderProduct;
