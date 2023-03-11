import React from 'react'
import Tilt  from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from "../style"
import {SectionWrapper } from "../hoc"
import {projects} from "../constants"
import { fadeIn,textVariant } from '../utils/motion'


const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Works</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Works,"")