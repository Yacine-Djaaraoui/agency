import React, { useState, useRef, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
// import trips from "../constants";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel2,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingCircleArrowRight,
  faBuildingCircleCheck,
  faBus,
  faCalendarDays,
  faCircleCheck,
  faHotel,
  faMugSaucer,
  faUtensils,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "./Context";
import tripsAR from "@/constants/indexAR";
import tripsFR from "@/constants/index";
const TripDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Make sure these are correct
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,

          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            phone: "",

            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const { language } = useContext(Context);
  const trips = language === "AR" ? tripsAR : tripsFR;

  const { destination } = useParams();
  const filteredTrips = trips.filter((trip) => trip.id === destination);
  const tripDes = filteredTrips[0];

  return (
    <>
      <Nav2 />
      <section className="container flex flex-col justify-center items-center p-6 mt-32">
        {/* Overview Section */}
        <div className="mb-8 text-center w-full">
          <h2 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 leading-tight mb-2">
            {tripDes.country}
          </h2>
          <p className="text-lg ">{tripDes.overview}</p>
        </div>

        <div className="container p-2 h-auto flex justify-between flex-wrap gap-y-7 items-center   ">
          <div className="images  text-center  lg:max-w-[45%] ">
            <Carousel2 className="bg-secondary-gray h-fit w-full">
              <CarouselContent>
                {tripDes.image.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="     flex  items-center justify-center w-full">
                      <Card className="  flex items-center p-0 justify-center w-full">
                        <CardContent className=" p-[3px] bg-orange w-full">
                          <img src={item} alt="#" className=" w-full  h-fit " />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="" />
              <CarouselNext />
            </Carousel2>
          </div>
          <div className=" w-full  lg:max-w-[40%] grid grid-cols-2   sm:grid-cols-2 gap-y-6 md:gap-y-8  ">
            <div className="flex  items-center gap-3">
              <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                <FontAwesomeIcon
                  icon={faBuildingCircleArrowRight}
                  className="text-orange text-lg md:text-2xl"
                />
              </div>
              <div>
                <span className="text-[#666] max-sm:text-sm">
                  {language == "FR" ? "Le Départ" : "الانطلاق"}
                </span>

                <h2 className=" max-sm:text-sm font-medium">
                  {tripDes.included.DepartureCity}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                <FontAwesomeIcon
                  icon={faBuildingCircleCheck}
                  className="text-orange text-lg md:text-2xl"
                />
              </div>
              <div>
                <span className="text-[#666] max-sm:text-sm">
                  {language == "FR" ? "L'Arrivée" : "الوصول"}
                </span>

                <h2 className=" max-sm:text-sm font-medium">
                  {tripDes.included.ArrivalCity}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-3 justify- order-4">
              <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                <FontAwesomeIcon
                  icon={faHotel}
                  className="text-orange text-lg md:text-2xl"
                />
              </div>
              <div>
                <span className="text-[#666] max-sm:text-sm">
                  {language == "FR" ? "Hébergement" : "الإقامة"}
                </span>

                <h2 className=" max-sm:text-sm font-medium">
                  {tripDes.included.Accomodation}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-orange text-lg md:text-2xl"
                />
              </div>
              <div>
                <span className="text-[#666] max-sm:text-sm">
                  {language == "FR" ? "Début du voyage" : "بداية الرحلة"}
                </span>

                <h2 className=" max-sm:text-sm font-medium">
                  {tripDes.included.startDate}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-orange text-lg md:text-2xl"
                />
              </div>
              <div>
                <span className="text-[#666] max-sm:text-sm">
                  {language == "FR" ? "Fin du voyage" : "نهاية  الرحلة"}
                </span>

                <h2 className=" max-sm:text-sm font-medium">
                  {tripDes.included.EndDate}
                </h2>
              </div>
            </div>
            {tripDes.included.Transport !== "non" ? (
              <div className="flex items-center gap-1 sm:gap-3 justify- order-5">
                <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                  <FontAwesomeIcon
                    icon={faBus}
                    className="text-orange text-lg md:text-2xl"
                  />
                </div>
                <div>
                  <span className="text-[#666] max-sm:text-sm ">
                    {language == "FR" ? "Transport" : "النقل"}
                  </span>

                  <h2 className=" max-sm:text-sm font-medium">
                    {tripDes.included.Transport}
                  </h2>
                </div>
              </div>
            ) : null}
            {tripDes.included.Breakfast !== "non" ? (
              <div className="flex items-center gap-1 sm:gap-3 justify- order-6">
                <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                  <FontAwesomeIcon
                    icon={faMugSaucer}
                    className="text-orange text-lg md:text-2xl"
                  />
                </div>
                <div>
                  <span className="text-[#666] max-sm:text-sm">
                    {language == "FR" ? "Breakfast" : "فطور الصباح"}
                  </span>

                  <h2 className=" max-sm:text-sm font-medium">
                    {tripDes.included.Breakfast === "oui"
                      ? language === "FR"
                        ? "Gratuit "
                        : "مجانا"
                      : tripDes.included.Breakfast !== "non"
                      ? tripDes.included.Breakfast
                      : ""}
                  </h2>
                </div>
              </div>
            ) : null}
            {tripDes.included.lunch !== "non" ? (
              <div className="flex items-center gap-1 sm:gap-3 justify- order-7">
                <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-orange text-lg md:text-2xl"
                  />
                </div>
                <div>
                  <span className="text-[#666] max-sm:text-sm">
                    {language == "FR" ? "Déjeuner" : " الغداء"}
                  </span>

                  <h2 className=" max-sm:text-sm font-medium">
                    {tripDes.included.lunch === "oui"
                      ? language === "FR"
                        ? "Gratuit "
                        : "مجانا"
                      : tripDes.included.lunch !== "non"
                      ? tripDes.included.lunch
                      : ""}
                  </h2>
                </div>
              </div>
            ) : null}
            {tripDes.included.dinner !== "non" ? (
              <div className="flex items-center gap-1 sm:gap-3 justify- order-8">
                <div className="rounded-full h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-orange text-lg md:text-2xl"
                  />
                </div>
                <div>
                  <span className="text-[#666] max-sm:text-sm">
                    {language == "FR" ? "Dîner" : " العشاء"}
                  </span>

                  <h2 className=" max-sm:text-sm font-medium">
                    {tripDes.included.dinner === "oui"
                      ? language === "FR"
                        ? "Gratuit "
                        : "مجانا"
                      : tripDes.included.dinner !== "non"
                      ? tripDes.included.dinner
                      : ""}
                  </h2>
                </div>
              </div>
            ) : null}
            {tripDes.included.other.map((item, index) => (
              <div className="flex items-center gap-1 sm:gap-3 justify- order-8">
                <div className="rounded-full  h-8 w-8 md:h-12 md:w-12 flex justify-center items-center bg-orangeLight">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-orange text-lg md:text-2xl"
                  />
                </div>
                <div>
                  <span className="text-[#666] max-sm:text-sm"> other </span>

                  <h2 className=" max-sm:text-sm font-medium">{item}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Trip Plan Section */}
        <div className="flex w-full justify-between  flex-wrap  mt-7 lg:mt-16 ">
          <div className="mb-8 text-center w-full lg:w-[45%] ">
            <h3 className="text-4xl md:text-5xl text-center font-bold text-orange leading-tight mb-6">
              {language === "FR" ? "Plan du voyage" : "خطة الرحلة"}
            </h3>

            <div className="w-full py-6 px-2  lg:p-7 bg-orangeLight max-sm:bg-white rounded-3xl ">
              <div className="flex  flex-col justify-between items-start gap-y-8 ">
                {tripDes.plan.map((item, index) => (
                  <div key={index} className="flex  gap-3">
                    {/* Circle */}
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-orange max-sm:pt-1 text-lg md:text-2xl"
                    />
                    {/* Event */}
                    <div>
                      <div className="text-gray-800 text-opacity-85 font-medium text-lg text-start  ">
                        {item.split(":")[1]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center w-full lg:w-[45%] ">
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-8  text-orange  leading-tight   ">
              {language === "FR" ? "Réservez " : " احجز أو تواصل بنا"}
            </h1>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl w-full  ">
              <form
                ref={formRef}
                className="flex flex-col  items-start"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 w-full ">
                  <label
                    htmlFor="name"
                    className="block  text-gray-700 font-semibold mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Entrez votre nom :"
                    className="w-full p-3 border border-gray-300 rounded-md "
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Entrez votre email : "
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Entrez votre number  : "
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* <div className="mb-4 w-full">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's your subject : "
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div> */}
                <div className="mb-4 w-full">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Entrez votre message ..."
                    className="w-full p-3 border border-gray-300 rounded-md resize-none min-h-[100px]"
                    required
                  ></textarea>
                </div>
                <div className="w-full max-md:text-center">
                  <button
                    type="submit"
                    className="bg-[#f38b58] text-white py-2 px-4 rounded-md hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {loading ? "Submitting ..." : "Envoyer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripDetails;
