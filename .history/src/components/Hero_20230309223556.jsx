import React from 'react'

import {motion } from 'framer-motion'
import {styles} from "../style" 


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto`}></div>
    </section>
  )
}

export default Hero