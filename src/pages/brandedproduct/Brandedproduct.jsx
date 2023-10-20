// import { useEffect } from "react"

import { useLoaderData } from "react-router-dom";

const Brandedproduct = () => {
  const brands = useLoaderData();
  console.log(brands);

  // useEffect(()=>{

  // }, [])

  return (
    <div className="w-10/12 mx-auto text-center text-4xl my-10">
      <h2>Branded Cars</h2>
    </div>
  );
};

export default Brandedproduct;
