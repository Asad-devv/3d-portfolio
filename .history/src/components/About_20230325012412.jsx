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
    <Tilt className="hover:scale-10 transition xs:w-[250px] w-full  ">
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
        As a second-year computer science and information technology student at Ned University of Engineering and Technology, I am constantly seeking new challenges and learning opportunities to expand my professional horizons. I am passionate about web development, and have honed my skills in front-end development to become proficient in creating complete React applications from scratch.

<br/><br/> My skillset includes proficiency in HTML, CSS, JavaScript, Reactjs, Bootstrap, Tailwind, C++, C, Python, OOP, and DSA. I have a solid understanding of object-oriented programming concepts and have worked extensively with data structures and algorithms. I am constantly looking to expand my knowledge and stay up-to-date with the latest web development trends and technologies.

<br/><br/>aperiam magnam doloribus dolores. Provident dolor, nulla velit voluptate quia architecto iste voluptatibus consequuntur quam tempora aliquid odit assumenda, sint vitae officiis reprehenderit fugiat aspernatur exceptur
      </p>
    
      <TextSphere/>
      
      </div>

     {/* <div><h1>My </h1> */}

      <div className=" flex mt-10 flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
        </div>
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(About,"about","bg-gray-900");
