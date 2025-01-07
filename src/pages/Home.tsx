import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
//import TitleCard from "../components/TitleCard";
import Card from "../components/Card";
import info from "../data/info";
import Footer from "../components/Footer";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col pt-800 pb-1000 px-250 md:px-550 content-center items-center gap-100 self-stretch gradient-white ">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-400 md:gap-300">
          {info.blockData.blockDetails.map((data, index) => (
            <div key={index}>
              <Card
                icon={data.icon}
                title={data.title}
                description={data.description}
                buttonTxt={data.buttonTxt}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
