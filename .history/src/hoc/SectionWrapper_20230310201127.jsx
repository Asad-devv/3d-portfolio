import React from 'react'
import {motion }from "framer-motion"

import { styles } from '../style'
import { staggerContainer } from '../utils/motion'



const SectionWrapper = (Component,idName) => 
function HOC(){
        return(
            <motion.section variants={staggerContainer()}
            initial="hidden" while> 
                <Component/>
            </motion.section>
        )
}

export default SectionWrapper