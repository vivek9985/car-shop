import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Brand from "../../components/category/Brand";
import tesla from "../../assets/tesla-road-star.jpg";
import honda from "../../assets/honda-22.jpg";
import toyota from "../../assets/toyotajpg.jpg";
import bmw from "../../assets/bmw-m440i.jpg";
import carRepair from "../../assets/bg-car.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const categories = useLoaderData();
  return (
    <section className="overflow-hidden">
      <Banner></Banner>
      <div className="overflow-hidden mb-16 mt-28">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-center uppercase"
          data-aos="fade-up"
        >
          Trusted brands
        </h2>
      </div>
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 md:mx-20 lg:mx-36">
        {categories.map((category) => (
          <Brand key={category.id} category={category}></Brand>
        ))}
      </div>
      <div className="w-10/12 mx-auto">
        <div className="overflow-hidden mt-40 mb-16">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
            data-aos="fade-up"
          >
            RECENT ITEMS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="bg-stone-950" data-aos="fade-right">
            <img src={tesla} alt="image" className="w-full h-60 md:h-72" />
            <div className="flex items-center justify-between">
              <h3 className="text-xm md:text-base lg:text-xl pl-5">
                2022 Tesla Roadster
              </h3>
              <h4 className="text-xm md:text-base lg:text-xl bg-red-500 pt-2 pb-3 px-2">
                Buy for{" "}
                <span className="text-lg lg:text-2xl font-normal lg:font-medium">
                  $90000
                </span>
              </h4>
            </div>
          </div>
          <div className="bg-stone-950" data-aos="fade-left">
            <img src={honda} alt="image" className="w-full h-60 md:h-72" />
            <div className="flex items-center justify-between">
              <h3 className="text-xm md:text-base lg:text-xl pl-5">
                2021 Honda Accord
              </h3>
              <h4 className="text-xm md:text-base lg:text-xl bg-red-500 pt-2 pb-3 px-2">
                Buy for{" "}
                <span className="text-lg lg:text-2xl font-normal lg:font-medium">
                  $35000
                </span>
              </h4>
            </div>
          </div>
          <div className="bg-stone-950" data-aos="fade-up">
            <img src={bmw} alt="image" className="w-full h-60 md:h-72" />
            <div className="flex items-center justify-between">
              <h3 className="text-xm md:text-base lg:text-xl pl-5">
                2020 BMW M440i
              </h3>
              <h4 className="text-xm md:text-base lg:text-xl bg-red-500 pt-2 pb-3 px-2">
                Buy for{" "}
                <span className="text-lg lg:text-2xl font-normal lg:font-medium">
                  $55000
                </span>
              </h4>
            </div>
          </div>
          <div className="bg-stone-950" data-aos="fade-up">
            <img src={toyota} alt="image" className="w-full h-60 md:h-72" />
            <div className="flex items-center justify-between">
              <h3 className="text-xm md:text-base lg:text-xl pl-5">
                2016 Toyota Camry
              </h3>
              <h4 className="text-xm md:ttext-lg lg:ext-base font-normal lg:lg:text-xl bg-red-500 pt-2 pb-3 px-2">
                Buy for{" "}
                <span className="text-lg lg:text-2xl font-normal lg:font-medium">
                  $20000
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="my-28">
        <div className="my-10 overflow-hidden">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-center"
            data-aos="fade-up"
          >
            ALL KINDS OF PARTS THAT YOU <br className="hidden md:block" /> NEED
            CAN FIND HERE
          </h2>
        </div>
        <div className="flex justify-center overflow-hidden">
          <button className="btn bg-red-400 border-none rounded-full text-gray-900 mb-6" data-aos="fade-up"
          data-aos-duration="1000"
          >
            Shop now
          </button>
        </div>
        <div className="flex justify-center">
          <img src={carRepair} alt="image" className="px-10" />
        </div>
      </div>
    </section>
  );
};

export default Home;
