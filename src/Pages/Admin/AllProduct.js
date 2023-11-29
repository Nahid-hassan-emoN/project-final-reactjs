import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TbLogout } from "react-icons/tb";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";

import "./Admin.css";
import AdminHeader from "./AdminHeader";

const AllProduct = () => {
  const handleDeleteClick = () => {
    // Display an alert when the delete button is clicked
    alert("Are you sure you want to delete?");
  };
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="row gap-10">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-9">
              <h1 className="main-header text-center ">All Product</h1>
              <div className="allProduct">
                <div className="row">
                  <div className="mt-3 searchBar col-6">
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
                  <div className="mt-3 dropDown col-6">
                    <h5 className="text-center">Select Category:</h5>

                    <select id="job" name="user_job">
                      <optgroup label="Electronics">
                        <option value="smart-phones">Smart Phones</option>

                        <option value="laptops-computers">
                          Laptops & Computers
                        </option>
                        <option value="audio-headphones">
                          Audio & Headphones
                        </option>
                        <option value="cameras-photography">
                          Cameras & Photography
                        </option>
                        <option value="home-appliances">Home Appliances</option>
                        <option value="smart-watch">Smart Watch</option>
                        <option value="smart-tv">Smart TV</option>
                      </optgroup>

                      <optgroup label="Toys & Games">
                        <option value="toys-for-kids">Toys for Kids</option>
                        <option value="puzzles & brain teasers">
                          Puzzles & Brain Teasers
                        </option>
                        <option value="educational-toys">
                          Educational Toys
                        </option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="allProduct-table">
                    <table class="rwd-table">
                      <tbody>
                        <tr>
                          <th>Product Code</th>
                          <th>Product Name</th>
                          <th>Stock</th>
                          <th>Stock Added</th>
                          <th>Net Amount</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">UPS5005</td>
                          <td data-th="Supplier Name">UPS</td>
                          <td data-th="Invoice Number">ASDF19218</td>
                          <td data-th="Invoice Date">06/25/2016</td>
                          <td data-th="Net Amount">$8,322.12</td>
                          <td>
                            <Link to="/admin/product-update">
                              <RiEdit2Fill className="update-icon" />
                            </Link>
                          </td>
                          <td>
                            <Link to="#">
                              <RiDeleteBin2Line
                                className="delete-icon"
                                onClick={handleDeleteClick}
                              />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">UPS3449</td>
                          <td data-th="Supplier Name">UPS South Inc.</td>
                          <td data-th="Invoice Number">ASDF29301</td>
                          <td data-th="Invoice Date">6/24/2016</td>

                          <td data-th="Net Amount">$3,255.49</td>
                          <td>
                            <Link to="">
                              <RiEdit2Fill className="update-icon" />
                            </Link>
                          </td>
                          <td>
                            <Link to="">
                              <RiDeleteBin2Line
                                className="delete-icon"
                                onClick={handleDeleteClick}
                              />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">BOX5599</td>
                          <td data-th="Supplier Name">BOX Pro West</td>
                          <td data-th="Invoice Number">ASDF43000</td>
                          <td data-th="Invoice Date">6/27/2016</td>

                          <td data-th="Net Amount">$45,255.49</td>
                          <td>
                            <Link to="">
                              <RiEdit2Fill className="update-icon" />
                            </Link>
                          </td>
                          <td>
                            <Link to="">
                              <RiDeleteBin2Line
                                className="delete-icon"
                                onClick={handleDeleteClick}
                              />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td data-th="Supplier Code">PAN9999</td>
                          <td data-th="Supplier Name">Pan Providers and Co.</td>
                          <td data-th="Invoice Number">ASDF33433</td>
                          <td data-th="Invoice Date">6/29/2016</td>

                          <td data-th="Net Amount">$12,335.69</td>
                          <td>
                            <Link to="/admin/product-update">
                              <RiEdit2Fill className="update-icon" />
                            </Link>
                          </td>
                          <td>
                            <Link to="">
                              <RiDeleteBin2Line
                                className="delete-icon"
                                onClick={handleDeleteClick}
                              />
                            </Link>
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

export default AllProduct;
