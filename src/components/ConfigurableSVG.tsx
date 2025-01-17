import React from "react";

interface ConfigurableSVGData {
  width?: number;
  height?: number;
  color?: string;
  stroke?: string;
  strokeWidth?: number;
  path: string; 
  transform?: string ; 
}

const ConfigurableSVG: React.FC<ConfigurableSVGData> = ({
  width = 56,
  height = 56,
  color = "#FFF",
  stroke,
  strokeWidth,
  path,
  transform  
}) => {
  
  
    return (
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stopColor="#FF6F48" offset="0%" />
            <stop stopColor="#F02AA6" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle fill="url(#a)" cx="28" cy="28" r="28" />
          <path
            d={path} 
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fillRule="nonzero"
            transform={transform}
          />
        </g>
      </svg>
    );
  
};

export default ConfigurableSVG;
