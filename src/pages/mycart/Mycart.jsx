import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Mycart = () => {
  const loadedMyCarts = useLoaderData();
  const [myCarts, setMyCarts] = useState(loadedMyCarts);
  const productDeleteHandler = (id) => {
    fetch(`http://localhost:4000/myCarts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product deleted!");
          const remainingCarts = myCarts.filter((cart) => cart._id !== id);
          setMyCarts(remainingCarts);
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-gray-400 my-10">
        My added product
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-8 mb-28">
        {myCarts.map((cart) => (
          <div
            key={cart._id}
            className="bg-[#33323252] rounded-lg overflow-hidden m-5"
          >
            <div className="grid grid-cols-2">
              <div className="h-full flex items-start justify-center border-r-[1px] border-gray-700 p-3">
                <img
                  src={cart.image}
                  alt="image"
                  className="rounded-lg w-full h-[120px] sm:h-[160px] md:h-[220px] lg:h-[120px] xl:h-[180px]"
                />
              </div>
              <div className="text-[#91a8bd] p-3 rounded-lg text-lg">
                <h2 className="">
                  Name :{" "}
                  <span className="text-gray-500 font-normal text-base">
                    {cart.name}
                  </span>
                </h2>
                <h2 className="">
                  Brand :{" "}
                  <span className="text-gray-500 font-normal text-base uppercase">
                    {cart.brand}
                  </span>
                </h2>
                <h2 className="">
                  Price :{" "}
                  <span className="text-gray-500 font-normal text-base">
                    {cart.price}$
                  </span>
                </h2>
                <div className="flex flex-wrap gap-1 md:gap-4 text-black text-sm font-semibold">
                  <button className="py-1.5 px-3 bg-[#91ff48e3] hover:bg-fuchsia-300 hover:scale-105 duration-75 rounded-md mt-3">
                    Order
                  </button>
                  <button
                    onClick={() => productDeleteHandler(cart._id)}
                    className="py-1.5 px-3 bg-[#ff5d48e3] hover:bg-gray-400 hover:scale-105 duration-75 rounded-md mt-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Mycart;
