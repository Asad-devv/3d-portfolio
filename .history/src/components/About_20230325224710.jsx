import React from "react";

import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TextSphere from "./TextSphere";
import LazyLoad from "react-lazy-load";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="hover:scale-10 transition xs:w-[250px] w-full  ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    
      <div className=" 	">
        <p data-aos="fade-down" className={styles.sectionSubText}>
          Introduction
        </p>
        <p data-aos="fade-up" className={styles.sectionHeadText}>
          Overview.{" "}
        </p>
      </div>
      
      <div className="flex bg-purplae-900 flex-col md:flex-row ">
      <LazyLoad>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I am a second-year student studying computer science and information
          technology. My passion lies in front-end web development, building
          user-friendly, efficient, and optimized React applications from
          scratch.
          <br />
          <br /> My skills include proficiency in HTML, CSS, JavaScript,
          Reactjs, Bootstrap, Tailwind, C++, C, Python, OOP, and DSA. I have a
          solid understanding of object-oriented programming concepts and data
          structures and algorithms.
          <br />
          <br />
          As a quick learner, I am eager to embrace new technologies and
          frameworks to improve my skills as a web developer. I am excited to
          contribute to impactful projects in computer science and information
          technology.
        </p>
        </LazyLoad>
        <TextSphere />
      </div>


      {/* <div><h1>My </h1> */}

      <LazyLoad>
      <div className=" flex mt-10 flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
      </LazyLoad>
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(About, "about", "bg-gradient-to-r from-c via-purple-900 to-custom-bg-color");
