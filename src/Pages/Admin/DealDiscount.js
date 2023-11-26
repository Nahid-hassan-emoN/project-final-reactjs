import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TbLogout } from "react-icons/tb";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";
const DealDiscount = () => {
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="row">
            <div className="admin-dashboard col-2">
              <div className="left-sidebar ">
                <nav class="main-menu">
                  <ul>
                    <li>
                      <Link to="/admin">
                        <span class="nav-text" id="shop-header">
                          E-shop
                        </span>
                      </Link>
                    </li>
                    <li class="has-subnav">
                      <Link to="/admin/order-product">
                        <span class="nav-text">Order Product</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/add-product">
                        <span class="nav-text">Add Product</span>
                      </Link>
                    </li>
                    <li class="has-subnav">
                      <Link to="/admin/add-product">
                        <span class="nav-text">All Product</span>
                      </Link>
                    </li>

                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span class="nav-text">Add more Product</span>
                      </Link>
                      <ul class="dropdown-menu">
                        <li>
                          <Link
                            class="dropdown-item"
                            to="/admin/banner-product"
                          >
                            <span class="nav-text">Banner Product</span>
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/admin/deals-product">
                            <span class="nav-text">Deals & Discount</span>
                          </Link>
                        </li>

                        <li>
                          <Link class="dropdown-item" href="#">
                            <span class="nav-text">Dropdown-3</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="side-logout mx-auto">
                  <Link>
                    <TbLogout className="side-logout-icon " />
                    &nbsp; Log Out
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-9">
              <h1 className="main-header text-center ">
                Deals & Discount Product
              </h1>

              <form action="submit">
                <div className="bannerProduct">
                  <div className="row my-3">
                    <div className="col-6">
                      <label>Company Name:</label>
                      <br />
                      <input
                        type="text"
                        id="under_100"
                        name=""
                        placeholder="Airpod Pro S13+."
                      />
                    </div>

                    <div className="col-6">
                      <label>Product Name:</label>
                      <br />
                      <input type="text" placeholder=" 24mo/mo*" name="" />
                    </div>
                  </div>

                  <div className="row my-3">
                    <div className="col-4">
                      <label>Star:</label>
                      <br />
                      <input
                        type="number"
                        id="under_100"
                        name=""
                        placeholder="Airpod Pro S13+."
                      />
                    </div>
                    <div className="col-4">
                      <label>Day:</label>
                      <br />
                      <input
                        type="number"
                        id="under_100"
                        name=""
                        placeholder="Airpod Pro S13+."
                      />
                    </div>

                    <div className="col-4">
                      <label>Taka:</label>
                      <br />
                      <input type="text" placeholder=" 24mo/mo*" name="" />
                    </div>
                  </div>

                  <div className="row my-3">
                    <label htmlFor="">Main Banner Image</label>
                    <input type="file" />
                  </div>
                </div>
                <button className="add-pro-btn" type="submit">
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealDiscount;