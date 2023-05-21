import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'

import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, speed: 450, scale: 1 }} className='bg-tertiary rounded-[20px] justify-evenly flex flex-col items-center py-5 px-12 min-h-[280px]'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-center  font-bold text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nemo id sapiente quaerat, illo in labore porro aliquam sit suscipit omnis et voluptatum quasi ea assumenda doloremque tempora. Laudantium, consequatur?

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}



export default SectionWrapper(About, "about"); 