import React, { useEffect, useState } from "react";
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

  useEffect(() => {
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
    const options = {
      radius: isMobile ? 140 : 400,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 435,
      keep:true,
      size:1,
    };

    const instance  = TagCloud(container, texts, options);
    setTagCloudInstance(instance[0]);
  }, [isMobile]);

  return (
    <>
      <div className="text-shpere bg-tertiary">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud  "></span>
      </div>
    </>
  );
};

export default TextSphere;
