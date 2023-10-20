import { Link, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Laytout from "./layout/Laytout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Errorpage from "./pages/errorpage/Errorpage";
import Addproduct from "./pages/addproduct/Addproduct";
import Mycart from "./pages/mycart/Mycart";
import Allproduct from "./pages/allproduct/Allproduct";
import Brandedproduct from "./pages/brandedproduct/Brandedproduct";
import Privateroute from "./privateroute/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Laytout></Laytout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/brand/:brand",
        element: (
          <Privateroute>
            <Brandedproduct></Brandedproduct>
          </Privateroute>
        ),
        loader: ({params}) => fetch(`http://localhost:4000/brand/${params.brand}`),
      },
      {
        path: "/addproduct",
        element: (
          <Privateroute>
            <Addproduct></Addproduct>
          </Privateroute>
        ),
      },
      {
        path: "/allproduct",
        element: <Allproduct></Allproduct>,
        loader: () => fetch("http://localhost:4000/product"),
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
