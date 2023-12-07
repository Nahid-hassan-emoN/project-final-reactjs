import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pswd.value;

    try {
      const res = await fetch(
        "https://eshop-backend-rose.vercel.app/admin/auth/login",
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
        localStorage.setItem("eshoptoken", data.token);
        navigate("/admin");
      } else {
        alert("Incorrect Password or Email");
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
      <div className="adminLogin-main">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="adminLogin">
            <form onSubmit={handelLogin}>
              <label for="chk" aria-hidden="true">
                Admin
                <span>
                  <br />
                  Log-In
                </span>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
