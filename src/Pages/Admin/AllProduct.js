import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { TbLogout } from "react-icons/tb";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import "./Admin.css";
import AdminHeader from "./AdminHeader";
import Swal from "sweetalert2";

const AllProduct = () => {
  // Local state
  const [productData, setProductData] = useState([]);
  //   const { isLoading, error, data } = useQuery({
  //     queryKey: [],
  //     queryFn: fetchProducts,
  //   });

  const fetchProducts = async () => {
    const response = await fetch(
      "https://eshop-backend-rose.vercel.app/admin/products/all?all=1"
    );
    const data = await response.json();
    if (Array.isArray(data.products)) {
      setProductData(data.products);
    }
    // return data;
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    console.log(productId);
    const token = localStorage.getItem("eshoptoken");

    console.log(token);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(
        `https://eshop-backend-rose.vercel.app/admin/products/all/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            // Add any additional headers as needed, such as authorization headers
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("DELETE request failed");
          }

          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          fetchProducts();
          console.log("DELETE request successful");
          // You may want to handle additional logic here after successful deletion
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };

  return (
    <>
      <div className="admin-full-body" style={{ minHeight: "100vh" }}>
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>

            <div className="col-9">
              <h1 className="main-header text-center ">All Product</h1>
              <div className="allProduct">
                <div className="row">
                  <div className="mt-3 searchBar col-6">
                    <h5 className="text-center">Search Product Here:</h5>
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Search Product Here..."
                        aria-label="Search Product Here..."
                      />

                      <button
                        className="input-group-text py-2"
                        id="basic-addon2"
                      >
                        <SearchIcon className="search-icon" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 dropDown col-6">
                    <h5 className="text-center">Select Category:</h5>

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
                  </div>
                  <div className="allProduct-table">
                    <table className="rwd-table">
                      <thead>
                        <tr>
                          <th>Product Code</th>
                          <th>company</th>
                          <th>Product Name</th>
                          <th>Stock</th>
                          <th>Stock Added</th>
                          <th>Amount</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {console.log(productData)} */}

                        {Array.isArray(productData) &&
                          productData.map((item) => (
                            <tr key={item._id}>
                              <td data-th="Supplier Code">
                                {item._id.substring(0, 10)}
                              </td>
                              <td data-th="Invoice Date">{item.company}</td>
                              <td data-th="Supplier Name">{item.name}</td>
                              <td data-th="Invoice Number">
                                {item.availableQuantity}
                              </td>

                              <td data-th="Invoice Date">
                                {item.updatedAt.substring(0, 10)}
                              </td>

                              <td data-th="Net Amount">{item.price}</td>
                              <td>
                                <Link to={`/admin/product-update/${item._id}`}>
                                  <RiEdit2Fill className="update-icon" />
                                </Link>
                              </td>
                              <td>
                                <Link to="">
                                  <RiDeleteBin2Line
                                    className="delete-icon"
                                    onClick={() => handleDelete(item._id)}
                                  />
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
