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
      "https://i.ibb.co/t3LhGnd/Kyoto.jpg",
      "https://i.ibb.co/t3LhGnd/Kyoto.jpg",
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
      "https://i.ibb.co/b580j8V/download.jpg",
      "https://i.ibb.co/b580j8V/download.jpg",
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
      "https://i.ibb.co/TLwppF2/paris.jpg",
      "https://i.ibb.co/TLwppF2/paris.jpg",
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
