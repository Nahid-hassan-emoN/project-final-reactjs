import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import "./Admin.css";
import AdminHeader from "./AdminHeader";

const BannerProduct = () => {
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="row">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-9">
              <form action="submit">
                <h1 className="main-header text-center ">Banner Product</h1>
                <div className="bannerProduct">
                  <div className="row my-3">
                    <div className="col-6">
                      <label>Main Header:</label>
                      <br />
                      <input
                        type="text"
                        id="under_100"
                        name=""
                        placeholder="Airpod Pro S13+."
                      />
                    </div>

                    <div className="col-6">
                      <label>Payment Text:</label>
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

export default BannerProduct;
