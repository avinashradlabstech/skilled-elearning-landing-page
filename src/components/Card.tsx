import React, { useState, useEffect } from "react";
import Anchor from "./Anchor";
import ConfigurableSVG from "./ConfigurableSVG";
import { extractPathsFromSVGUrl } from "../utils/helper";

interface CardData {
  icon: string ;
  iconTransform:string;
  title: string;
  description: string;
  buttonTxt: string;
  url: string;
  isLink: boolean;
}

const Card: React.FC<CardData> = ({
  icon,  
  iconTransform,
  title,
  description,
  buttonTxt,
  url,
  isLink,
}) => {
  const [paths, setPaths] = useState<string>("");

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const result = await extractPathsFromSVGUrl(icon);
        setPaths(result);
      } catch (error) {
        console.error("Error extracting paths from SVG:", error);
      }
    };

    fetchPaths();
  }, [icon]);

  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex pl-8 items-start content-center gap-8 relative">
          {paths.length > 0 ? (
            <ConfigurableSVG path={paths} transform={iconTransform}/>
          ) : (
            <p>Loading icon...</p>
          )}
        </div>
        <div className="px-400 pt-800 pb-500 gap-100 shadow-card rounded-15 mt-[-1.75rem] w-full">
          <div className="flex flex-col items-start gap-300">
            <div className="text-sans text-20 text-blue-900 font-extrabold leading-24">
              {title}
            </div>
            <div className="text-grey font-sans text-16 font-bold md:font-medium leading-24 md:leading-27 self-stretch md:w-[16.5rem] lg:w-[18rem] md:min-h-[7.375rem] lg:text-18 lg:min-h-[7.0625rem]">
              {description}
            </div>
            <Anchor
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
};

export default Card;
