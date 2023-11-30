import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import "./Admin.css";
import AdminHeader from "./AdminHeader";

const AddProduct = () => {
  const [specification, setSpecification] = useState({
    specificationTitle: "",
    specificationValue: "",
  });

  // Initial state for the form data
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    availableQuantity: "",
    company: "",
    countryOfOrigin: "",
    specifications: [],
    category: "smart-phones", // Default category
    additionalCategory: "",
    image: "",
    details: "",
  });

  // const handleSpecificationChange = (e) => {
  //   const { name, value } = e.target;
  //   setProductData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const addSpecificationHandeler = () => {
    console.log(specification);
    if (
      !specification.specificationTitle ||
      !specification.specificationValue
    ) {
      alert("required specification");
      return;
    }
    setProductData((productData) => {
      return {
        ...productData,
        specifications: [...productData.specifications, specification],
      };
    });
  };
  console.log(productData);
  // Handler to update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler to add a specification to the specifications array
  // const handleAddSpecification = () => {
  //   const newSpecification = {
  //     detail: productData.detail,
  //     value: productData.value,
  //   };

  //   setProductData((prevData) => ({
  //     ...prevData,
  //     specifications: [...prevData.specifications, newSpecification],
  //     detail: "",
  //     value: "",
  //   }));
  // };

  // Handler to submit the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("eshoptoken");
    console.log(token);

    console.log(productData);
    // Your API endpoint for adding products

    // Fetch options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        // Add any additional headers as needed, such as authorization headers
      },
      body: JSON.stringify(productData),
    };
    const fetch =
      ("https://eshop-backend-rose.vercel.app/admin/products", options);
    // Send the POST request
    fetch()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add product");
        }
        alert(`Product added successfully`);

        // You may want to handle additional logic here after successful addition
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="admin-full-body">
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>
            <div className="col-10">
              <h1 className="main-header text-center ">Add Product</h1>
              <div className="addProduct">
                <div className="add-product-form">
                  <form onSubmit={handleSubmit}>
                    <legend>Product Basic Info :</legend>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="name of the product"
                      required
                      value={productData.name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="Price">Price:</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="price of the product"
                      value={productData.price}
                      onChange={handleInputChange}
                    />
                    <div className="row">
                      <div className="col-4">
                        <label>Availability Status:</label>

                        <input
                          type="number"
                          id="availableQuantity"
                          name="availableQuantity"
                          placeholder="ability of the product"
                          value={productData.availableQuantity}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-4">
                        <label>Company:</label>
                        <input
                          type="text"
                          placeholder="Samsung / Apple"
                          name="company"
                          value={productData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-4">
                        <label>CountryOfOrigin:</label>
                        <input
                          type="text"
                          placeholder="Made in"
                          name="countryOfOrigin"
                          value={productData.countryOfOrigin}
                          onChange={handleInputChange}
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
                          name="specificationTitle"
                          placeholder="Ram/Display"
                          value={productData.specification}
                          onChange={(e) => {
                            setSpecification((specification) => {
                              return {
                                ...specification,
                                specificationTitle: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="col-5">
                        <label>Value:</label>
                        <input
                          type="text"
                          placeholder="4 GB / 8GB"
                          name="specificationValue"
                          value={productData.specification}
                          onChange={(e) => {
                            setSpecification((specification) => {
                              return {
                                ...specification,
                                specificationValue: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="col-2 mt-5">
                        <button
                          type="button"
                          className="btn btn-primary "
                          onClick={addSpecificationHandeler}
                        >
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
                      id="details"
                      name="details"
                      required
                      onChange={handleInputChange}
                      value={productData.details}
                    ></textarea>

                    <button className="add-pro-btn mb-5" type="submit">
                      Add Product
                    </button>
                  </form>
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
