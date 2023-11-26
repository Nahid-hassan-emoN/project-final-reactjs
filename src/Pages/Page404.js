import React from "react";
import Error404 from "../page404";

import Lottie from "lottie-react";

const Page404 = () => {
  return (
    <>
      <div className=" page-404 div max-h-52">
        <div className="container-xxl">
          <Lottie animationData={Error404} />
        </div>
      </div>
    </>
  );
};

export default Page404;
