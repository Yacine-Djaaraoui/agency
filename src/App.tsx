import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./comp/Home";
import TripDetails from "./comp/TripDetails";
function App() {
  return (
    <>
      <div className=" min-w-[300px] ">
        <div className=" h-auto ">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip/:destination" element={<TripDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
