import React, { useState, useEffect } from "react";

const HeroPicture: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let srcSet: string, mediaQuery: string;

  if (windowWidth <= 768) {
    srcSet = "/image-hero-mobile.webp, /image-hero-mobile@2x.webp 2x";
    mediaQuery = "(max-width: 768px)";
  } else if (windowWidth <= 992) {
    srcSet = "/image-hero-tablet.webp, /image-hero-tablet@2x.webp 2x";
    mediaQuery = "(max-width: 992px)";
  } else {
    srcSet = "/image-hero-desktop.webp, /image-hero-desktop@2x.webp 2x";
    mediaQuery = "all";
  }

  return (
    <picture className="hero-picture md:absolute md:-z-1 md:max-w-[625px]  md:top-[-112px] md:right-[-196px] lg:top-[-166px] lg:max-w-[772px] lg:right[-153px]">
      <source srcSet={srcSet} type="image/webp" media={mediaQuery} />
      <source
        srcSet={srcSet.replace(".webp", ".png")}
        type="image/png"
        media={mediaQuery}
      />
      <img
        src={srcSet.replace(".webp", ".png")}
        alt="hero-image"
        className="w-full object-cover"
      />
    </picture>
  );
};

export default HeroPicture;
