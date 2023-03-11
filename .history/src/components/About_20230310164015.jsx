import React from 'react'

import tilt from 'react-tilt'

import {motion} from 'framer-motion' 
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn,textVariant } from "../utils/motion"

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      Introduction
    </p>
    <p className={styles.sectionHeadText}>Overview. </p>
    </motion.div>
    <motion.p variants={fadeIn("","", 0.1,1)}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero asperiores voluptates, dolorem veritatis animi enim ratione porro sapiente reiciendis magni, facilis corrupti ea rem voluptatem quidem sunt necessitatibus aliquam et eveniet!
    </motion.p>

    </>
  )
}

export default About