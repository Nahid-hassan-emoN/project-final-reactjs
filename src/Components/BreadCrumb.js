import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <>
      <div className="bradCrumb py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
