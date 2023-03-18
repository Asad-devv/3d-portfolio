import React, { useEffect, useState, useMemo } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextSphere = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Animation settings for Text Cloud
  const tagCloudInstance = useMemo(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];
    let radii;
    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 160;

      } else {
        radii = 400;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 435,
      keep:true,
      size:1,
    };

    return TagCloud(container, texts, options);
  }, [isMobile]);

  return (
    <>
      <div className="text-shpere bg-tertiary">
        {/* span tag className must be "tagcloud"  */}
        <span className=`tagcloud ` ></span>
      </div>
    </>
  );
};

export default TextSphere;
