import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser"
import trips from "../constants";

const TripDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
          subject: form.subject,
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
            subject: "",
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

  const { destination } = useParams();
  const filteredTrips = trips.filter((trip) => trip.country === destination);
  const tripDes = filteredTrips[0];

  return (
    <section className="container mx-auto p-6">
      {/* Overview Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#f38b58]">
          {tripDes.country} - Overview
        </h2>
        <p className="text-lg">{tripDes.overview}</p>
      </div>

      {/* Trip Plan Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#f38b58]">
          Trip Plan
        </h3>

        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-between space-x-8 p-4">
            {tripDes.plan.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle */}
                <div className="w-8 h-8 bg-[#f38b58] rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                {/* Event */}
                <div className="text-gray-700 text-center max-w-xs">
                  {item.split(":")[1]}
                </div>
              </div>
            ))}
          </div>
              </div>
              </div>

        {/* Contact Form */}
        <h1 className="text-3xl font-bold mb-4 text-[#f38b58]">
          Get in Touch
        </h1>
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg max-w-md mx-auto ml-1">
          <form
            ref={formRef}
            className="flex flex-col items-start"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name : "
                className="w-full p-3 border border-gray-300 rounded-md"
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
                placeholder="Enter your email : "
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number  : "
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4 w-full">
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
            </div>
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
                placeholder="Enter your message ..."
                className="w-full p-3 border border-gray-300 rounded-md resize-none min-h-[100px]"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-[#f38b58] text-white py-2 px-4 rounded-md hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {loading ? "Submitting ..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      
    </section>
  );
};

export default TripDetails;
