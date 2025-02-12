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
    srcSet = "/img/hero/mobile/image-hero-mobile.webp, /img/hero/mobile/image-hero-mobile@2x.webp 2x";
    mediaQuery = "(max-width: 768px)";
  } else if (windowWidth <= 992) {
    srcSet = "/img/hero/tablet/image-hero-tablet.webp, /img/hero/tablet/image-hero-tablet@2x.webp 2x";
    mediaQuery = "(max-width: 992px)";
  } else {
    srcSet = "/img/hero/desktop/image-hero-desktop.webp, /img/hero/desktop/image-hero-desktop@2x.webp 2x";
    mediaQuery = "all";
  }

  return (
    <picture className="hero-picture md:absolute md:-z-1 md:max-w-[39.0625rem] md:top-[-7rem] md:right-[-12.25rem] lg:top-[-14.375rem] lg:max-w-[63.8125rem] lg:right-[-17.5625rem] xl:right-auto xl:max-w-[62rem]">
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
