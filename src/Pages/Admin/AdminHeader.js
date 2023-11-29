import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("eshoptoken");

    // Perform other actions (e.g., redirect to login page)
    // For example, using react-router-dom:
    navigate("/admin/login");
  };

  return (
    <>
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
              <Link to="/admin/all-product">
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
                  <Link class="dropdown-item" to="/admin/banner-product">
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
          <button onClick={handleLogout}>
            <TbLogout className="side-logout-icon " />
            &nbsp; Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
