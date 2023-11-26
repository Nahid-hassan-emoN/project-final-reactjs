import React from "react";

const AdminLogin = () => {
  const handelLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pswd.value;

    try {
      const res = await fetch(
        "https://eshop-backend-rose.vercel.app/admin/auth/login",
        {
          method: "POST", // specify the HTTP method
          headers: {
            "Content-Type": "application/json", // specify the content type as JSON
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            email,
            password,
          }), // convert data to JSON format
        }
      );
      const data = await res.json();
      console.log(data);
      localStorage.setItem("eshoptoken", data.token);
      console.log(localStorage.getItem("eshoptoken"));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="adminLogin-main">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="adminLogin">
            <form onSubmit={handelLogin}>
              <label for="chk" aria-hidden="true">
                Admin Log-in
              </label>

              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
