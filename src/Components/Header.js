import React, { useState } from "react";
import "../Pages/Responsive.css";
import "../App.css";
import { NavLink, Link } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
              <li>
                <NavLink to="login">
                  <AiOutlineUserAdd className="user-icon" />
                  <span> Login</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
