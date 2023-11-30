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
        <nav className="main-menu">
          <ul>
            <li>
              <Link to="/admin">
                <span className="nav-text" id="shop-header">
                  E-shop
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/admin/order-product">
                <span className="nav-text">Order Product</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/add-product">
                <span className="nav-text">Add Product</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/admin/all-product">
                <span className="nav-text">All Product</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-text">Add more Product</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/banner-product">
                    <span className="nav-text">Banner Product</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/deals-product">
                    <span className="nav-text">Deals & Discount</span>
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="#">
                    <span className="nav-text">Dropdown-3</span>
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
