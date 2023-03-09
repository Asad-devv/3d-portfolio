import React from 'react'

import {motion } from 'framer-motion'
import {styles} from "../style" 


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} inset-0 absolute`}></div>
    </section>
  )
}

export default Hero