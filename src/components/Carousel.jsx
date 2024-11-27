import { useState } from "react";
import Card from "./Card";

import vec1 from "../images/Vector1.png";
import vec2 from "../images/Vector2.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto my-8">
        {/* Slides */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div className="w-full flex-shrink-0" key={slide.id}>
                <Card />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          className="hidden md:block absolute top-1/2 -left-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={handlePrev}
        >
          <img src={vec1} alt="" />
        </button>
        <button
          className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={handleNext}
        >
          <img src={vec2} alt="" />
        </button>

        {/* Indicators */}
        <div className=" absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
