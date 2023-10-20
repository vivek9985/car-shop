import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useLoaderData } from "react-router-dom";
import udemy from "../../assets/udemy.png";
import w3 from "../../assets/w3.png";
import tenmin from "../../assets/10min.png";

const Brandedproduct = () => {
  const brands = useLoaderData();
  console.log(brands.length);

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
      <h2 className="text-4xl text-center">Branded Cars</h2>
      {!brands? (
        <h2 className="text-6xl text-teal-300 mb-20">No data</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 mb-20">
          {brands.map((brand) => (
            <div key={brand._id}>
              <div className="bg-gray-800">
                <div>
                  <img
                    src={brand.image}
                    alt="image"
                    className="w-full h-[300px]"
                  />
                </div>
                <div className="p-4 bg-red-50 text-gray-800 font-bold">
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
                  <h3 className="bg-lime-200 inline-flex py-1 px-2 mt-2">
                    Price :{" "}
                    <span className="text-red-700 pl-1">{brand.price}</span>$
                  </h3>
                  <div className="h-0.5 w-full bg-red-100 my-3 rounded"></div>
                  <p>Short description : {brand.description}</p>
                  <div className="p-4 pl-0">
                    <button
                      onClick={() => deletHandler(_id)}
                      className="btn btn-error"
                    >
                      Details
                    </button>
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
          className="keen-slider h-60 rounded-lg overflow-hidden"
        >
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://www.udemy.com/course/learn-digital-marketing-course/?gclid=CjwKCAjwysipBhBXEiwApJOcuxBrae9aPvWJabXJgPrv80tRaUHJ2anYX7wHViIOReetaK8s0OQjCBoCcVcQAvD_BwE&matchtype=b&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_124298672047_._ad_535757779883_._kw_digital+marketing+course+udemy_._de_c_._dm__._pl__._ti_kwd-1885119161709_._li_1001441_._pd__._"
              target="_blank"
              className="flex items-center"
            >
              <img src={udemy} alt="image" className="h-60" />

              <h3 className="text-3xl text-black px-5">
                The Complete Digital Marketing <br /> Course - 12 Courses in 1
              </h3>
            </a>
          </div>
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              className="flex items-center"
            >
              <img src={w3} alt="image" className="h-60" />

              <h3 className="text-3xl text-black px-5">
                The Complete Digital Marketing <br /> Course - 12 Courses in 1
              </h3>
            </a>
          </div>
          <div className="keen-slider__slide number1-slide1 bg-gray-50">
            <a
              href="https://10minuteschool.com/?utm_source=google&utm_medium=cpc&utm_campaign=na_branddefence_search_rsa_maxconversions(tcpa)_conversion&utm_content=txt_na_na&utm_term=1p_detailed_demo+inmkt+aff_all_18-54&campaign=google-ads&type=search&gclid=CjwKCAjwysipBhBXEiwApJOcu5oOWFt6_eAIUgSpmVG7au2K-6MncptRDpB2JHAv_IE1a4qwdAgSthoCm54QAvD_BwE"
              target="_blank"
              className="flex items-center"
            >
              <img src={tenmin} alt="image" className="h-60 w-[600px]" />

              <h3 className="text-3xl text-black px-5">
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
