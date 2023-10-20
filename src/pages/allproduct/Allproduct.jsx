import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Allproduct = () => {
  const cars = useLoaderData();
  // console.log(cars)

  return (
    <div className="w-10/12 mx-auto mt-10 mb-28">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
        {cars?.map((car) => (
          <Product key={car?._id} car={car}></Product>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
