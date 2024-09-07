import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./comp/Home";
import TripDetails from "./comp/TripDetails";
import Footer from "./comp/Footer";
import { Context } from "./comp/Context";
function App() {
  const { language } = useContext(Context);

  return (
    <>
      <div className={` min-w-[300px]  ${language === "AR" ?" font-font-family " : "font-font-rubik"} `}>
        <div className=" h-auto ">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip/:destination" element={<TripDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
