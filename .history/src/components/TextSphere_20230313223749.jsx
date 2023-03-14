import React, { useEffect, useState } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  const [tagCloudInstance, setTagCloudInstance] = useState(null);
  const [radius, setradius] = useState()
  useEffect(() => {
    const container = ".tagcloud";
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
        radii = 150;
        setradius(150)
        setTagCloudInstance(false)
      } else {
        radii = 400;
        setTagCloudInstance(false)
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


      const instance = TagCloud(container, texts, options);
      setTagCloudInstance(instance);
    }
  }, [tagCloudInstance]);

  return (
    <>
      <div className="text-shpere cursor-pointer">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud "> </span>
      </div>
    </>
  );
};

export default TextShpere;
