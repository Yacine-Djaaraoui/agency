import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./comp/LandingPage";
import Nav from "./comp/Nav";

function App() {
  return (
    <>
      <div className=" min-w-[300px] ">
        <Nav></Nav>
        <div className=" ">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
