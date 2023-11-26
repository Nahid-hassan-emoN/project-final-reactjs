import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card mb-3">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <ArrowBackIcon className="fs-4" /> Go Back Blogs
                </Link>
                <h3 className="title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, id!
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio accusamus quos, repellat voluptatem enim incidunt
                  quisquam laborum modi ut.
                </p>
              </div>
            </div>
            <div className="col-9">
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="blog-card">
                <div className="card-image">
                    <img src="/images/blog-1.jpg" alt="" className='img-fluid w-100' />
                    <div className="blog-content py-3">
                        <p className='card-date mb-2'>
                            1 Dec, 2023
                        </p>
                        <h5 className="card-title mb-2 ">Card title</h5>
                        <p className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/blog/:id" className="btn-readMore">Read More</Link>
                    </div>

                </div>
            </div> */}
    </>
  );
};

export default SingleBlog;
