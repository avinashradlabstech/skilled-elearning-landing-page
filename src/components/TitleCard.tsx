import React from "react";

interface TitleCardData {
  heading: string;
}

const TitleCard: React.FC<TitleCardData> = ({ heading }) => {
  return (
    <>
      <div className="flex flex-col items-start  gap-100 self-stretch px-400 py-400 md:pt-800 md:pb-500 rounded-15 bg-gradient-orange">
       <div className="text-sans font-extrabold leading-28.8 lg:leading-38.4 self-stretch text-white text-24 lg:text-32 md:w-[16.5rem] lg:w-[18rem]"> {heading}</div>
      </div>
    </>
  );
};
export default TitleCard;
