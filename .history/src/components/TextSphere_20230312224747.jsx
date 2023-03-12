import React, { useEffect } from "react";

import "./TextSphere.css";
// import "./TextSphere  "

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Material UI",
        "npm",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "three",
      ];

      const options = {
        radius: 400,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere cursor-pointer">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"> as</span>
      </div>
    </>
  );
};

export default TextShpere;
