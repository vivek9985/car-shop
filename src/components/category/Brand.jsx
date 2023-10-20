import { Link } from "react-router-dom";

const Brand = ({ category }) => {
  const { brand, img } = category || {};

  const brandHandler = () =>{
    console.log("clicked")
 }
  return (
    <div className="rounded-xl hover:scale-95 duration-200 overflow-hidden">
      <Link to={`/brand/${brand}`} onClick={brandHandler} className="w-full h-full bg-gray-800">
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
