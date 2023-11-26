import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer-middle py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">
                Contact Us
                <address>
                  <div className="address-text ">
                    27/B Dhanmondi-32,
                    <br />
                    zip:1000
                    <br />
                    Dhaka, BANGLADESH
                    <br />
                    <a className="text-white mt-3" href="tel:+880 123 456 7890">
                      (+880) 123 456 7890{" "}
                    </a>
                    <br />
                    <a className="text-white mt-1" href="mailto:abc@gmail.com">
                      Email: abc@gmail.com
                    </a>
                  </div>
                </address>
              </h4>
              <div className="div-social-icons d-flex align-items-center gap-30">
                <a href="https://www.facebook.com" target="_blank">
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <BsLinkedin />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <BsYoutube />
                </a>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">
                Information
                <div className="">
                  <div className="footer-links">
                    <Link to="privacy-policy">Privacy Policy</Link>
                    <Link to="refund-policy">Refund Policy</Link>
                    <Link>Shipping Policy</Link>
                    <Link to="blogs">Blogs</Link>
                  </div>
                  <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/faq"> FAQ</Link>

                    <Link to="/privacy-policy">Terms & Condition</Link>
                  </div>
                </div>
              </h4>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">
                Quick Links
                <div className="footer-links">
                  <Link to="store">Accessories</Link>
                  <Link to="store">Laptops / Tablets</Link>
                  <Link to="store">Electronics</Link>

                  <Link to="store">HeadPhone</Link>
                  <Link to="store">Smart Watches</Link>
                </div>
              </h4>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <hr className="hr-1" />

            <div className="col-12">
              <p className="text-center text-white align-items-center">
                &copy; {new Date().getFullYear()} Nahid Hassan{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
