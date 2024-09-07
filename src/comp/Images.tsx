import React from "react";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@radix-ui/react-dialog";
import { LucideAudioWaveform } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
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
      <div className=" mt-24 mb-20 ">
        <p className="text-lg md:text-xl text-center font-semibold text-gray-700 mb-2 italic">
          Explorez La Visite
        </p>{" "}
        <h2 className="text-4xl font-font-rubik md:text-5xl text-center font-extrabold text-gray-900 leading-tight mb-12">
          Photos Préférées
        </h2>
        <div className=" relative pb-28 before:absolute before:w-full before:h-80 before:bottom-0 before:bg-orangeLight  ">
          <div className="container text-center overflow-hidden   ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {Testimonials.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    <div className="p-0 flex items-center justify-center">
                      <Card className=" w-full">
                        <CardContent className=" p-0  h-[470px] sm:h-[400px]   relative hover:scale-105 transition-all duration-500  ease  before:absolute before:bg-orange before:w-full before:h-0 before:opacity-20 hover:before:h-full before:transition-all before:ease before:duration-500 before:bottom-0 before:z-50  before:right-0  ">
                          <img
                            src={item}
                            alt=""
                            className=" w-full h-full  object-cover rounded-lg  "
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* {Testimonials.map((item, index) => (
            <li className="border border-black p-6 min-w-[410px]">
              <div className="stars flex justify-center items-center">
                {calculStars(item)}
              </div>{" "}
              <p className="mt-4 text-center">{item.Content}</p>
              <h2 className="mt-4 font-bold">{item.name}</h2>
            </li>
          ))}

          <div className="flex items-center justify-center gap-4 mt-5 mb-5">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => {
                setArrow("left");
                setTranslateX((prev) => prev + 440);
              }}
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => {
                setArrow("right");
                setTranslateX((prev) => prev - 440);
              }}
            />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
