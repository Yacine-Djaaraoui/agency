import React from "react";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../public/images/Alone Forest Travel.jpeg";
import img2 from "../../public/images/Best Honeymoon Places In Hawaii + Top Resorts.jpeg";
import img3 from "../../public/images/Summit Victory Pose.jpeg";
import img4 from "../../public/images/Top 15 Airbnbs in The Dolomites.jpeg";
import img5 from "../../public/images/WanderOn_ Global Travel Community,Tours, Adventure, Things To Do & More.jpeg";

const Images = () => {
  const Testimonials = [img1, img2, img3, img4, img5];

  return (
    <>
      <div className="container mt-24 mb-24">
        <h2 className="text-2xl lg:text-4xl text-center font-bold mb-4 text-title">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="container text-center overflow-hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Testimonials.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="py-12 md:px-4">
                    <div className="border rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Images;
