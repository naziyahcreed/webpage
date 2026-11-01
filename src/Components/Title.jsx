import React from 'react';
import { motion } from "framer-motion";
import { Sparkles } from 'lucide-react';

const Title = () => {
  return (
    <div className='bg-[var(--bg-primary)] pt-6 pb-4 px-4 flex flex-col justify-center items-center text-center'>
      {/* Official Enterprise Tagline Pill */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(249,170,51,0.15)]"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Innovate • Engineer • Educate • Transform</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className='text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-semibold xl:leading-[68px] max-w-6xl text-[var(--text-primary)]'>
        <span className='golden-text font-black text-4xl sm:text-5xl md:text-6xl xl:text-[68px] drop-shadow-[0_0_25px_rgba(249,170,51,0.3)]'>
          NAZIYAH CREED
        </span>
        <br className="hidden sm:inline" />
        <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-medium block mt-1">
          Integrated Technology & Innovation Enterprise
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-4 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-3xl font-normal leading-relaxed"
      >
        Engineering practical solutions across <span className="text-emerald-400 font-semibold">AgriTech</span>, <span className="text-cyan-400 font-semibold">AI & Industrial Automation</span>, <span className="text-amber-400 font-semibold">Custom Electronics R&D</span>, and <span className="text-purple-400 font-semibold">Progressive STEM Education</span>.
      </motion.p>
    </div>
  );
};

export default Title;
