import React from 'react'

import {motion } from 'framer-motion'
import {styles} from "../style" 


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
          <div />
        </div>
      </div>
    </section>
  )
}

export default Hero