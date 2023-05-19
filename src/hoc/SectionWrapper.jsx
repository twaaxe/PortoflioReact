import React, { Component } from 'react'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper =(Component, idName) =>   //need the passed component and section idName 
    function HOC() {
        return (
            <motion.section>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper
