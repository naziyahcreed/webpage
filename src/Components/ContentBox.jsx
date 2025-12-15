import React from 'react'
import { motion } from "framer-motion";

const ContentBox = () => {

  const cards = [
    {
      title: "Proven Expertise",
      content:
        "With 100+ successfully delivered projects, we specialize in high-impact IoT and robotics systems with real-world utility.",
    },
    {
      title: "Affordable Solutions",
      content:
        "We offer budget-friendly hardware sourcing and cost-effective design choices tailored for student and startup budgets.",
    },
    {
      title: "End to End Support",
      content:
        "From initial concept and hardware selection to coding, debugging, and final report documentation, we are with you every step.",
    },
    {
      title: "Dedicated Student Consultation",
      content:
        "One-on-one mentorship to explain complex concepts, ensuring you can confidently present and defend your project.",
    },
    {
      title: "Future Vision",
      content:
        "We integrate AI and Machine Learning with embedded systems to build sustainable, smart solutions for the future.",
    },
    {
      title: "Team Naziyah Creed",
      content:
        "A passionate team of engineers dedicated to fostering innovation and technical excellence in the next generation.",
    },
  ];

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-10 py-10 ">
      <h1 className="text-3xl font-bold text-center text-[var(--accent)] pb-10 scroll:text-[var(--text-primary)] scroll-smooth">
        Why Choose us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className=" bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-md rounded-2xl p-6  transition-all duration-300 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-2">
              {card.title}
            </h2>
            <p className="text-[var(--text-primary)] leading-relaxed">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ContentBox
