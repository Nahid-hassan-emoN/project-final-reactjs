import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCard = () => {
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState([]);
  const [products, setProducts] = useState();

  const fetchProducts = async (p) => {
    const response = await fetch(
      `https://eshop-backend-rose.vercel.app/admin/products/all?page=${p}`
    );
    const data = await response.json();
    setProducts(data.products);
  };

  const getAllPages = (totalPages) => {
    const arr = [];
    while (totalPages > 0) {
      arr.push(totalPages);
      totalPages -= 1;
    }
    setAllPages(arr.reverse());
  };

  const fetchPage = () => {
    fetch("https://eshop-backend-rose.vercel.app/admin/products/pages")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.totalPages) {
          getAllPages(parseInt(data.totalPages));
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPage();
  }, []);
  useEffect(() => {
    console.log(allPages);
  }, [allPages]);

  useEffect(() => {
    fetchProducts(page);
    console.log(page);
  }, [page]);

  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: fetchProducts,
  // });

  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <h3>Error: {error.message} </h3>;
  // }

  return (
    <div className="">
      <>
        <div className="d-flex gap-10 flex-wrap" style={{ minHeight: "119vh" }}>
          {products?.length > 0 &&
            products.map((product) => (
              <div className="productCard" key={product._id}>
                <Link
                  to={`/product/${product._id}`}
                  className="product-card position-relative"
                >
                  <div className="wishlist-icon position-absolute ">
                    <Link to="">
                      <img src="images/wish.svg" alt="" />
                    </Link>
                  </div>

                  <div className="product-image">
                    <img
                      src={product.productImage}
                      alt={product.name}
                      className="inner-img"
                    />
                  </div>

                  <div className="product-details text-dark">
                    <h6 className="brand mt-3">{product.company}</h6>
                    <h5 className="product-title">
                      {product.name.substring(0, 35)}
                    </h5>
                    <div className="rate-stars d-flex">
                      <ReactStars
                        count={5}
                        size={18}
                        value={product.rating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="rate-stars-p">({product.rating})</p>
                    </div>

                    <p className="price">৳ {product.price}</p>
                  </div>

                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                      <Link to="">
                        <img src="images/prodcompare.svg" alt="" />
                      </Link>

                      <Link to="">
                        <img src="images/view.svg" alt="" />
                      </Link>

                      <Link to="">
                        <img src="images/add-cart.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </>

      {/* pagination */}
      <>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 pageNation">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className=" pageNumber text-center">
              <nav
                className="isolate inline-flex-space-x-px rounded-md shadow-sm "
                aria-label="Pagination"
              >
                {/* // className={`page-item ${activePage === number ? "active" : ""}`} */}
                <button
                  onClick={() => setPage(page > 1 ? page - 1 : page)}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </button>
                &nbsp; &nbsp; &nbsp;
                {Array.isArray(allPages) &&
                  allPages.length &&
                  allPages.map((p, idx) => (
                    <button
                      onClick={(e) => setPage(parseInt(e.target.innerText))}
                      aria-current="page"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      {p}
                    </button>
                  ))}
                &nbsp; &nbsp; &nbsp;
                <button
                  onClick={() =>
                    setPage(page < allPages.length ? page + 1 : page)
                  }
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
