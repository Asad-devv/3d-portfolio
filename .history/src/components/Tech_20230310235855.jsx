import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
 import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 justify-center'>
      {technologies.map(()=>{
        
      })}
    </div>
  )
}

export default SectionWrapper(Tech,"")