import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import "./Extra.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Log In"} />
      <BreadCrumb title="Log In" />

      <div className="login-main">
        <div class="main mt-3 mb-5">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form>
              <label for="chk" aria-hidden="true">
                Log-in
              </label>

              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />

              <button>Login</button>
              <div className="forget-pass ">
                <span>Forget</span> &nbsp;
                <Link to="/forget-password">Username / Password?</Link>
              </div>
            </form>
          </div>

          <div className="login">
            <form className="">
              <label for="chk" aria-hidden="true">
                Sign-up
              </label>
              <input type="text" name="txt" placeholder="User name" required />

              <input type="email" name="email" placeholder="Email" required />

              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />

              <input
                type="password"
                name="pswd"
                placeholder="Confirm Password"
                required=""
              />

              <input
                type="text"
                name="Verification"
                placeholder="Phone Number"
                required
              />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
