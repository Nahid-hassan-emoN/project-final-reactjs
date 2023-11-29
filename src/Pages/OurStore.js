import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import PriceSlider from "../Components/PriceSlider";
import RandomProduct from "../Components/RandomProduct";
import ProductCard from "../Components/ProductCard";
import Colors from "../Components/Colors";
import { IoSearchSharp } from "react-icons/io5";
import Pagination from "../Components/Pagination";
const OurStore = (product) => {
  // const [itemS, setItemS] = useState(1);
  // const [itemsPerPage] = useState(10);
  // get items per page
  // const indexofLastPost = itemS * itemsPerPage;
  // const indexOfFirstPost = indexofLastPost - itemsPerPage;
  // const currentsItem = product.slice(indexOfFirstPost, indexofLastPost);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="our store" />

      <div className="store-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="store-leftSidebar">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By Categories </h3>
                <div className="">
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Filter By</h3>
                <div className="availability mt-3">
                  <h5 className="sub-title">Availability</h5>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label htmlFor="">
                      &nbsp; In Stock <span>[21]</span>{" "}
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label htmlFor="">
                      &nbsp; In Stock <span>[21]</span>{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label htmlFor="">
                      &nbsp; In Stock <span>[21]</span>{" "}
                    </label>
                  </div>

                  <div className="price-slider mt-3">
                    <h5 className="sub-title">Price</h5>
                    <PriceSlider />
                  </div>

                  <div className="color mt-3">
                    <h5 className="sub-title">Color</h5>
                    <Colors />
                  </div>

                  <div className="size mt-3">
                    <h5 className="sub-title">Size</h5>
                    <div className="form-check mb-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="">
                        &nbsp; S <span>[21]</span>{" "}
                      </label>
                    </div>

                    <div className="form-check mb-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="">
                        &nbsp; X <span>[21]</span>{" "}
                      </label>
                    </div>
                    <div className=" form-check mb-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="">
                        &nbsp; XL <span>[21]</span>{" "}
                      </label>
                    </div>

                    <div className="form-check mb-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="">
                        &nbsp; XXL <span>[21]</span>{" "}
                      </label>
                    </div>
                    <div className="form-check mb-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label htmlFor="">
                        &nbsp; XXXL <span>[21]</span>{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags </h3>
                <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Headphone
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Laptop
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Mobile
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    TV
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Smart Watch
                  </span>

                  <span className="badge bg-light text-secondary rounded-3 py-2 px-1">
                    Accessories
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <RandomProduct />
              </div>
            </div>

            {/* ---left-sidebar-end--- */}

            <div className="store-mainContent">
              <div className="filter-sort-grid mb-4">
                <div className="filter-sort-grid-content justify-content-between align-items-center">
                  <div className="selection d-flex align-items-center gap-10">
                    <p
                      className="sortBy mb-0 d-block"
                      style={{ width: "60px" }}
                    >
                      Sort By:
                    </p>

                    <select className=" from-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically A-Z
                      </option>
                      <option value="title-descending">Featured</option>
                      <option value="price-ascending">Price Low to High</option>
                      <option value="price-descending">
                        Price High to Low
                      </option>
                      <option value="create-ascending">Date, Old to New</option>
                      <option value="create-descending">
                        Date, New to Old
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center inputFields">
                    <div class="first-wrap mx-2 mt-1">
                      <div class="selection">
                        <select className="from-select" data-trigger="" name="">
                          <option placeholder="">Category</option>
                          <option>New Arrivals</option>
                          <option>Sale</option>
                          <option>Ladies</option>
                          <option>Men</option>
                          <option>Clothing</option>
                          <option>Footwear</option>
                          <option>Accessories</option>
                        </select>
                      </div>
                    </div>
                    <div class="input-field second-wrap">
                      <input
                        id="search"
                        type="text"
                        placeholder="Enter Keywords?"
                      />
                    </div>
                    <div class="input-field third-wrap">
                      <button className="btn-search" type="submit">
                        <IoSearchSharp />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------products-list----- */}

              <div className="products-list pb-4">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </div>
    </>
  );
};

export default OurStore;
