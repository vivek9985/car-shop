import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const Branddetails = () => {
  const { id } = useParams();
  const [brandDetail, setBrandDetail] = useState([]);
  const details = useLoaderData();
  useEffect(() => {
    const findBrandDetail = details.find((detail) => detail._id === id);
    setBrandDetail(findBrandDetail);
  }, []);
  const addtoCartHandler = (brandDetail) => {
    const { name, brand, price, type, description, rating, image } =
      brandDetail;
    const cart = { name, brand, price, type, description, rating, image };
    fetch("http://localhost:4000/myCarts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Added to mycart!");
      });
  };
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="uppercase text-3xl text-center text-gray-400 mb-16 mt-10">
        {brandDetail.brand}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-700 rounded-3xl  mb-28">
        <div className="w-full border-b-[1px] lg:border-r-[1px] lg:border-b-0 border-gray-700 rounded-3xl">
          <div className="w-full h-full flex flex-col items-center justify-start px-[25px] ">
            <img
              src={brandDetail.image}
              alt="image"
              className="w-full h-[190px] sm:h-[250px] md:h-[400px] lg:h-[320px]  my-7 rounded-3xl shadow-2xl"
            />
            <div className="grid grid-cols-3 gap-6 mb-8 w-full">
              <img
                src={brandDetail.image}
                alt="image"
                className="rounded-xl cursor-pointer w-full h-[50px] sm:h-[70px] md:h-[90px] lg:h-[70px] xl:h-[90px]"
              />
              <img
                src={brandDetail.image}
                alt="image"
                className="rounded-xl cursor-pointer w-full h-[50px] sm:h-[70px] md:h-[90px] lg:h-[70px] xl:h-[90px]"
              />
              <img
                src={brandDetail.image}
                alt="image"
                className="rounded-xl cursor-pointer w-full h-[50px] sm:h-[70px] md:h-[90px] lg:h-[70px] xl:h-[90px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 lg:mt-0">
            <div className="p-6 pt-7 text-gray-800">
              <div className="flex justify-between text-lg bg-[#242222d7] rounded-xl p-3 mb-4">
                <div className="text-gray-400">
                  <h2>
                    Name :{" "}
                    <span className="text-gray-500">{brandDetail.name}</span>
                  </h2>
                  <h2>
                    Brand :{" "}
                    <span className="uppercase text-gray-500">
                      {brandDetail.brand}
                    </span>
                  </h2>
                </div>
                <div className="text-gray-400">
                  <p>
                    Type :{" "}
                    <span className="text-gray-500">{brandDetail.type}</span>
                  </p>
                  <h2>
                    Rating :{" "}
                    <span className="text-gray-500">{brandDetail.rating}</span>
                  </h2>
                </div>
              </div>
              <h3 className="bg-[#ffffff1a] text-red-500 text-xl inline-flex py-1 px-5 mt-2 rounded-xl mb-4">
                Price :{" "}
                <span className="text-gray-300 pl-3 pr-2 font-medium">
                  {brandDetail.price}
                </span>
                $
              </h3>
              <div>
                <p className="text-stone-300 text-lg ml-1">
                  Short description :{" "}
                  <span className="text-gray-400 leading-3 text-base">
                    {brandDetail.description}
                  </span>
                </p>
                <h2 className="mt-3 ml-1 text-gray-400 text-lg font-medium">
                  Available colors :{" "}
                </h2>
                <div className="mt-4 ml-2 flex gap-4">
                  <button className="bg-red-500 w-5 h-5 outline-dashed outline-[#4a4b49] outline-[3px] rounded-full"></button>
                  <button className="bg-blue-700 w-5 h-5 outline-dashed outline-[#4a4b49] outline-[3px] rounded-full"></button>
                  <button className="bg-yellow-500 w-5 h-5 outline-dashed outline-[#4a4b49] outline-[3px] rounded-full"></button>
                  <button className="bg-gray-500 w-5 h-5 outline-dashed outline-[#4a4b49] outline-[3px] rounded-full"></button>
                  <button className="bg-white w-5 h-5 outline-dashed outline-[#4a4b49] outline-[3px] rounded-full"></button>
                </div>
                <div className="mt-7 ml-2 mb-3 flex gap-5">
                  <button
                    onClick={() => addtoCartHandler(brandDetail)}
                    className="btn px-5 text-base rounded-2xl border-none bg-fuchsia-400 hover:text-gray-900 capitalize"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Branddetails;
