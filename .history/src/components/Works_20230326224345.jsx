import React from 'react'
import Tilt  from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from "../style"
import {SectionWrapper } from "../hoc"
import {projects} from "../constants"
import { fadeIn,textVariant } from '../utils/motion'
import { github } from "../assets";
import LazyLoad from 'react-lazy-load'

const ProjectCard = ({index,name,description,tags,image,source_code_link})=>{
  return( 
    <div variants={fadeIn("up", "spring", index*0.75, 0.75)}
    data-aos="fade-up"  
    data-aos-duration={`${750*index}`}

    >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full object-contain h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-[95%] object-fill rounded-2xl'
        />

        <div className='absolute inset-1  flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </div>
  )
}

const Works = () => {
  return (
    <>

       <div  variants={textVariant()}>
    <p className={styles.sectionSubText}>My Works</p>
        <p className={styles.sectionHeadText}>Projects.</p>
    </div>
    <div className="w-full flex">
      <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'  variants={fadeIn("","", 0.1,1 )}>
      As a React developer, my portfolio showcases my ability to create efficient and elegant user interfaces. I specialize in building custom components, implementing complex state management, and optimizing performance. Each project tells a unique story, highlighting my innovative solutions to real-world problems. I am dedicated to delivering high-quality work and excited to continue growing as a developer.
      </p>
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

export default SectionWrapper(Works,"","bg-gradient-to-r from-gray-900 via-blue-900 to-custom-bg-color")