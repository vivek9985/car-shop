import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../../assets/signin.jpeg";
import { AuthContext } from "../../providers/Authprovider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Logged in.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <section className="w-full px-2 md:px-0 lg:w-11/12 xl:w-10/12 h-auto mx-auto mt-2 lg:mt-28 grid justify-between grid-cols-1 lg:grid-cols-2 rounded-2xl pb-32 overflow-hidden">
      <div className="w-11/12 mx-auto flex flex-col items-center lg:items-start justify-center py-8 lg:py-0">
        <div className="w-11/12 mx-auto rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="bg-cyan-200 rotate-6 rounded-2xl">
            <div className="w-full bg-lime-50 p-5 space-y-4 md:space-y-6 sm:p-8 -rotate-6 rounded-2xl">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login your account
              </h1>
              <form onSubmit={loginHandler} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <Link
                    href=""
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm text-gray-500 ">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto overflow-hidden flex justify-start mt-12 lg:mt-0">
        <img src={loginimg} alt="image" className="rounded-2xl" />
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Login;
