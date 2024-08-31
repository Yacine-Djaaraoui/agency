import React from "react";
import LandingPage from "./LandingPage";
import Testimonials from "./Testimonials";
import CardList from "./CardList";
import Images from "./Images";

const Home = () => {
  return (
    <>
      <LandingPage />
      <CardList />
      <Images />
      <Testimonials />
    </>
  );
};

export default Home;
