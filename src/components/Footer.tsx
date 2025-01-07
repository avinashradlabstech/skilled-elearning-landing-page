import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between self-stretch px-250 py-200 xl:px-1000 xl:py-300 md:py-300 md:px-550 lg:px-1000 bg-blue-900">
        <div className="flex justify-between">
          <img className="" src="../src/assets/logo-light.svg" alt="Logo"></img>
        </div>
        <div className="flex justify-between">
          <div className="gap-100">
            <Button
              text="Get Started"
              bgcolor="bg-gradient-purple"
              hoverColor="hover:bg-gradient-purple-hover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
