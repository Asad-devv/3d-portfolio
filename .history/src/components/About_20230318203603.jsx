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
      <div className=" 	" >
        <p data-aos="fade-down"  className={styles.sectionSubText}>Introduction</p>
        <p data-aos="fade-up"  className={styles.sectionHeadText}>Overview. </p>
      </div>
      <div className="flex bg-purplae-900 flex-col md:flex-row ">
      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]  "
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum laborum, nulla consectetur deserunt eligendi sed quibusdam incidunt non soluta dignissimos minima ratione accusamus commodi eaque maiores, ab<br/><br/> aliquid! Rerum amet sit delectus distinctio expedita, similique odio sint voluptates explicabo optio eligendi numquam hic magnam voluptatum. Ipsa quasi illum accusamus veritatis soluta enim nesciunt, numquam <br/><br/>aperiam magnam doloribus dolores. Provident dolor, nulla velit voluptate quia architecto iste voluptatibus consequuntur quam tempora aliquid odit assumenda, sint vitae officiis reprehenderit fugiat aspernatur excepturi <br/><br/> commodi? Adipisci ipsum maiores provident, sit magni temporibus ratione laborum minima numquam dolore aut recusandae accusamus quam mollitia sed!
      </p>
    
      <TextSphere/>
      
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about","bg-blue-900");
