import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import Loading from "../Components/Loading";

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />

      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row d-flex px-3">
            <div className="blogCard mb-3">
              <BlogCard />
            </div>
            <div className="blogCard mb-3">
              <BlogCard />
            </div>
            <div className="blogCard mb-3">
              <BlogCard />
            </div>
            <div className="blogCard mb-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
