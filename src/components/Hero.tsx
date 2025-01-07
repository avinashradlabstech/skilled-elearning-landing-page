import React from "react";
import Button from "./Button";
import info from "../data/info";
const Hero: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-800 px-250 md:px-550 lg:px-1000 items-center justify-center self-stretch gap-600 lg:gap-400">
        <div className="flex flex-col gap-300 md:w-1/2">
          <div className="font-sans font-extrabold leading-48 text-blue-900 text-40 lg:text-56">
            {info.heroData.heading}
          </div>
          <div className="font-sans font-normal leading-27 text-grey text-18 md:font-medium self-stretch">
            {info.heroData.description}
          </div>
          <div className="pt-200">
            <Button
              text="Get Started"
              bgcolor="bg-gradient-orange"
              hoverColor="hover:bg-gradient-orange-hover"
              
            />
          </div>
        </div>
        <div className="flex md:w-1/2">
          {/* <img src="../src/assets/image-hero-mobile.webp" alt=""></img> */}
          <img
            className=""
            src="../src/assets/image-hero-tablet@2x.webp"
            srcSet="
              ../src/assets/image-hero-mobile.png 3600w,
              ../src/assets/image-hero-tablet.png 744w,
              ../src/assets/image-hero-desktop.png 1024w,
              ../src/assets/image-hero-desktop@2x.png 1280w,
              ../src/assets/image-hero-desktop@2x.png 1920w
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
    </>
  );
};

export default Hero;
