import React from "react";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@radix-ui/react-dialog";
import { LucideAudioWaveform } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../public/images/Alone Forest Travel.jpeg"
import img2 from "../../public/images/Best Honeymoon Places In Hawaii + Top Resorts.jpeg"
import img3 from "../../public/images/Summit Victory Pose.jpeg"
import img4 from "../../public/images/Top 15 Airbnbs in The Dolomites.jpeg"
import img5 from "../../public/images/WanderOn_ Global Travel Community,Tours, Adventure, Things To Do & More.jpeg"

const Images = () => {
    const Testimonials = [
         img1,
        img2,
        img3,
        img4,
        img5,
  ];
  const calculStars = (item) => {
    const element = [];

    for (let i = 0; i < item.stars; i++) {
      element.push(
        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
      );
    }
    return element;
  };

  return (
    <>
      <div className="container mt-24 mb-24 ">
        <h2 className=" text-2xl lg:text-4xl text-center font-bold mb-4 text-title">
          {" "}
          WHAT OUR CLIENTS SAY{" "}
        </h2>
        <div className="container text-center overflow-hidden  ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Testimonials.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="py-12 md:px-4">
                    <Card>
                      <CardContent className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ">
                       img
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
    </>
  );
};

export default Images;
