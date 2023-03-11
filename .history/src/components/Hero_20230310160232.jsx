import React from 'react'

import {motion } from 'framer-motion'
import {styles} from "../style" 
 import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
          <div className=" w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm<span className="text-[#915eff]"> Asad shaikh</span> </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}> kabhi socha bhi to ye gumaan hua kai <br className="sm:block hidden"/> haan kahin to pohanchu ga</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="">

      </div>
    </section>
  )
}

export default Hero