import toast, { Toaster } from "react-hot-toast";

const Product = ({ car }) => {
  const { _id, image, name, brand, price, rating, description, type } =
    car || {};

  const deletHandler = (_id) => {
    console.log(_id);
    fetch(`http://localhost:4000/product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("deleted");
          toast.success("Product deleted!");
        }
      });
  };

  return (
      <div className="bg-teal-700 overflow-hidden">
        <div>
          <img src={image} alt="image" className="w-full h-[300px]" />
        </div>
        <div>
          <div className="p-4">
            <h2>Name : {name}</h2>
            <h2>
              Brand : <span className="">{brand}</span>
            </h2>
            <h3>Price : {price}$</h3>
            <p>Short description : {description}</p>
            <p>Type : {type}</p>
            <h2>Rating : {rating}</h2>
          </div>
          <div className="space-x-4 p-4 pt-0">
            <button onClick={() => deletHandler(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
  );
};

export default Product;
