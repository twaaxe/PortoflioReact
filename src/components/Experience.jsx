import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimeline
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contetArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyles={{ background: experience.iconBg }}
    icon={
      <div>
        <img src={{ background: experience.iconBg }} alt={experience.company_name} className='w-[60] h-[60%] object-contain' />
        {experience.date}
      </div>
    }>
    <div>
      <h3>azerty</h3>
    </div>
  </VerticalTimeline>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work experience.</h2>
        </motion.div>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard key={index} experience={experience} />
            );
          })}
        </VerticalTimeline>
      </div>

      
    </>
  )
}

export default Experience
// export default SectionWrapper(Experience, "work")