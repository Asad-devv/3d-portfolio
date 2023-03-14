import React, { useEffect, useState, useRef } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextSphere = () => {
  const [isMobile, setIsMobile] = useState(false);
  const tagCloudRef = useRef(null);

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

  useEffect(() => {
    const container = tagCloudRef.current;
    let radii;
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Shopify",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];

    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 10;
      } else {
        radii = 400;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    if (container) {
      TagCloud(container, texts, options);
    }
  }, [isMobile]);

  return (
    <div className="text-sphere cursor-pointer">
      {/* Set the ref to the span element */}
      <span ref={tagCloudRef} className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
