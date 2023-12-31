import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Brand = ({ category }) => {
  const { brand, img } = category || {};
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="rounded-xl hover:scale-95 duration-200 overflow-hidden">
      <Link to={`/brand/${brand}`} className="w-full h-full bg-gray-800" data-aos="fade-up">
        <div className="rounded-xl relative">
          <img src={img} alt="image" className="w-full h-52 rounded-xl" />
          <div className="w-full h-full rounded-xl bg-[#0000003e] absolute top-0"></div>
        </div>
        <h3 className="text-gray-500 text-lg font-bold text-center mt-2 uppercase">
          {brand}
        </h3>
      </Link>
    </div>
  );
};

export default Brand;
