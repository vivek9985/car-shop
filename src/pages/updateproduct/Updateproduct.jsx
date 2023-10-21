const Updateproduct = () => {
  return (
    <div>
      <div className="w-8/12 mx-auto mb-20">
        <h2 className="text-4xl font-semibold text-gray-500 text-center my-10">
          Update product
        </h2>
        <form className="space-y-4 md:space-y-6">
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
                  className="text-gray-800 px-3 py-2.5 rounded-lg w-1/2"
                >
                  <option value="car" className="rounded-lg">
                    Car
                  </option>
                  <option value="Bike">Bike</option>
                  <option value="null">null</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-600 uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-3.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
