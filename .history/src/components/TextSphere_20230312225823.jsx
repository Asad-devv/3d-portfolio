import React, { useEffect } from "react";

import "./TextSphere.css";
// import "./TextSphere  "

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {

    const container = '.tagcloud';
    let radii;
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'Vue',
      'Nuxt',
      'NodeJS',
      'Shopify',
      'Jquery',
      'ES6',
      'GIT',
      'GITHUB',
    ];

    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 150;
      } else {
        radii = 400;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere cursor-pointer sm:h-[300px] w-[300px] font-[12px] bg-">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"> as</span>
      </div>
    </>
  );
};

export default TextShpere;
