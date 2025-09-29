// Define the interface for the included properties
interface Included {
  DepartureCity: string;
  ArrivalCity: string;
  startDate: string;
  EndDate: string;
  Accomodation: string;
  Transport: string;
  Breakfast: string;
  lunch: string;
  dinner: string;
  other: string[];
}

// Define the interface for each trip
interface Trip {
  id: string; // Unique identifier for each trip
  country: string;
  place: string;
  days: number;
  type: string;
  image: string[];
  price: number; // price in USD
  overview: string;
  included: Included;
  plan: string[];
}

// Define the trips array with the type of Trip[]
const tripsFR: Trip[] = [
  {
    id: "1", // Unique ID
    country: "Japon",
    place: "Kyoto",
    days: 7,
    type: "Premium",
    image: [
      "https://tcsvoyages.ch/wp-content/uploads/2019/10/shutterstock-2407392777-pagode-de-chureito-attraction-touristique-du-japon-celebre-mtfuji-1620x1080.jpg",
      "https://www.nippon.com/fr/ncommon/contents/japan-data/1499242/1499242.jpg",
    ],
    price: 2500, // price in USD
    overview:
      "Découvrez la beauté de Kyoto avec un circuit complet de 7 jours couvrant les meilleurs endroits.",
    included: {
      DepartureCity: "Alger",
      ArrivalCity: "Paris",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "Hôtel 5 étoiles",
      Transport: "gratuit pour tous les jours",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "Jour 1 : Arrivée et visite de la ville",
      "Jour 2 : Visite des monuments historiques",
      "Jour 3 : Explorer les marchés locaux",
      "Jour 4 : Activités d'aventure",
      "Jour 5 : Détente à la plage",
      "Jour 6 : Immersion culturelle",
      "Jour 7 : Départ et retour à la maison",
    ],
  },
  {
    id: "2", // Unique ID
    country: "Italie",
    place: "Côte Amalfitaine",
    days: 5,
    type: "Luxe",
    image: [
      "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
      "https://www.planetware.com/photos-large/I/italy-colosseum-day.jpg",
    ],
    price: 3200, // price in USD
    overview:
      "Découvrez la beauté de la Côte Amalfitaine avec un circuit complet de 7 jours couvrant les meilleurs endroits.",
    included: {
      DepartureCity: "Alger",
      ArrivalCity: "Paris",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "Hôtel 5 étoiles",
      Transport: "gratuit pour tous les jours",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "Jour 1 : Arrivée et visite de la ville",
      "Jour 2 : Visite des monuments historiques",
      "Jour 3 : Explorer les marchés locaux",
      "Jour 4 : Activités d'aventure",
      "Jour 5 : Détente à la plage",
      "Jour 6 : Immersion culturelle",
      "Jour 7 : Départ et retour à la maison",
    ],
  },
  {
    id: "3", // Unique ID
    country: "France",
    place: "Paris",
    days: 4,
    type: "Premium",
    image: [
      "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/",
      "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/02/Louvre-Paris.jpg",
    ],
    price: 2200, // price in USD
    overview:
      "Découvrez la beauté de Paris avec un circuit complet de 7 jours couvrant les meilleurs endroits.",
    included: {
      DepartureCity: "Alger",
      ArrivalCity: "Paris",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "Hôtel 5 étoiles",
      Transport: "gratuit pour tous les jours",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "Jour 1 : Arrivée et visite de la ville",
      "Jour 2 : Visite des monuments historiques",
      "Jour 3 : Explorer les marchés locaux",
      "Jour 4 : Activités d'aventure",
      "Jour 5 : Détente à la plage",
      "Jour 6 : Immersion culturelle",
      "Jour 7 : Départ et retour à la maison",
    ],
  },
];

export default tripsFR;
