import React, { useEffect, useState, useRef } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextSphere = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tagCloudInstance, setTagCloudInstance] = useState(null);

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
  useEffect(() => {
    function TextCloudRender
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
        radii = 140;

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

    const instance  = TagCloud(container, texts, options);
    console.log(instance)
  }, [isMobile]);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;
