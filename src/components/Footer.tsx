import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1600 self-stretch px-250 py-200 md:py-300 md:px-550 lg:px-1000 lg:py-300 bg-blue-900">
        <div className="flex justify-between items-center self-stretch max-w-[70rem] w-full mx-auto">
          <div className="flex">
            <a href="#">
              <img className="" src="/logo-light.svg" alt="Logo"></img>
            </a>
          </div>
          <div className="flex flex-col items-start gap-100">
            <Button
              text="Get Started"
              bgcolor="bg-gradient-purple"
              hoverColor="hover:bg-gradient-purple-hover"
              href="#"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
