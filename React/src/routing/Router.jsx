import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import AllProduct from "../pages/allProduct/AllProduct";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import EditProfile from "../pages/editProfile/EditProfile";
import NotFound from "../components/NotFound";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
