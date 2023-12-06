import React, { useState } from "react";
import "./Admin.css";
import AdminHeader from "./AdminHeader";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("smart-phones");
  const [specification, setSpecification] = useState({
    title: "",
    value: "",
  });

  // Initial state for the form data
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    availableQuantity: "",

    company: "",
    countryOfOrigin: "",
    specification: [],

    // Default category
    category: " smart phone",
    // additionalCategory: "",
    productImage: "",
    details: "",
    rating: ``,
  });

  // img--bb
  // fetch("https://api.imgbb.com/1/upload",
  //   {
  //     method: "POST",

  // })

  // img--bb

  const addSpecificationHandeler = () => {
    // console.log(specification);
    if (!specification.title || !specification.value) {
      alert("required specification");
      return;
    }
    setProductData((productData) => {
      return {
        ...productData,
        specification: [...productData.specification, specification],
      };
    });
    setSpecification({ title: "", value: "" });
  };
  // console.log(productData);
  // Handler to update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handler to update the selected category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // Handler to submit the form data

  const uploadImage = async (e) => {
    console.log(e.target.files[0]);
    setLoading(true);
    const imageForm = new FormData();
    imageForm.append("image", e.target.files[0]);
    console.log(imageForm);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=c255676be63e51dd58bb99826d7eb9ec",
      {
        method: "POST",
        body: imageForm,
      }
    );
    if (!response.ok) {
      alert("Image could not be uploaded");
      setLoading(false);
      return;
    }
    const data = await response.json();
    console.log(data.data?.display_url);
    setProductData((productData) => ({
      ...productData,
      productImage: data.data?.display_url,
    }));
    setLoading(false);

    // const imgBBData = await imgBBResponse.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Upload image to ImgBB

    // Prepare product data with the image URL
    // const productDataWithImage = {
    //   ...productData,
    //   productImage: "",
    // };
    const token = localStorage.getItem("eshoptoken");

    console.log(token);

    console.log(productData);

    // console.log(obj);
    console.log(JSON.stringify(productData));

    // Send the POST request
    fetch("https://eshop-backend-rose.vercel.app/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        // Add any additional headers as needed, such as authorization headers
      },

      body: JSON.stringify(productData),
    })
      .then((response) => {
        return response.json();
        if (!response.ok) {
          throw new Error("failed to add product");
        }

        // You may want to handle additional logic here after successful addition
      })

      .then((data) => {
        console.log(data);
        if (!data.error) {
          Swal.fire({
            title: "Product added!",
            icon: "success",
          });
          setProductData({
            name: "",
            price: "",
            availableQuantity: "",
            company: "",
            countryOfOrigin: "",
            specification: [],
            category: "",
            productImage: "",
            details: "",
            rating: ``,
          });
        } else {
          throw new Error("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error.message || "something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
    // Reset the form data
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
                      required
                      name="price"
                      placeholder="price of the product"
                      value={productData.price}
                      onChange={handleInputChange}
                    />
                    <div className="row">
                      <div className="col-3">
                        <label>Availability Status:</label>

                        <input
                          type="number"
                          id="availableQuantity"
                          required
                          name="availableQuantity"
                          placeholder="ability of the product"
                          value={productData.availableQuantity}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-3">
                        <label>Company:</label>
                        <input
                          type="text"
                          placeholder="Samsung / Apple"
                          id="company"
                          required
                          name="company"
                          value={productData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-3">
                        <label>Country Of Origin:</label>
                        <input
                          type="text"
                          id="countryOfOrigin"
                          placeholder="Made in"
                          required
                          name="countryOfOrigin"
                          value={productData.countryOfOrigin}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-3">
                        <label>Rating:</label>
                        <input
                          type="number"
                          id=" rating"
                          required
                          name="rating"
                          placeholder="4.1 / 3.0"
                          value={productData.rating}
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
                          id="title"
                          name="title"
                          placeholder="Ram/Display"
                          value={specification.title}
                          onChange={(e) => {
                            setSpecification((specification) => {
                              return {
                                ...specification,
                                title: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="col-5">
                        <label>Value:</label>
                        <input
                          type="text"
                          id="value"
                          placeholder="4 GB / 8GB"
                          name="value"
                          value={specification.value}
                          onChange={(e) => {
                            setSpecification((specification) => {
                              return {
                                ...specification,
                                value: e.target.value,
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

                    {productData.specification.length > 0 && (
                      <div className="mb-5">
                        {productData.specification.map((s, idx) => (
                          <p className="fs-6" key={idx}>
                            <span className="fw-bold px-3">{s.title}:</span>
                            {s.value}
                          </p>
                        ))}
                      </div>
                    )}

                    <label htmlFor="job">Select Category:</label>
                    <select
                      id="category"
                      name="category"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
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
                    {/* <label htmlFor="job">Add More Category:</label>
                    <input
                      type="text"
                      placeholder="Add Catagories"
                      name="user_age"
                    /> */}
                    <label htmlFor="img" className="mt-4">
                      Image:
                    </label>
                    <input
                      type="file"
                      name="productImage"
                      onChange={uploadImage}
                    />
                    <label htmlFor="details">Details:</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      onChange={handleInputChange}
                      value={productData.details}
                    ></textarea>

                    <button
                      className="add-pro-btn mb-5"
                      type="submit"
                      disabled={loading}
                    >
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
