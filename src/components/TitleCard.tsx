import React from "react";
import Button from "./Button";
//import Info from "../data/info";
interface CardData {
  icon: string;
  title: string;
  description: string;
  buttonTxt: string;
}

const TitleCard: React.FC<CardData> = ({
  icon,
  title,
  description,
  buttonTxt,
}) => {
  return (
    <>
      <div className="px-400 pt-800 pb-500">
        <div>
          <img src={icon}></img>
        </div>
        <div className="gap-300">
          <div className="text-sans text-20 font-extrabold leading-24">
            {title}
          </div>
          <div>{description}</div>
        </div>
        <div>
          <Button text={buttonTxt} />
        </div>
      </div>
    </>
  );
};
export default TitleCard;
