import React from "react";
import Button from "./Button";
import info from "../data/info";
const HeroNew: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-100 self-stretch px-250 py-800 md:py-800 md:px-550 lg:px-1000 lg:py-800">
        <div className="flex flex-col md:flex-row items-center justify-center gap-600 md:gap-300 lg:gap-400 max-w-[1120px] mx-auto">
          <div className="flex flex-col items-start gap-500 md:w-1/2">
            <div className="flex flex-col items-start gap-300 lg:gap-500">
              <div className="font-sans font-extrabold leading-48 text-blue-900 text-40 lg:text-56">
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
          <div className="flex md:w-1/2">
            {/* <img src="/image-hero-mobile.webp" alt=""></img> */}
            <img
              className=""
              src="/image-hero-tablet@2x.webp"
              srcSet="
              /image-hero-mobile.png 3600w,
              /image-hero-tablet.png 744w,
              /image-hero-desktop.png 1024w,
              /image-hero-desktop@2x.png 1280w,
              /image-hero-desktop@2x.png 1920w
              "
              sizes="
              (max-width: 360px) 200px,
              (max-width: 744px) 300px,
              (max-width: 1024px) 400px,
              (max-width: 1280px) 500px,
              600px
            "
              alt="image-hero"
              height="auto"
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroNew;
