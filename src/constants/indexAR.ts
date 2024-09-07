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
const tripsAR: Trip[] = [
  {
    id: "1", // Unique ID
    country: "اليابان",
    place: "كيوتو",
    days: 7,
    type: "فاخر",
    image: [
      "https://i.ibb.co/t3LhGnd/Kyoto.jpg",
      "https://i.ibb.co/t3LhGnd/Kyoto.jpg",
    ],
    price: 2500, // price in USD
    overview: `اكتشف جمال كيوتو مع جولة شاملة لمدة 7 أيام تغطي أفضل الأماكن.`,
    included: {
      DepartureCity: "الجزائر",
      ArrivalCity: "باريس",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "فندق 5 نجوم",
      Transport: "مجاناً لجميع الأيام",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "اليوم 1: الوصول وجولة في المدينة",
      "اليوم 2: زيارة المعالم التاريخية",
      "اليوم 3: استكشاف الأسواق المحلية",
      "اليوم 4: الأنشطة المغامرة",
      "اليوم 5: الاسترخاء على الشاطئ",
      "اليوم 6: التعمق في الثقافة",
      "اليوم 7: المغادرة والعودة إلى الوطن",
    ],
  },
  {
    id: "2", // Unique ID
    country: "إيطاليا",
    place: "ساحل أمالفي",
    days: 5,
    type: "فاخر",
    image: [
      "https://i.ibb.co/b580j8V/download.jpg",
      "https://i.ibb.co/b580j8V/download.jpg",
    ],
    price: 3200, // price in USD
    overview: `اكتشف جمال ساحل أمالفي مع جولة شاملة لمدة 7 أيام تغطي أفضل الأماكن.`,
    included: {
      DepartureCity: "الجزائر",
      ArrivalCity: "باريس",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "فندق 5 نجوم",
      Transport: "مجاناً لجميع الأيام",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "اليوم 1: الوصول وجولة في المدينة",
      "اليوم 2: زيارة المعالم التاريخية",
      "اليوم 3: استكشاف الأسواق المحلية",
      "اليوم 4: الأنشطة المغامرة",
      "اليوم 5: الاسترخاء على الشاطئ",
      "اليوم 6: التعمق في الثقافة",
      "اليوم 7: المغادرة والعودة إلى الوطن",
    ],
  },
  {
    id: "3", // Unique ID
    country: "فرنسا",
    place: "باريس",
    days: 4,
    type: "فاخر",
    image: [
      "https://i.ibb.co/TLwppF2/paris.jpg",
      "https://i.ibb.co/TLwppF2/paris.jpg",
    ],
    price: 2200, // price in USD
    overview: `اكتشف جمال باريس مع جولة شاملة لمدة 7 أيام تغطي أفضل الأماكن.`,
    included: {
      DepartureCity: "الجزائر",
      ArrivalCity: "باريس",
      startDate: "09/08/2024",
      EndDate: "18/08/2024",
      Accomodation: "فندق 5 نجوم",
      Transport: "مجاناً لجميع الأيام",
      Breakfast: "oui",
      lunch: "non",
      dinner: "oui",
      other: [],
    },
    plan: [
      "اليوم 1: الوصول وجولة في المدينة",
      "اليوم 2: زيارة المعالم التاريخية",
      "اليوم 3: استكشاف الأسواق المحلية",
      "اليوم 4: الأنشطة المغامرة",
      "اليوم 5: الاسترخاء على الشاطئ",
      "اليوم 6: التعمق في الثقافة",
      "اليوم 7: المغادرة والعودة إلى الوطن",
    ],
  },
];

export default tripsAR;
