import React from "react";
interface ButtonData {
  text: string;
  bgcolor?: string;
  hoverColor?: string;
  color?: string;
  onClick?: () => void;
}
const ButtonLink: React.FC<ButtonData> = ({
  text,
  bgcolor,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <a
      onClick={onClick}
      
      className={`font-sans font-bold leading-27 text-18 self-stretch  items-center justify-center cursor-pointer
      ${bgcolor || "bg-blue-900"} 
      ${hoverColor ? `${hoverColor}` : ""} 
      ${color || "text-white"} 
      `}     
    >
      {text}
    </a>
  );
};

export default ButtonLink;
