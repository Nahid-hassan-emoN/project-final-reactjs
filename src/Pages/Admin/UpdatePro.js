import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "./Admin.css";
import AdminHeader from "./AdminHeader";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const UpdatePro = () => {
  const params = useParams();
  // Local state
  const [productData, setProductData] = useState({});
  // fetch

  const fetchProduct = async () => {
    const response = await fetch(
      `https://eshop-backend-rose.vercel.app/admin/products/${params.productId}`
    );
    const data = await response.json();
    console.log(data);

    return data;
  };
  console.log(params.productId);
  const { isLoading, error, data } = useQuery({
    queryKey: [],
    queryFn: fetchProduct,
  });

  useEffect(() => {
    setProductData(data);
  }, [data]);

  //  mutation;
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(
        `https://eshop-backend-rose.vercel.app/admin/products/${params.productId}`
      );
    },
  });

  // Update local state with changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = () => {
    mutation.mutate(productData);
  };
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-9">
              <h1 className="main-header text-center ">Update The Product</h1>
              <div className="addProduct">
                <div className="add-product-form">
                  <fieldset>
                    <legend>Product Basic Info :</legend>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="pro_name"
                      value={data && data.name}
                      required
                    />
                    <label htmlFor="Price">Price:</label>
                    <input
                      type="number"
                      id="pro_Price"
                      name="pro_Price"
                      value={data?.price || ""}
                    />
                    <div className="row">
                      <div className="col-4">
                        <label>Availability Status:</label>
                        <input
                          type="number"
                          id="under_100"
                          name="user_age"
                          value={data?.availableQuantity || ""}
                        />
                      </div>
                      <div className="col-4">
                        <label>Brand:</label>
                        <input
                          type="text"
                          placeholder="Samsung / Apple"
                          name="user_age"
                          value={data?.company || ""}
                        />
                      </div>
                      <div className="col-4">
                        <label>Country:</label>
                        <input
                          type="text"
                          placeholder="Made in"
                          name="user_age"
                          value={data?.countryOfOrigin || ""}
                        />
                      </div>
                    </div>
                    <label htmlFor="">Specification: </label>

                    <div className="row">
                      <div className="col-5">
                        <label>Details:</label>
                        <input
                          type="text"
                          id="under_100"
                          name=""
                          placeholder="Ram/Display"
                          value={data?.details?.value || ""}
                        />
                      </div>
                      <div className="col-5">
                        <label>Value:</label>
                        <input
                          type="text"
                          placeholder="4 GB / 8GB"
                          name="user_age"
                          value={data?.details?.value || ""}
                        />
                      </div>
                      <div className="col-2 mt-5">
                        <button type="button" className="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </div>

                    <label htmlFor="job">Select Category:</label>
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
                    <label htmlFor="job">Add More Category:</label>
                    <input
                      type="text"
                      placeholder="Add Catagories"
                      name="user_age"
                    />
                    <label htmlFor="img" className="mt-4">
                      Image:
                    </label>
                    <input type="file" />
                    <label htmlFor="details">Details:</label>
                    <textarea
                      id="pro_details"
                      name="pro_details"
                      required
                      value={data?.details || ""}
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

export default UpdatePro;
