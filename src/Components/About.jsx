import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6 sm:px-12  ">
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center ">

        {/* Right Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center max-w-6xl h-fit">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-0 flex justify-center items-center ">
            About Us
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed m-1 text-xl font-sans h-fit">
            Our consultancy provides expert engineering project guidance and prototype solutions in 
            <span className="text-[var(--accent-secondary)]"> Automation</span>, 
            <span className="text-[var(--accent-secondary)]"> IoT</span>, and 
            <span className="text-[var(--accent-secondary)]"> Robotics</span> for Diploma and UG engineering students. 
            <br /><br />
            We specialize in cutting-edge platforms like 
            <span className="text-[var(--accent)]"> Arduino, Raspberry Pi, ESP32, and Python</span>.
            Our vision is to bridge the gap between theoretical knowledge and practical application, helping students, 
            startups, and industries transform ideas into affordable, innovative, and functional reality. 
            With award-winning experience in <span className="text-[var(--accent-secondary)]">MSME</span> projects, 
            we serve as your dedicated technology partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
