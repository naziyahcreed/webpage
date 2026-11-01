import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Cpu, Layers, Zap, ShieldCheck, BookOpenCheck 
} from 'lucide-react';

const ContentBox = () => {
  const principles = [
    {
      icon: Target,
      title: 'Problem-Led Engineering',
      content:
        'We start with real operational challenges across farms, manufacturing floors, and research labs—designing purpose-built systems rather than forcing generic off-the-shelf solutions.',
      tag: 'Methodology'
    },
    {
      icon: Cpu,
      title: 'Application-Driven Innovation',
      content:
        'Prioritizing working physical prototypes, field-calibrated telemetry, and measurable results over abstract theoretical concepts and industry buzzwords.',
      tag: 'Pragmatism'
    },
    {
      icon: Layers,
      title: 'Modular & Scalable Architecture',
      content:
        'Hardware, firmware, and cloud layers engineered as interoperable modules—ensuring seamless scaling from a single proof-of-concept to volume deployment.',
      tag: 'Architecture'
    },
    {
      icon: Zap,
      title: 'In-House Rapid Prototyping',
      content:
        'Equipped with commercial 4-color Bambu Lab A1 3D printers, precision SMD assembly stations, and testing instrumentation for rapid 48-hour prototype turnarounds.',
      tag: 'Speed & DFAM'
    },
    {
      icon: ShieldCheck,
      title: 'Institutional Quality & Safety',
      content:
        'Strict adherence to engineering safety, intellectual property boundaries, grant compliance, and transparent test logging across every project milestone.',
      tag: 'Compliance'
    },
    {
      icon: BookOpenCheck,
      title: 'Ethical Mentorship & Handover',
      content:
        'Complete delivery of parametric CAD source files, annotated firmware, bill of materials, and operational manuals ensuring client self-sufficiency.',
      tag: 'Integrity'
    },
  ];

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-12 py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Engineering Integrity &amp; Standards</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400 tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(244,197,66,0.25)]">
          Strategic Principles &amp; Value Proposition
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Built on disciplined engineering practices, ethical execution, and uncompromising technical standards for enterprises, researchers, and institutions.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="running-border-container running-border-blue shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              <div className="running-border-content bg-[var(--bg-secondary)] text-[var(--text-primary)] p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[var(--accent)] shadow-[0_0_10px_rgba(244,197,66,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--accent-secondary)] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBox;
