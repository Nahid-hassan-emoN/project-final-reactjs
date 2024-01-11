import React, { useState } from "react";
import "../Pages/Responsive.css";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const checkAuthentication = () => {
    // Replace this with your logic to check if the user is authenticated
    return localStorage.getItem("eshopCustomerToken") !== null;
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("eshopCustomerToken");

    // Perform other actions (e.g., redirect to login page)
    // For example, using react-router-dom:
    navigate("/");
  };
  return (
    <>
      <header className="mainHeader">
        <div className="container-xxl">
          <nav className=" header-upper py-2">
            <Link to="/" className="title">
              E-Shop
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/store">Our store</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>

              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
              <li>
                <NavLink to="cart" className="cart-icon">
                  <BsFillCartPlusFill />
                  &nbsp;
                  <span> Cart</span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="login">
                  <AiOutlineUserAdd className="user-icon" />
                  <span> Login</span>
                </NavLink>
              </li> */}

              <li>
                {checkAuthentication() ? (
                  <NavLink onClick={handleLogout}>
                    <FaUserCircle className="user-icon" />
                    <span> Logout</span>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <AiOutlineUserAdd className="user-icon" />
                    <span> Login</span>
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
