import React from "react";
import ReactDOM from "react-dom/client";
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

// react-quaery
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./Pages/content/ProtectedRoute";
import AuthProvider from "./Pages/content/AuthProvider";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

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
        element: (
          <AuthProvider>
            <Cart />
          </AuthProvider>
        ),
      },
      {
        path: "/payment",

        element: (
          <AuthProvider>
            <Payment />
          </AuthProvider>
        ),
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
        path: "/product/:productId",
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
        element: (
          <ProtectedRoute>
            <AdminDashBoard />
          </ProtectedRoute>
        ),
      },

      {
        path: "login",
        element: <AdminLogin />,
      },

      {
        path: "add-product",
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-product",
        element: (
          <ProtectedRoute>
            <AllProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "product-update/:productId",
        element: (
          <ProtectedRoute>
            <UpdatePro />
          </ProtectedRoute>
        ),
      },
      {
        path: "order-product",
        element: (
          <ProtectedRoute>
            <OrderProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "banner-product",
        element: (
          <ProtectedRoute>
            <BannerProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "deals-product",

        element: (
          <ProtectedRoute>
            <DealDiscount />
          </ProtectedRoute>
        ),
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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <GoToTop />
  </QueryClientProvider>
);
