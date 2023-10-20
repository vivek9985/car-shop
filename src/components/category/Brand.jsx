import { Link } from "react-router-dom";

const Brand = ({ category }) => {
  const { id, brand, img } = category;
  return (
    <div className="rounded-xl hover:scale-95 duration-200 overflow-hidden">
      <Link to={`/brand/${id}`} className="w-full h-full bg-gray-800">
        <div className="rounded-xl relative">
          <img src={img} alt="image" className="w-full h-52 rounded-xl" />
          <div className="w-full h-full rounded-xl bg-[#0000003e] absolute top-0"></div>
        </div>
        <h3 className="text-gray-500 text-lg font-bold text-center mt-2">
          {brand}
        </h3>
      </Link>
    </div>
  );
};

export default Brand;
