import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider h-60 md:h-[80vh] lg:h-[95vh]"
        >
          <div className="keen-slider__slide number-slide1 bg-no-repeat bg-cover bg-top">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
              <div className="text-white px-12 md:pl-20">
                <h3 className="font-medium text-sm md:text-lg text-red-600">
                  Awsome cars
                </h3>
                <h2 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
                  Exlusive & Branded Car collection
                </h2>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 bg-no-repeat bg-cover bg-center">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
              <div className="text-white px-12 md:pl-20">
                <h3 className="font-medium text-sm md:text-lg text-red-600">
                  Awsome cars
                </h3>
                <h2 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
                  Exlusive & Branded Car collection
                </h2>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3 bg-no-repeat bg-cover bg-center">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
              <div className="text-white px-12 md:pl-20">
                <h3 className="font-medium text-sm md:text-lg text-red-600">
                  Awsome cars
                </h3>
                <h2 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
                  Exlusive & Branded Car collection
                </h2>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
};
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default Banner;
