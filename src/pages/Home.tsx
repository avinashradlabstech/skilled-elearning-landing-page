import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import info from "../data/info";
import Footer from "../components/Footer";
import CardCollections from "../components/CardCollections";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <CardCollections heading={info.blockData.heading} cardData={info.blockData.blockDetails}/>
      <Footer />
    </>
  );
};

export default Home;
