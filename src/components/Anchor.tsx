import React from "react";
interface ButtonData {
  text: string;
  bgcolor?: string;
  hoverColor?: string;
  color?: string;
  href?: string;
  isLink?: boolean;
}
const Button: React.FC<ButtonData> = ({
  text,
  bgcolor,
  color,
  hoverColor,
  isLink,
  href,
}) => {
  if (isLink) {
    return (
      <a
        target="_blank"
        href={href}
        className={`font-sans font-bold leading-27 text-18 self-stretch  items-center justify-center cursor-pointer
           ${bgcolor || "bg-blue-900"} 
           ${hoverColor ? `${hoverColor}` : ""} 
           ${color || "text-white"} 
          `}
        >
        {text}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      href={href}
      className={`item-center justify-center gap-100 py-200 px-400 md:py-150 lg:py-[16px] lg:px-[32px] rounded-28 font-sans font-bold leading-27 text-18 cursor-pointer
      ${bgcolor || "bg-blue-900"} 
      ${hoverColor ? `${hoverColor}` : ""} 
      ${color || "text-white"} 
      `}
    >
      {text}
    </a>
  );
};

export default Button;
