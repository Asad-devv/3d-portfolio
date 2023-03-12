import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({experience})=>{
  <VerticalTimelineElement contentStyle={{background:"#1d1836",color:"#fff"}}>
    
  </VerticalTimelineElement>
}


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done So far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
    </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience,index)=>{
            return(
              <ExperienceCard  key={index} experience={experience}/>
            )
          })}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")