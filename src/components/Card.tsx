import React from "react";
import ButtonLink from "./ButtonLink";

interface CardData {
  icon: string;
  title: string;
  description: string;
  buttonTxt: string;
}

const Card: React.FC<CardData> = ({ icon, title, description, buttonTxt }) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex pl-8 items-start content-center gap-8 relative">
          <img src={icon} className="min-w-[56px] min-h-[56px]" alt='image'></img>
        </div>
        <div className="px-400 pt-800 pb-500 gap-100 border rounded-15 mt-[-1.75rem]">
          <div className="flex flex-col items-start gap-300">
            <div className="text-sans text-20 text-blue-900 font-extrabold leading-24">
              {title}
            </div>
            <div className="text-grey font-sans text-16 font-bold leading-24 self-stretch">
              {description}
            </div>
            <ButtonLink text={buttonTxt} bgcolor="#fff" color="text-pink-600" hoverColor="hover:text-pink-300"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
