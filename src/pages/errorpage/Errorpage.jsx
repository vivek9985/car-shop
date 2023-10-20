import { Link } from "react-router-dom";
import error from "../../assets/404-error-with-broken-robot-pana.svg";
const Errorpage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-screen">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-9xl">404</h2>
          <h3 className="text-4xl mt-4 text-gray-500">Page not found</h3>
          <Link
            to="/"
            className="btn rounded-none mt-10 font-bold hover:rounded-2xl "
          >
            Go to home
          </Link>
        </div>
      </div>
      <img src={error} alt="image" className="col-span-1 md:col-span-2 w-full h-screen" />
    </div>
  );
};

export default Errorpage;
