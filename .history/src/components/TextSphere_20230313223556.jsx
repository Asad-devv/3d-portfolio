import React, { useEffect, useState } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  const [tagCloudInstance, setTagCloudInstance] = useState(null);

  useEffect(() => {
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
