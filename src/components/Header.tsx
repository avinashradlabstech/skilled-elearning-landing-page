import React from "react";
import Anchor from "../components/Anchor";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1600 self-stretch px-250 py-200 md:py-300 md:px-550 lg:px-1000 lg:py-300">
        <div className="flex justify-between items-center self-stretch lg:max-w-[70rem] w-full mx-auto">
          <div className="flex">
            <a href="#"><img className="" src="/img/logo/logo-dark.svg" alt="Logo"></img></a>
          </div>
          <div className="flex flex-col items-start gap-100">
            <Anchor text="Get Started" hoverColor="hover:bg-blue-600" href="#"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
