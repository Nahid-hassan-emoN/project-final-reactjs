import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import "./Extra.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelUserLogin = async (e) => {
    e.preventDefault();
    // const params = useParams();
    const email = e.target.email.value;
    const password = e.target.pswd.value;

    try {
      const res = await fetch(
        "https://eshop-backend-rose.vercel.app/customer/auth/login",
        {
          method: "POST",
          // specify the HTTP method
          headers: {
            "Content-Type": "application/json", // specify the content type as JSON
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            email,
            password,
          }),
          // convert data to JSON format
        }
      );

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("eshopCustomerToken", data.token);
        navigate(`/`);
      } else {
        alert("Incorrect Password or Email");
      }

      // console.log(localStorage.getItem("eshoptoken"));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handelUserSignUp = async (e) => {
    e.preventDefault();
    // const params = useParams();
    const email = e.target.email.value;
    const password = e.target.passWord.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const image = e.target.phone.value;

    try {
      const res = await fetch(
        "https://eshop-backend-rose.vercel.app/customer/auth/create",
        {
          method: "POST",
          // specify the HTTP method
          headers: {
            "Content-Type": "application/json", // specify the content type as JSON
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            email,
            password,
            fname,
            lname,
            image,
          }),
          // convert data to JSON format
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("eshopCustomerToken", data.token);
        navigate(`/`);
      } else {
        alert(`Failed To Create a Account \n Account Already Exists`);
      }

      // console.log(localStorage.getItem("eshoptoken"));
    } catch (error) {
      console.log(error.message);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Meta title={"Log In"} />
      <BreadCrumb title="Log In" />

      <div className="login-main">
        <div class="main mt-3 mb-5">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={handelUserLogin}>
              <label for="chk" aria-hidden="true">
                Log-in
              </label>

              <input type="email" name="email" placeholder="Email" required />
              <input
                type={showPassword ? "text" : "password"}
                name="pswd"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                id="show-pass"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
              <button type="submit">Login</button>
              <div className="forget-pass ">
                <span>Forget</span> &nbsp;
                <Link to="/forget-password">Username / Password?</Link>
              </div>
            </form>
          </div>

          <div className="login">
            <form className="" onSubmit={handelUserSignUp}>
              <label for="chk" aria-hidden="true">
                Sign-up
              </label>
              <input
                type="text"
                name="fname"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                required
              />

              <input type="email" name="email" placeholder="Email" required />

              <input
                type="text"
                name="passWord"
                placeholder="Password"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                // required
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
