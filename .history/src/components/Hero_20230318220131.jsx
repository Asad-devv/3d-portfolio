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
        <div className="flex justify-center items-center">
  <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:animate-bounce mx-4">
    <i class="fa fa-linkedin-square text-2xl"></i>
  </a>
  <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:animate-bounce mx-4">
  <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>

    <i class="fab fa-facebook-f text-2xl"></i>
  </a>
  <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:animate-bounce mx-4">
    <i class="fab fa-instagram text-2xl"></i>
  </a>
  <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out transform hover:animate-bounce mx-4">
    <i class="fab fa-github text-2xl"></i>
  </a>
</div>

        <div>
          <h1 className={`${styles.heroHeadText}  text-white`}>Hi , I'm<span className="text-[#915eff]"> Asad shaikh</span> </h1>
        <p className={`${styles.heroSubText} font-black	 mt-2 text-white-100`}> <Typewriter words={["UI/UX Designer","Frontend Developer","React Developer"]} className="font-black" cursor={true} typeSpeed={120} loop={true}/> <br className="sm:block hidden"/> </p>
        </div>
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