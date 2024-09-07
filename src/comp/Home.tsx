import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import Testimonials from "./Testimonials";
import CardList from "./CardList";
import Images from "./Images";
import Footer from "./Footer";

const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
