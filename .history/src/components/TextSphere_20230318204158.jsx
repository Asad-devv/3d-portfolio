import React, { useEffect, useState, useRef } from "react";
import "./TextSphere.css";
// import TagCloud from "TagCloud";
import { SectionWrapper } from "../hoc";
const TextSphere = () => {
  const [instance, setInstance] = useState(null)
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width:500px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  // Animation settings for Text Cloud
  useEffect(() => {
    if(!instance){
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
        radii = 170;

      } else {
        radii = 350;
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

    const inst  = TagCloud(container, texts, options);
    setInstance(inst)
    // container.destroy()
    console.log(instance)
  }
  }, [ instance]);

  return (
    <>
      <div className="text-shpere -mt-20">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud text-[1.4rem] sm:text-[] "></span>
      </div>
    </>
  );
};

export default TextSphere
