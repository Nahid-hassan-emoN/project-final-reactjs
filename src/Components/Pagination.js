import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Pagination = () => {
  const [pages, setPages] = useState();
  const [allPages, setAllPages] = useState([]);

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
          setPages(parseInt(data.totalPages));
          getAllPages(data.totalPages);
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
  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden"></div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-center text-gray-700">
              Showing <span className="font-medium">1</span> to
              <span className="font-medium">10</span> of
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div className="text-center">
            <nav
              className="isolate inline-flex-space-x-px rounded-md shadow-sm "
              aria-label="Pagination"
            >
              {/* // className={`page-item ${activePage === number ? "active" : ""}`} */}

              <Link
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </Link>

              {Array.isArray(allPages) &&
                allPages.length &&
                allPages.map((p, idx) => (
                  <Link
                    href="#"
                    aria-current="page"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {p}
                  </Link>
                ))}

              <Link
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <FaChevronRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
