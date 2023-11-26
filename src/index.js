import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import OurStore from "./Pages/OurStore";
import SingleProduct from "./Pages/SingleProduct";

import Blogs from "./Pages/Blogs";
import SingleBlog from "./Pages/SingleBlog";

import Faq from "./Pages/Faq";
import Login from "./Pages/Login";
import ForgetPass from "./Pages/ForgetPass";

import Cart from "./Pages/Cart";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnRefund from "./Pages/ReturnRefund";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";

import GoToTop from "./Components/GoToTop";

import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import AddProduct from "./Pages/Admin/AddProduct";
import AllProduct from "./Pages/Admin/AllProduct";
import AdminLogin from "./Pages/Admin/AdminLogin";
import OrderProduct from "./Pages/Admin/OrderProduct";
import Payment from "./Pages/Payment";
import UpdatePro from "./Pages/Admin/UpdatePro";
import BannerProduct from "./Pages/Admin/BannerProduct";
import DealDiscount from "./Pages/Admin/DealDiscount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: <OurStore />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget-password",
        element: <ForgetPass />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <ReturnRefund />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      {
        path: "",
        element: <AdminDashBoard />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },

      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "all-product",
        element: <AllProduct />,
      },
      {
        path: "product-update",
        element: <UpdatePro />,
      },
      {
        path: "order-product",
        element: <OrderProduct />,
      },
      {
        path: "banner-product",
        element: <BannerProduct />,
      },
      {
        path: "deals-product",
        element: <DealDiscount />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="login" element={<Login />} />
//       <Route path="cart" element={<Cart />} />
//       <Route path="store" element={<OurStore />} />
//       <Route path="blogs" element={<Blogs />} />
//       <Route path="/product/:id" element={<SingleProduct />} />

//       <Route path="admin" element={<AdminDashBoard />} />
//       <Route path="admin/add-product" element={<AddProduct />} />
//       <Route path="admin/all-product" element={<AllProduct />} />
//       <Route path="*" element={<Page404 />} />
//     </Route>
//   )
// );
// const adminRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="admin" element={<AdminLayout />}>
//       <Route path="" element={<AdminDashBoard />} />
//       <Route path="admin/add-product" element={<AddProduct />} />
//       <Route path="admin/all-product" element={<AllProduct />} />

//       <Route path="*" element={<Page404 />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GoToTop />
  </React.StrictMode>
);
