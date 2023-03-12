import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({experience})=>{
    return(
  <VerticalTimelineElement contentArrowStyle={{borderRight:"7px solid #232631"}} date={experience.date} iconStyle={{background:experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.company_name} className="w-60% h-60% object-contain"/>
    </div>

  } contentStyle={{background:"#1d1836",color:"#fff"}}>
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="">{experience.company_name}</p>
    </div>

  </VerticalTimelineElement>)
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