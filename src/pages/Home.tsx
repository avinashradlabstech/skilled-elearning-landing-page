import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
//import TitleCard from "../components/TitleCard";
import Card from "../components/Card";
import info from "../data/info";
import Footer from "../components/Footer";
import TitleCard from "../components/TitleCard";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="courses-section flex flex-col pt-800 pb-1000 px-250 md:px-550 md:pb-1800 content-center items-center gap-100 self-stretch gradient-white ">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-400 md:gap-300 max-w-[1120px] mx-auto">
          {info.blockData.heading && (
            <TitleCard heading={info.blockData.heading} />
          )}
          {info.blockData.blockDetails.map((data, index) => (
            <div key={index}>
              <Card
                icon={data.icon}
                title={data.title}
                description={data.description}
                buttonTxt={data.buttonTxt}
                url={data.url}
                isLink={true}
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
