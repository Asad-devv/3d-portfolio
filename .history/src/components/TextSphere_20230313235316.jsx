import React, { useEffect, useState } from "react";
import "./TextSphere.css";
import TagCloud from "tag-cloud-canvas";

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
    let radii;
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

    if (!tagCloudInstance) {
      const container = document.querySelector(".tagcloud");
      setTagCloudInstance(TagCloud(container, [], options));
    }
  }, [isMobile, tagCloudInstance]);

  return (
    <div className="text-sphere cursor-pointer">
      {tagCloudInstance && (
        <span className="tagcloud">{tagCloudInstance.words}</span>
      )}
    </div>
  );
};

export default TextSphere;
