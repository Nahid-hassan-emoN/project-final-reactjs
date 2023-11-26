import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

import { AiFillLock } from "react-icons/ai";
const ForgetPass = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title="Forget Password" />

      <div className="login-main">
        <div class="main mb-5 mt-3">
          <div class="forget-main gap-10">
            <form>
              <label className="forget-pass-label">Forget Password ?</label>
              <h1 className="text-center">
                <AiFillLock />
              </h1>
              <p className="text-center text-white">
                You can reset your password here...
              </p>

              <input type="email" name="email" placeholder="Email" required />

              <button>Reset Password</button>
              <div className="forget-pass ">
                <Link to="/login">Go Back</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
