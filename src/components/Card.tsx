import React from "react";
import Button from "./Button";

interface CardData {
  icon: string;
  title: string;
  description: string;
  buttonTxt: string;
  url: string;
  isLink: boolean;
}

const Card: React.FC<CardData> = ({
  icon,
  title,
  description,
  buttonTxt,
  url,
  isLink,
}) => {
  if (icon) {
    return (
      <>
        <div className="flex flex-col items-start">
          <div className="flex pl-8 items-start content-center gap-8 relative">
            <img
              src={icon}
              className="min-w-56 min-h-56"
              alt="image"
            ></img>
          </div>
          <div className="px-400 pt-800 pb-500 gap-100 border rounded-15 mt-[-1.75rem] w-full">
            <div className="flex flex-col items-start gap-300">
              <div className="text-sans text-20 text-blue-900 font-extrabold leading-24">
                {title}
              </div>
              <div className="text-grey font-sans text-16 font-bold md:font-medium leading-24 md:leading-27 self-stretch md:w-[16.5rem] lg:w-[18rem] md:min-h-[7.375rem] lg:text-18 lg:min-h-[7.0625rem]">
                {description}
              </div>
              <Button
                text={buttonTxt}
                bgcolor="#fff"
                color="text-pink-600"
                hoverColor="hover:text-pink-300"
                href={url}
                isLink={isLink}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col  items-start gap-100 self-stretch px-400 py-400 rounded-15 bg-gradient-orange">
        
      </div>
    </>
  );
};
export default Card;
