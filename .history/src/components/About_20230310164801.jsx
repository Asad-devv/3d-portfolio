import React from "react";

import tilt from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt>
      
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview. </p>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        quaerat non eaque? Maiores esse unde harum dolores iure incidunt ea
        voluptatibus debitis enim, dolor magni commodi reprehenderit? Earum
        cumque consequatur autem tempore quidem natus explicabo ipsum saepe
        reiciendis sit, enim reprehenderit quis quia nobis fuga. Illum fugit
        nihil cum adipisci!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, key) => {
          return <ServiceCard key={service.title} inde x={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default About;
