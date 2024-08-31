import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faGem,
  faEarth,
  faCrown,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import trips from "../constants";

// TripCard Component
const TripCard: React.FC<{ trip: any }> = ({ trip }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.place}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 bg-opacity-80 text-white px-2 py-1 rounded-full flex items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
          <span className="text-xs">{trip.country}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="text-black font-semibold">{trip.days} Days</div>
          <div className="text-black font-semibold">{trip.type}</div>
        </div>
        <h3 className="text-xl font-bold mb-2">{trip.country}</h3>
        <h4 className="text-lg font-semibold mb-4">{trip.place}</h4>
        <hr className="border-gray-300 my-4" />
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">${trip.price}</div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

// TripList Component
const TripList: React.FC<{ trips: any[] }> = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {trips.map((trip, index) => (
        <TripCard key={index} trip={trip} />
      ))}
    </div>
  );
};

// CardList Component
const CardList: React.FC = () => {
  const [filterType, setFilterType] = useState<string>("All");

  const getFilteredTrips = (type: string) => {
    return type === "All" ? trips : trips.filter((trip) => trip.type === type);
  };

  const filteredTrips = getFilteredTrips(filterType);

  return (
    <section className="container mx-auto p-4">
      <div className="text-center mb-6">
        <p className="mt-4 text-center mb-4">
          <span className="text-lg md:text-xl font-semibold text-gray-700 italic">
            Get to know us
          </span>{" "}
          <br />
          <span className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Explore the world
          </span>
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPlusCircle} />
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setFilterType("All")}
            >
              ALL
            </span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faGem} />
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setFilterType("Luxury")}
            >
              Luxury
            </span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCrown} />
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setFilterType("Premium")}
            >
              Premium
            </span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faEarth} />
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setFilterType("Standard")}
            >
              Standard
            </span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <TripList trips={filteredTrips} />
      </div>
    </section>
  );
};

export default CardList;
