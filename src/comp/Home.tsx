import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const images = [
  "../../public/images/pexels-francesco-ungaro-273758.jpg",

  "../../public/images/284553.jpg",
  "../../public/images/pexels-pixabay-210012.jpg",
  // Add more image paths as needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <div className="relative overflow-hidden w-full h-screen before:absolute before:bg-black before:w-full before:h-full before:z-40 before:opacity-50">
        <Nav />
        <div className="absolute inset-0  z-10"></div>

        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ease-in-out transform  ${
              index === currentIndex
                ? "  opacity-100 scale-125 z-20"
                : "opacity-0 scale-100"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
        <h2 className="container absolute sm:w-fit right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-10 md:leading-tight lg:leading-snug xl:leading-normal z-50">
          {" "}
          Travel, Enjoy And Live a New Full Life
        </h2>
        {/* <p className=" container absolute right-1/2 lg:w-fit translate-x-1/2 top-[68%] -translate-y-1/2 text-white leading-8 md:leading-9 lg:leading-10 xl:leading-normal  text-center 	 z-50 ">
          We don’t just work with concrete and steel. We work with people We are
          Approachable, with even our highest work work with oncrete and steel.
          We work with people
        </p> */}
        {/* <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-30 focus:outline-none"
        >
          ❮
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-30 focus:outline-none"
        >
          ❯
        </button> */}

        {/* Indicators */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Home;
