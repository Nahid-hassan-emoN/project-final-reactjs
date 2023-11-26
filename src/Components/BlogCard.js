import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="" className="img-fluid w-100" />
          <div className="blog-content py-3">
            <p className="card-date mb-2">1 Dec, 2023</p>
            <h5 className="card-title mb-2 ">Card title</h5>
            <p className="card-text mb-2">
              Some quick example text to build on........
            </p>
            <Link to="/blog/:id" className="btn-readMore">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
