import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Updateproduct = () => {
  const update = useLoaderData();
  const { _id, brand, name, image, price, rating, description, type } =
    update || {};
  const updateProductHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const description = form.description.value;
    const type = form.cars.value;
    const updatedProduct = {
      name,
      brand,
      price,
      rating,
      image,
      description,
      type,
    };
    fetch(`http://localhost:4000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated product!");
      });
  };

  return (
    <div>
      <div className="w-8/12 mx-auto mb-20">
        <h2 className="text-4xl font-semibold text-gray-500 text-center my-10">
          Update <span>{name}</span>
        </h2>
        <form
          onSubmit={updateProductHandler}
          className="space-y-4 md:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Product name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={name}
                  className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="product name"
                  required
                />
              </div>
              <div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Brand name
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    defaultValue={brand}
                    placeholder="brand name"
                    className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={price}
                    placeholder="price"
                    className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <label className="block mb-2 text-sm font-medium">Rating</label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  defaultValue={rating}
                  min="1"
                  max="5"
                  placeholder="rating"
                  className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Product image URL
                </label>
                <input
                  type="url"
                  name="image"
                  id="image"
                  defaultValue={image}
                  className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="product image url"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Short description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  defaultValue={description}
                  rows="4"
                  placeholder="short description"
                  className="text-gray-800 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block mb-2 text-sm font-medium">
                  Product type
                </label>
                <select
                  name="cars"
                  id="cars"
                  defaultValue={type}
                  className="text-gray-500 px-3 py-2.5 rounded-lg w-1/2"
                >
                  <option value=""></option>
                  <option value="car" className="rounded-lg">
                    Car
                  </option>

                  <option value="Bike">Bike</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-600 uppercase hover:bg-cyan-500 font-bold rounded-lg text-sm px-5 py-3.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Updateproduct;
