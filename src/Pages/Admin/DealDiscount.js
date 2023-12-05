import React, { useState } from "react";
import AdminHeader from "./AdminHeader";

const DealDiscount = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const image = form.get("image");

    const imgBBResponse = await fetch(
      "https://api.imgbb.com/1/upload?c255676be63e51dd58bb99826d7eb9ec",
      {
        method: "POST",
        body: new FormData(e.target),
      }
    );

    const imgBBData = await imgBBResponse.json();

    const userData = {
      name,
      image: imgBBData.data.url,
    };

    fetch("https://eshop-backend-rose.vercel.app/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="admin-full-body " style={{ minHeight: "100vh" }}>
        <div className="container-xxl pt-5">
          <div className="d-flex gap-20">
            <div className="admin-dashboard col-2">
              <AdminHeader />
            </div>
            <div className="col-9">
              <h1 className="main-header text-center ">
                Deals & Discount Product
              </h1>
              <form action="submit" onSubmit={handleSubmit}>
                <div className="bannerProduct">
                  <div className="row my-3">
                    <div className="col-6">
                      <label>Company Name:</label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Airpod Pro S13+."
                      />
                    </div>
                    <div className="col-6">
                      <label>Product Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="product name"
                        name="productName"
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-4">
                      <label>Star:</label>
                      <br />
                      <input
                        type="number"
                        id="star"
                        name="star"
                        placeholder="Airpod Pro S13+."
                      />
                    </div>
                    <div className="col-4">
                      <label>Day:</label>
                      <br />
                      <input
                        type="number"
                        id="day"
                        name="day"
                        placeholder="Airpod Pro S13+."
                      />
                    </div>
                    <div className="col-4">
                      <label>Taka:</label>
                      <br />
                      <input type="text" placeholder=" 24mo/mo*" name="taka" />
                    </div>
                  </div>
                  <div className="row my-3">
                    <label htmlFor="">Main Banner Image</label>
                    <input type="file" name="image" />
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
