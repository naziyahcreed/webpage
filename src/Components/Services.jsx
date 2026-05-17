import React from "react";


import { motion } from "framer-motion";

export default function Services() {
  const missions = [
    {
      title: "Academic Project Guidance",
      description:
        "Comprehensive support from synopsis to thesis. We guide students through component selection, circuit design, coding, and fabrication for successful submission.",
    },
    {
      title: "Prototype & Industrial Solutions",
      description:
        "Custom PCB design, 3D printing, and ruggedized prototype development for industrial automation and smart home applications.",
    },
    {
      title: "Training & Workshops",
      description:
        "Hands-on coding bootcamps and IoT workshops. We provide complete documentation and training to help you master the technology behind your project.",
    }
  ]

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-16 py-16">
      <h2 className="text-4xl font-bold text-center text-[var(--accent)] mb-12">

        Services
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto hover:shadow-xl transition-shadow duration-300">
        {missions.map((mission, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="running-border-container running-border-blue shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="running-border-content bg-[var(--bg-secondary)] text-[var(--text-primary)] p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--accent-secondary)] mb-3">
                  {mission.title}
                </h3>
                <p className="text-[var(--text-primary)] leading-relaxed">{mission.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
