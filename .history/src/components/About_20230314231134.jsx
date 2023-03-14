import React from "react";

import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TextSphere from "./TextSphere";




const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full  ">
      <div data-aos="fade-up"     data-aos-duration="1000"
 className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" variants={fadeIn("right" , "spring",0.5*index,0.75)}>
<div options={{max:45,scale:1,speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
  <img src={icon} alt={title} className="w-16 h-16 object-contain" />
    <h3 className="text-white text-[20px] font-bold text-center ">{title}</h3>
</div>
      </div>

    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview. </p>
      </div>
      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        quaerat non eaque? Maiores esse unde harum dolores iure incidunt ea
        voluptatibus debitis enim, dolor magni commodi reprehenderit? Earum
        cumque consequatur autem tempore quidem natus explicabo ipsum saepe
        reiciendis sit, enim reprehenderit quis quia nobis fuga. Illum fugit
        nihil cum adipisci!
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
      <div>
        <T
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
