import React from "react";
import TitleCard from "./TitleCard";
import Card from "./Card";

interface CardData {
  icon: string;
  iconType: string;
  iconTransform: string;
  title: string;
  description: string;
  buttonTxt: string;
  url: string;
}

interface CardCollectionData {
  heading: string;
  cardData: CardData[];
}

const CardCollections: React.FC<CardCollectionData> = ({
  heading,
  cardData,
}) => {
  return (
    <div className="courses-section flex flex-col pt-800 pb-1000 px-250 md:px-550 md:pb-1800 content-center items-center gap-100 lg:gap-700 self-stretch gradient-white ">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-400 md:gap-300 lg:gap-y-700 lg:max-w-[70rem] mx-auto items-stretch w-full">
        {heading && <TitleCard heading={heading} />}
        {cardData.map((data, index) => (
          <div key={index}>
            <Card
              icon={data.icon}
              iconTransform={data.iconTransform}
              title={data.title}
              description={data.description}
              buttonTxt={data.buttonTxt}
              url={data.url}
              isLink={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCollections;
