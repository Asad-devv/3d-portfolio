import React from 'react'

import tilt from 'react-tilt'

import {motion} from 'framer-motion' 
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn,textVariant } from "../utils/motion"

const About = () => {
  return (
    <>
    <motion.div variants={textVariants()}>
    <p className={styles.sectionSubText}>
      Introduction
    </p>
    <p className={styles.sectionHeadText}>Overview. </p>
    </motion.div>
    </>
  )
}

export default About