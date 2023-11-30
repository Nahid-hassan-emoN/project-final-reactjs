import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TbLogout } from "react-icons/tb";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";
import AdminHeader from "./AdminHeader";
const DealDiscount = () => {
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
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
