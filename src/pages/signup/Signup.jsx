import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      toast.error("Password must have 6 characters");
    } else if (!/[@$!%*?&#]/.test(password)) {
      toast.error("Must have one special character");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must have one capital letter");
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("Created a new user.");
          form.reset();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const googleLogin = () => {
    loginwithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Logged in with Google.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="w-11/12 mx-auto mt-4 lg:mt-14 mb-20 overflow-hidden">
      <div className="flex items-center justify-center md:h-screen lg:py-0 mt-10">
        <div className="w-11/12 lg:w-full bg-transparent -rotate-6 rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="bg-[#ffffff3d] filter  rounded-2xl rotate-6">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form
                onSubmit={loginHandler}
                className="space-y-4 md:space-y-6"
                action=""
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your email address"
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
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-300 ">
                      I accept the{" "}
                      <Link className="font-medium text-primary-600 hover:underline">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
              </form>
              <div>
                <div className="flex justify-center">
                  <button
                    onClick={googleLogin}
                    className="w-full py-2 px-4 rounded-lg bg-red-500 font-medium"
                  >
                    Login with google
                  </button>
                </div>
                <p className="text-sm text-gray-300 mt-5">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Signup;
