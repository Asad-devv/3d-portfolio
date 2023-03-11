import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
 import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap gap-10 justify-center'>
      {technologies.map((technology,key)=>{
        return(
            <div className="w-28 h-28 " key={key}>
                <Ball
            </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech,"")