import React from 'react'
import Tilt  from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from "../style"
import {SectionWrapper } from "../hoc"
import {projects} from "../constants"
import { fadeIn,textVariant } from '../utils/motion'


const ProjectCard = ({index,name,description,tags,image,source_code_link})=>{
  return( 
    <motion.div>
      test
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Works</p>
        <p className={styles.sectionHeadText}>Projects.</p>
    </motion.div>
    <div className="w-full flex">
      <motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'  variants={fadeIn("","", 0.1,1 )}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum recusandae veniam optio ducimus beatae nam officiis nisi quod, debitis reiciendis eligendi officia ullam repellendus cumque saepe reprehenderit a nulla molestiae. Odio voluptatum reprehenderit rem voluptate rerum distinctio delectus blanditiis itaque sequi tempore adipisci, vel doloremque voluptatibus, soluta autem pariatur cum, voluptatem vero!
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7" >
      {projects.map((project,index)=>{
        return(
          <ProjectCard key={index} {...project} index={index} />
        )
      })}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"")