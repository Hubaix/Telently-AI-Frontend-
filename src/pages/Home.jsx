import React from "react";
import { Hero, Features, Insights, Jobs, Interview, Working, Pricing, FAQ } from "../sections";
import { NavBar, Footer } from "../components";

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <Features />
      <Insights />
      <Jobs/>
      <Interview />
      <Working />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
