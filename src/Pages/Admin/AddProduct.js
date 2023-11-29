import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import "./Admin.css";
import AdminHeader from "./AdminHeader";
const AddProduct = () => {
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="row">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>
            <div className="col-10">
              <h1 className="main-header text-center ">Add Product</h1>
              <div className="addProduct">
                <div className="add-product-form">
                  <fieldset>
                    <legend>Product Basic Info :</legend>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="pro_name" required />
                    <label for="Price">Price:</label>
                    <input type="number" id="pro_Price" name="pro_Price" />
                    <div className="row">
                      <div className="col-4">
                        <label>Availability Status:</label>
                        <input type="number" id="under_100" name="user_age" />
                      </div>
                      <div className="col-4">
                        <label>Brand:</label>
                        <input
                          type="text"
                          placeholder="Samsung / Apple"
                          name="user_age"
                        />
                      </div>
                      <div className="col-4">
                        <label>Country:</label>
                        <input
                          type="text"
                          placeholder="Made in"
                          name="user_age"
                        />
                      </div>
                    </div>
                    <label htmlFor="">Specification: </label>
                    <div className="row">
                      <div className="col-5">
                        <label>Details</label>
                        <input
                          type="text"
                          id="under_100"
                          name=""
                          placeholder="Ram/Display"
                        />
                      </div>
                      <div className="col-5">
                        <label>Value:</label>
                        <input
                          type="text"
                          placeholder="4 GB / 8GB"
                          name="user_age"
                        />
                      </div>
                      <div className="col-2 mt-5">
                        <button type="button" class="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </div>
                    <label for="job">Select Category:</label>
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
                    <label for="job">Add More Category:</label>
                    <input
                      type="text"
                      placeholder="Add Catagories"
                      name="user_age"
                    />
                    <label for="img" className="mt-4">
                      Image:
                    </label>
                    <input type="file" />
                    <label for="details">Details:</label>
                    <textarea
                      id="pro_details"
                      name="pro_details"
                      required
                      col
                    ></textarea>
                  </fieldset>

                  <button className="add-pro-btn mb-5" type="submit">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
