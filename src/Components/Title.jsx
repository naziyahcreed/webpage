import React from 'react'
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className='bg-[var(--bg-primary)] p-4 flex justify-center items-center text-center' >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-medium xl-leading-[64px] max-w-5xl text-[var(--text-primary)]'>
        INNOVATIVE IoT && ROBOTICS <span className='text-[var(--accent)] font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[84px]  xl-leading-[95px] max-w-5xl'>PROJECTS</span> FOR FINAL YEAR STUDENTS
      </motion.h1>
    </div>
  )
}

export default Title
