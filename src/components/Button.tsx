import React from "react";
interface ButtonData {
  text: string;
  bgcolor?: string;
  hoverColor?: string;
  color?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonData> = ({
  text,
  bgcolor,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`item-center justify-center gap-100 py-200 px-400 md:py-150 md:h-12 rounded-28 font-sans font-bold leading-27 text-18 
      ${bgcolor || "bg-blue-900"} 
      ${hoverColor ? `${hoverColor}` : ""} 
      ${color || "text-white"} 
      `}     
    >
      {text}
    </button>
  );
};

export default Button;
