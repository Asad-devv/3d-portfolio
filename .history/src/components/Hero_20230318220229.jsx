import React from 'react'

import {motion } from 'framer-motion'
import {styles} from "../style" 
 import { ComputersCanvas } from "./canvas";
 import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
          <div className=" w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
       
        <div>
          <h1 className={`${styles.heroHeadText}  text-white`}>Hi , I'm<span className="text-[#915eff]"> Asad shaikh</span> </h1>
        <p className={`${styles.heroSubText} font-black	 mt-2 text-white-100`}> <Typewriter words={["UI/UX Designer","Frontend Developer","React Developer"]} className="font-black" cursor={true} typeSpeed={120} loop={true}/> <br className="sm:block hidden"/> </p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4">
  <a href="#" className="text-gray-500 hover:text-blue-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-linkedin fa-2x"></i>
  </a>
  <a href="#" className="text-gray-500 hover:text-blue-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-facebook fa-2x"></i>
  </a>
  <a href="#" className="text-gray-500 hover:text-pink-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-instagram fa-2x"></i>
  </a>
  <a href="#" className="text-gray-500 hover:text-black transform hover:scale-110 transition duration-300">
    <i className="fab fa-github fa-2x"></i>
  </a>
</div>

      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
            <motion.div 
            animate={{y:[0,24,0]}}
            transition ={{
              duration :1.5,
              repeat:Infinity,
              repeatType : 'loop'
            }}
            className = "w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero