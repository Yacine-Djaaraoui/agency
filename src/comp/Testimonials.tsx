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

const Testimonials = () => {
  const Testimonials = [
    {
      name: "yacine djaaraoui",
      Content:
        "Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.",
      stars: 4,
    },
    {
      name: "yacine djaaraoui",
      Content:
        "Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.",
      stars: 4,
    },
    {
      name: "yacine djaaraoui",
      Content:
        "Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.",
      stars: 4,
    },
    {
      name: "yacine djaaraoui",
      Content:
        "Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.",
      stars: 4,
    },
    {
      name: "yacine djaaraoui",
      Content:
        "Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.",
      stars: 4,
    },
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
    <div>
      <div className="container   ">
        <p className="text-lg md:text-xl font-semibold text-center text-gray-700 italic">
          Explorez La Visite
        </p>{" "}
        <h2 className="text-4xl font-font-rubik md:text-5xl text-center font-extrabold text-gray-900 leading-tight mb-2">
          {" "}
          Ce Que Disent Nos Clients.
        </h2>
        <div className="container text-center overflow-hidden  ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Testimonials.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="py-12 md:px-4">
                    <Card>
                      <CardContent className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ">
                        <div className="stars flex justify-center items-center">
                          {calculStars(item)}
                        </div>{" "}
                        <p className="mt-4 text-center">{item.Content}</p>
                        <h2 className="mt-4 font-bold ">{item.name}</h2>
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
  );
};

export default Testimonials;
