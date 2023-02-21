import React from "react";
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import Faq from "../components/faq/Faq";
import Pricing from "../components/pricing/pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
