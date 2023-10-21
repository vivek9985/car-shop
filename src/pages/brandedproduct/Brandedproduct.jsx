import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link, useLoaderData } from "react-router-dom";
import udemy from "../../assets/udemy.png";
import w3 from "../../assets/w3.png";
import tenmin from "../../assets/10min.png";

const Brandedproduct = () => {
  const brands = useLoaderData();
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-4xl text-center text-gray-400">Branded Cars</h2>
      {brands.length == 0 ? (
        <h2 className="text-6xl text-gray-300 mt-20 mb-60">No product yet..</h2>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-14 mb-20 ">
          {brands.map((brand) => (
            <div key={brand._id}>
              <div className="bg-[#151515] border border-gray-700 text-gray-400 rounded-2xl overflow-hidden">
                <div>
                  <img
                    src={brand.image}
                    alt="image"
                    className="w-full h-[300px]"
                  />
                </div>
                <div className="p-6 text-gray-300 font-medium overflow-hidden ">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="">Name : {brand.name}</h2>
                      <h2>
                        Brand : <span className="uppercase">{brand.brand}</span>
                      </h2>
                    </div>
                    <div>
                      <p>Type : {brand.type}</p>
                      <h2>Rating : {brand.rating}</h2>
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-lg bg-[#46454554] inline-flex py-1 px-4 mt-2 rounded-xl">
                    Price :{" "}
                    <span className="text-green-500 pl-2">{brand.price}$</span>
                  </h3>
                  <div className="h-px mt-5 mb-4 w-full bg-gray-800 rounded"></div>
                  <p className="mb-9">
                    Short description :{" "}
                    <span className="font-normal">{brand.description}</span>
                  </p>
                  <div className="mt-4 flex gap-5">
                    <Link to={`/brand/${brand.brand}/${brand._id}`}>
                      <button className="btn px-5 text-base rounded-2xl bg-purple-400 hover:text-gray-900 capitalize border-none">
                        Details
                      </button>
                    </Link>
                    <Link to={`/updateproduct/${brand._id}`}>
                      <button className="btn px-5 text-base rounded-2xl bg-cyan-300 hover:text-gray-900 capitalize border-none">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <h2 className="text-gray-500">Advertisements</h2>
        <div
          ref={sliderRef}
          className="keen-slider h-96 md:h-60 rounded-lg overflow-hidden"
        >
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://www.udemy.com/course/learn-digital-marketing-course/?gclid=CjwKCAjwysipBhBXEiwApJOcuxBrae9aPvWJabXJgPrv80tRaUHJ2anYX7wHViIOReetaK8s0OQjCBoCcVcQAvD_BwE&matchtype=b&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_124298672047_._ad_535757779883_._kw_digital+marketing+course+udemy_._de_c_._dm__._pl__._ti_kwd-1885119161709_._li_1001441_._pd__._"
              target="_blank"
              className="flex flex-col md:flex-row items-center"
            >
              <img
                src={udemy}
                alt="image"
                className="h-60 w-[200px] md:w-[400px] py-16 pl-8"
              />

              <h3 className="text-2xl md:text-3xl text-black px-5">
                The Complete Digital Marketing{" "}
                <br className="hidden md:block" /> Course - 12 Courses in 1
              </h3>
            </a>
          </div>
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              className="flex flex-col md:flex-row items-center"
            >
              <img src={w3} alt="image" className="h-60" />

              <h3 className="text-2xl md:text-3xl text-black px-5">
                The Complete Web Developent{" "}
                <span className="text-red-500">Free</span> Course
              </h3>
            </a>
          </div>
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://10minuteschool.com/?utm_source=google&utm_medium=cpc&utm_campaign=na_branddefence_search_rsa_maxconversions(tcpa)_conversion&utm_content=txt_na_na&utm_term=1p_detailed_demo+inmkt+aff_all_18-54&campaign=google-ads&type=search&gclid=CjwKCAjwysipBhBXEiwApJOcu5oOWFt6_eAIUgSpmVG7au2K-6MncptRDpB2JHAv_IE1a4qwdAgSthoCm54QAvD_BwE"
              target="_blank"
              className="flex flex-col md:flex-row items-center"
            >
              <img
                src={tenmin}
                alt="image"
                className="h-60 w-[200px] md:w-[400px] py-20 md:py-20 pl-8"
              />

              <h3 className="text-2xl md:text-3xl text-black px-10">
                স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brandedproduct;
