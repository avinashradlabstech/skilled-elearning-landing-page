import React from "react";
import Button from "./Button";
import info from "../data/info";
import HeroPicture from "./HeroPicture";

const Hero: React.FC = () => {
  return (
    <>
      <div className="her-section flex flex-col items-center justify-center gap-100 self-stretch px-250 py-800 md:py-800 md:px-550 lg:px-1000 lg:py-800 relative overflow-x-clip">
        <div className="flex flex-col md:flex-row items-center justify-center gap-600 md:gap-300 md:min-h-[25rem] lg:gap-400 lg:w-[1120px] border border-red-700 lg:min-h-[35rem]">
          <div className="hero-text-section flex flex-col items-start gap-500 md:w-1/2 md:justify-center">
            <div className="flex flex-col items-start gap-300 lg:gap-500">
              <div className="font-sans font-extrabold leading-48 text-blue-900 text-40 lg:text-56 lg:leading-67.2">
                {info.heroData.heading}
              </div>
              <div className="font-sans font-normal leading-27 text-grey text-18 md:font-medium self-stretch">
                {info.heroData.description}
              </div>
            </div>
            <div className="flex">
              <Button
                text="Get Started"
                bgcolor="bg-gradient-orange"
                hoverColor="hover:bg-gradient-orange-hover"
              />
            </div>
          </div>
          <div className="hero-image-section flex md:w-1/2">
            <HeroPicture />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
