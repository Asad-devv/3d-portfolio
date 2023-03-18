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
      <p className="text-secondary text-[16px] font-semibold m-0">{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point,index)=>{
        return(
            <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
        )
      })}

    </ul>
  </VerticalTimelineElement>)
}


const Experience = () => {
  return (
    <>
    <div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done So far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
    </div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience,index)=>{
            return(
              <ExperienceCard  key={index} experience={experience}/>
            )
          })}
        </VerticalTimeline>

      </div>

      <div className="flex justify-center items-center space-x-4">
  <a href="#" className="text-gray-500 hover:text-blue-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-linkedin fa-2x"></i>
    <p>HI</p>
  </a>
  <a href="#" className="text-gray-500 hover:text-blue-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-facebook fa-2x"></i>
  </a>
  <a href="#" className="text-gray-500 hover:text-pink-500 transform hover:scale-110 transition duration-300">
    <i className="fab fa-instagram fa-2x"></i>
  </a>
  <a href="#" className="text-gray-500 hover:text-black transform hover:scale-110 transition duration-300">
    <i className="fab fa-github fa-2x"></i>
  </a>
</div>

    </>
  )
}

export default SectionWrapper(Experience,"work")