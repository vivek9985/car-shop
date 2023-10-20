import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Brandedproduct = () => {
    const cars = useLoaderData();
    const [car, setCar] = useState([]);
    // const { id } = useParams();
    // console.log(cars)
    useEffect(() => {
        const findCar = cars.find((car) => car.brand == "bmw");
        setCar(findCar);
        console.log(car)
      }, []);
  return (

    <div className='w-10/12 mx-auto text-center text-4xl my-10'>
        <h2>Branded Cars</h2>
    </div>
  )
}

export default Brandedproduct