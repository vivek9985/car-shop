import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Laytout from "./layout/Laytout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Errorpage from "./pages/errorpage/Errorpage";
import Addproduct from "./pages/addproduct/Addproduct";
import Mycart from "./pages/mycart/Mycart";
import Brandedproduct from "./pages/brandedproduct/Brandedproduct";
import Privateroute from "./privateroute/Privateroute";
import Branddetails from "./pages/branddetails/Branddetails";
import Updateproduct from "./pages/updateproduct/Updateproduct";

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
        loader: ({ params }) =>
          fetch(`http://localhost:4000/brand/${params.brand}`),
      },
      {
        path: "/brand/:brand/:id",
        element: (
          <Privateroute>
            <Branddetails></Branddetails>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/brand/${params.brand}`),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <Privateroute>
            <Updateproduct></Updateproduct>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/product/${params.id}`),
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
        path: "/mycart",
        element: (
          <Privateroute>
            <Mycart></Mycart>
          </Privateroute>
        ),
        loader: () => fetch("http://localhost:4000/myCarts"),
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
