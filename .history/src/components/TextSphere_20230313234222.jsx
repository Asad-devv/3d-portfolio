import React, { useEffect, useState } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  // const [tagCloudInstance, setTagCloudInstance] = useState(null);
  const [radius, setradius] = useState()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery =window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event)=>{
        setIsMobile(event.matches)
    }
    console.log(mediaQuery)

  mediaQuery.addEventListener('change', handleMediaQueryChange)
  console.log(mediaQuery)

  return ()=>{
    mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }
    
  }, [isMobile])
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
      console.log("gi")
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
    


      const instance = TagCloud(container, texts, options);
      setTagCloudInstance(instance);
    
  }, [isMobile]  );

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
