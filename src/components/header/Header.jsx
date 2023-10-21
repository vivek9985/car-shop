import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/car.png";
import { BiSolidUserCircle } from "react-icons/Bi";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const logoutHandle = () => {
    logout()
      .then(toast.success("Logged Out."))
      .catch((error) => {
        console.error(error);
      });
  };
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 pb-px border-b-2 border-gray-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500 pb-px border-b-2 border-gray-500" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive }) =>
            isActive ? "text-red-500 pb-px border-b-2 border-gray-500" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allproduct"
          className={({ isActive }) =>
            isActive ? "text-red-500 pb-px border-b-2 border-gray-500" : ""
          }
        >
          All Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive }) =>
            isActive ? "text-red-500 pb-px border-b-2 border-gray-500" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="text-white">
      <section className="w-11/12 mx-auto">
        <div className="navbar w-full justify-between py-6 md:pt-5">
          <div className="w-auto pl-3 navbar-center lg:w-4/12">
            <NavLink to="/">
              <div className="flex items-end justify-end -mb-6">
                <img src={logo} alt="image" className="invert w-10" />
              </div>
              <div className="">
                {" "}
                <h2 className="text-gray-500 font-bold text-xl md:text-2xl lg:text-2xl cursor-pointer">
                  <span className="text-red-700 font-black">.</span>
                  <span className="text-teal-300 trebu text-4xl font-black">
                    V
                  </span>
                  ems
                </h2>
              </div>
            </NavLink>
          </div>
          <div className="lg:ml-3 xl:ml-5 hidden lg:w-4/12 lg:flex lg:pl-5">
            <ul className="flex lg:space-x-3 xl:space-x-4 text-gray-100 lg:font-light xl:font-semibold lg:text-xs xl:text-sm">
              {nav}
            </ul>
          </div>

          <div className="w-1/2 pr-3 flex items-center justify-end navbar-start lg:hidden lg:w-4/12">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-600 text-white rounded-box w-52 right-3 z-10 text-sm"
              >
                {nav}
                <div className="w-auto h-px bg-teal-300 m-3 rounded-full"></div>
                <div className="ml-3 mb-2 flex items-center">
                  {user?.photoURL ? (
                    <div className="flex items-center gap-2 bg-gray-900 rounded-full py-1 pl-3 pr-1">
                      <h2 className="text-red-300 font-semibold overflow-hidden">
                        {user?.displayName}
                      </h2>
                      <img
                        src={user?.photoURL}
                        alt="image"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <BiSolidUserCircle className="text-4xl text-gray-500"></BiSolidUserCircle>
                    </div>
                  )}
                </div>
                <div className="ml-3 pb-2 flex items-center font-medium text-gray-900">
                  {user ? (
                    <button
                      onClick={logoutHandle}
                      className="pt-1.5 pb-2 py-1.5 px-4 bg-red-400 rounded-full"
                    >
                      <Link to="/">Logout</Link>
                    </button>
                  ) : (
                    <button className="pt-1.5 pb-2 py-1.5 px-4 bg-red-400 rounded-full">
                      <Link to="/login">Login</Link>
                    </button>
                  )}
                </div>
              </ul>
            </div>
          </div>
          <div className="navbar-end w-4/12 hidden lg:flex pr-5 items-center">
            <div className="flex items-center justify-between font-medium text-gray-900">
              {user ? (
                <button
                  onClick={logoutHandle}
                  className="pt-1.5 pb-2 px-4 bg-red-400 rounded-full"
                > 
                  <Link to="/">Logout</Link>
                </button>
              ) : (
                <button className="pt-1.5 pb-2 px-4 bg-red-400 rounded-full">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
            <div className="w-0.5 h-3 bg-red-500 mx-3 mt-1"></div>
            <div>
              {user?.photoURL ? (
                <div className="flex items-center gap-2 bg-gray-600 rounded-full py-1 pl-3 pr-1">
                  <h2 className="text-red-300 font-semibold overflow-hidden">
                    {user?.displayName}
                  </h2>
                  <img
                    src={user?.photoURL}
                    alt="image"
                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                  />
                </div>
              ) : (
                <div className="">
                  <BiSolidUserCircle className="text-4xl text-gray-500"></BiSolidUserCircle>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Toaster></Toaster>
    </div>
  );
};

export default Header;
