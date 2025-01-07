import React from "react";
import Button from "../components/Button";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between self-stretch px-250 py-200 xl:px-1000 xl:py-300 md:py-300 md:px-550 lg:px-1000 ">
        <div className="flex justify-between">
          <img className="" src="/logo-dark.svg" alt="Logo"></img>
        </div>
        <div className="flex justify-between">
          <div className="gap-100">
            <Button text="Get Started" hoverColor="hover:bg-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
