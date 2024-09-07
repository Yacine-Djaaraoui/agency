import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faGem,
  faEarth,
  faCrown,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import tripsFR from "../constants/index";
import tripsAR from "../constants/indexAR";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import tripsFR from "@/constants";
import { Languages } from "lucide-react";
// TripCard Component
const TripCard: React.FC<{ trip: any }> = ({ trip }) => {
  const { language } = useContext(Context);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg ">
      {/* Image Section */}
      <div className="relative">
        <img
          src={trip.image[0]}
          alt={trip.place}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-orange  text-white px-2 py-1 rounded-full flex items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
          <span className="text-xs">{trip.country}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between mb-4">
          {language === "FR" ? (
            <div className="text-black font-semibold">{trip.days} Jours</div>
          ) : (
            <div className="text-black font-semibold flex items-center gap-1">
              {" "}
              <span> أيام </span>
              <span className="font-semibold font-font-rubik">
                {" "}
                {trip.days}{" "}
              </span>
            </div>
          )}
          <div className="text-black font-semibold">{trip.type}</div>
        </div>
        <h3 className="text-xl font-bold mb-2">{trip.country}</h3>
        <h4 className="text-lg font-semibold mb-4">{trip.place}</h4>
        <hr className="border-gray-300 my-4" />
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">{trip.price}DA</div>
          <Link to={`/trip/${trip.id}`}>
            {language === "FR" ? (
              <button className="bg-orange text-white py-2 px-4 rounded-md hover:bg-black">
                Détails
              </button>
            ) : (
              <button className="bg-orange text-white py-2 px-4 rounded-md hover:bg-black">
                التفاصيل
              </button>
            )}
          </Link>
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
  const { language } = useContext(Context);
  const trips = language === "AR" ? tripsAR : tripsFR;
  const getFilteredTrips = (type: string) => {
    return type === "All" ? trips : trips.filter((trip) => trip.type === type);
  };

  const filteredTrips = getFilteredTrips(filterType);

  return (
    <section className="container mx-auto p-4 mt-16 ">
      <div className="text-center mb-6">
        <p className="mt-4 text-center mb-5">
          <span className="text-lg md:text-xl font-semibold text-gray-700 italic font-font-family">
            الرحلات المتاحة
          </span>{" "}
          <br />
          <span className="text-4xl md:text-5xl font-extrabold font-font-rubik text-gray-900 leading-tight ">
            Voyages disponibles
          </span>
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
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
              onClick={() => setFilterType("Luxe")}
            >
              Luxe
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
