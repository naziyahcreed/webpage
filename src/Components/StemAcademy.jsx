import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Cpu, BookOpen, Layers, Award, 
  CheckCircle2, ArrowRight, Sparkles, School, Building2, 
  FlaskConical, Code, Wrench, ShieldCheck, Users,
  Activity, Zap, Compass, Check
} from 'lucide-react';

const stemLevels = [
  {
    id: 1,
    level: 'Level 1',
    category: 'school',
    title: 'Foundation STEM',
    audience: 'Classes 1 – 5 (Primary)',
    tag: 'Curiosity & Discovery',
    accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    dotColor: 'bg-emerald-400',
    description: 'Nurtures curiosity, observation, and scientific reasoning through safe experiments, physical building blocks, simple mechanisms, and playful discovery without hazardous electronics.',
    pillars: {
      science: 'Living systems, plants, light & shadows, air & water dynamics',
      tech: 'Everyday tools, digital awareness, safe device interactions',
      engineering: 'Building blocks, balance structures, levers & wheels',
      math: 'Counting, patterns, geometric shapes, comparative measuring'
    },
    outcomes: [
      'Explain everyday scientific phenomena with confidence',
      'Build non-hazardous physical working models and balance structures',
      'Develop spatial thinking, pattern recognition, and team habits'
    ]
  },
  {
    id: 2,
    level: 'Level 2',
    category: 'school',
    title: 'Exploratory STEM & Robotics',
    audience: 'Classes 6 – 8 (Middle School)',
    tag: 'Hands-on Construction',
    accentColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    dotColor: 'bg-cyan-400',
    description: 'Introduces hands-on electronics, block-based visual coding, sensory instrumentation, and mobile robot chassis construction under direct engineering supervision.',
    pillars: {
      science: 'Electricity flow, magnetic fields, sound wave reflection',
      tech: 'Block coding (Scratch / Blockly), LEDs, ultrasonic & IR sensors',
      engineering: '2WD robot chassis assembly, gear ratios, motorized pulleys',
      math: 'Angles, speed calculations, coordinate planes, sensor thresholds'
    },
    outcomes: [
      'Assemble and program autonomous obstacle-avoiding mobile rovers',
      'Design basic breadboard circuits with light and ultrasonic sensors',
      'Understand algorithm logic, conditionals, and event-driven loops'
    ]
  },
  {
    id: 3,
    level: 'Level 3',
    category: 'school',
    title: 'Applied STEM & IoT Awareness',
    audience: 'Classes 9 – 10 (Secondary)',
    tag: 'Text Coding & Systems',
    accentColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    dotColor: 'bg-blue-400',
    description: 'Transitions students to text-based microcontrollers (Arduino/C++ and Python), multi-sensor telemetry networks, circuit schematic reading, and applied problem-solving.',
    pillars: {
      science: 'Environmental thermodynamics, soil chemistry, energy conversion',
      tech: 'Arduino C++, Python fundamentals, serial monitor data logging',
      engineering: 'Closed-loop automated relays, breadboard prototype wiring',
      math: "Ohm's law calculations, linear sensor calibration, data plotting"
    },
    outcomes: [
      'Build functional automated systems (e.g., smart plant watering, alarm nodes)',
      'Write clean C++ firmware to process analog and digital sensory inputs',
      'Understand data graphs and telemetry transmission basics'
    ]
  },
  {
    id: 4,
    level: 'Level 4',
    category: 'school',
    title: 'Senior Technical & CAD Orientation',
    audience: 'Classes 11 – 12 (Higher Secondary)',
    tag: 'Pre-Engineering Track',
    accentColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    dotColor: 'bg-amber-400',
    description: 'Prepares students for engineering disciplines with 3D CAD modeling, Wi-Fi IoT microcontrollers (ESP32), web dashboards, and real-world engineering project framing.',
    pillars: {
      science: 'Electromagnetics, semiconductors, wave telemetry physics',
      tech: 'ESP32 Wi-Fi/Bluetooth, cloud telemetry dashboards, Python scripts',
      engineering: '3D CAD enclosure design (DFAM), rapid 3D printing, fabrication',
      math: 'Trigonometry in kinematics, boolean logic gates, statistical data'
    },
    outcomes: [
      'Model custom enclosures in CAD and fabricate on 3D printers',
      'Deploy web-connected IoT telemetry nodes communicating via Wi-Fi',
      'Create competitive portfolios for technical university admissions'
    ]
  },
  {
    id: 5,
    level: 'Level 5',
    category: 'ug',
    title: 'UG Foundations & Computational Engineering',
    audience: 'Polytechnic & UG Year 1',
    tag: 'Engineering Rigor',
    accentColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    dotColor: 'bg-purple-400',
    description: 'Establishes rigorous foundations in algorithmic problem solving, lab instrumentation safety, parametric 3D CAD assemblies, and electronic circuit analysis.',
    pillars: {
      science: 'Semiconductor device physics, signals and linear systems',
      tech: 'C/C++ algorithms, Python scientific libraries, GitHub workflows',
      engineering: 'Parametric CAD assemblies, DSO / DMM lab measurement safety',
      math: 'Linear algebra, differential equations in circuit transient analysis'
    },
    outcomes: [
      'Construct multi-component mechanical assemblies with kinematic tolerances',
      'Measure and debug real circuit signals using oscilloscopes and DMMs',
      'Implement clean algorithmic data structures in embedded C/C++'
    ]
  },
  {
    id: 6,
    level: 'Level 6',
    category: 'ug',
    title: 'Specialization & Systems Integration',
    audience: 'UG Years 2 – 3',
    tag: 'Industry 4.0 Specialization',
    accentColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    dotColor: 'bg-indigo-400',
    description: 'Deep-dive domain specializations across multi-layer PCB design, Industrial IoT (IIoT), Edge AI computer vision, RTOS on STM32/ESP32, and PLC/SCADA automation.',
    pillars: {
      science: 'Electromagnetic compatibility (EMC), optics in computer vision',
      tech: 'FreeRTOS, MQTT/HTTP protocols, OpenCV vision, Edge AI inference',
      engineering: 'KiCad multi-layer PCB design, industrial enclosures, PLC logic',
      math: 'Fourier transforms, matrix convolutions, PID tuning math'
    },
    outcomes: [
      'Design, route, and assemble custom manufactured PCBs',
      'Deploy Edge AI computer vision models on embedded single-board computers',
      'Build resilient industrial IoT telemetry systems with real-time dashboards'
    ]
  },
  {
    id: 7,
    level: 'Level 7',
    category: 'ug',
    title: 'Capstone R&D, MSME Transfer & Internships',
    audience: 'UG Final Year & Postgraduates',
    tag: 'Professional Capstone',
    accentColor: 'border-amber-400/50 text-amber-300 bg-amber-500/15',
    dotColor: 'bg-amber-400',
    description: 'End-to-end prototype engineering, technical research methodology, intellectual property awareness, industrial verification, and commercial feasibility analysis.',
    pillars: {
      science: 'Domain-specific experimental design and empirical validation',
      tech: 'Full-stack embedded firmware, cloud backends, Bambu Lab A1 4-color DFAM',
      engineering: 'Turnkey functional prototype delivery, test logs, design for manufacture',
      math: 'Statistical verification, regression modeling, cost-benefit BOM analysis'
    },
    outcomes: [
      'Deliver working, field-tested engineering prototypes ready for defense & demo',
      'Draft IEEE-style technical reports, user operation manuals, and BOM records',
      'Gain commercialization, incubation, and MSME tech-transfer readiness'
    ]
  }
];

const institutionalServices = [
  {
    icon: School,
    title: 'School STEM & ATL Lab Setup',
    desc: 'Turnkey setup and annual curriculum maintenance for Atal Tinkering Labs (ATL) and school robotics innovation centers with structured teacher manuals and grade-wise kits.'
  },
  {
    icon: Award,
    title: 'Value-Added Courses (VAC)',
    desc: 'Syllabus-mapped, credit-aligned 30-to-60 hour certified courses in IoT, 3D Prototyping, Embedded Systems, and AI Robotics for engineering and polytechnic colleges.'
  },
  {
    icon: Users,
    title: 'Faculty Development Bootcamps (FDP)',
    desc: 'Hands-on intensive workshops for educators on contemporary embedded platforms, KiCad PCB routing, 3D printing DFAM, and integrating modern project pedagogy.'
  },
  {
    icon: Building2,
    title: 'Hackathons & Innovation Challenges',
    desc: 'End-to-end curation of collegiate and inter-school maker hackathons, challenge problem statements, hardware bench support, and objective jury evaluation.'
  }
];

export default function StemAcademy() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState(stemLevels[0]);

  const filteredLevels = stemLevels.filter(item => {
    if (activeTab === 'school') return item.category === 'school';
    if (activeTab === 'ug') return item.category === 'ug';
    return true;
  });

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-12 py-14">
      {/* Top Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>Technical Education Framework</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400 tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(244,197,66,0.25)]">
          NAZIYAH CREED STEM ACADEMY
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          A progressive, age-appropriate STEM and robotics learning continuum spanning from primary school curiosity to advanced polytechnic and undergraduate engineering R&amp;D.
        </p>
      </div>

      {/* TWO DEDICATED VISUAL TRACK CARDS (Agrotech Style) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Track 1: School Track */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-[var(--bg-secondary)] border border-cyan-500/30 hover:border-cyan-400/80 shadow-xl hover:shadow-[0_0_35px_rgba(0,243,255,0.25)] overflow-hidden flex flex-col justify-between group"
        >
          <div className="relative h-60 w-full overflow-hidden shrink-0">
            <img
              src="/images/enterprise/stem_school_robotics.webp"
              alt="School STEM & Robotics Lab"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-black/25 to-transparent"></div>
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                School Track • Classes 1–12
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs text-white/90 font-medium">Foundational to Pre-Engineering Continuum</span>
            </div>
          </div>
          
          <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                School Atal Tinkering Labs (ATL) &amp; Robotics
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Step-by-step progression from curiosity and physical mechanisms to autonomous rovers, sensor breadboards, and Wi-Fi IoT microcontrollers.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-cyan-300">20+ Safe</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">Lab Kits</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-amber-300">Scratch &amp; Py</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">Software</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-emerald-300">NEP 2020</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">Compliant</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-400">Levels 1, 2, 3 &amp; 4 Continuum</span>
              <button
                onClick={() => {
                  setActiveTab('school');
                  document.getElementById('learning-pathway')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:text-white transition-colors"
              >
                <span>View Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Track 2: UG Engineering Track */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-[var(--bg-secondary)] border border-amber-500/30 hover:border-amber-400/80 shadow-xl hover:shadow-[0_0_35px_rgba(244,197,66,0.25)] overflow-hidden flex flex-col justify-between group"
        >
          <div className="relative h-60 w-full overflow-hidden shrink-0">
            <img
              src="/images/enterprise/stem_ug_engineering_lab.webp"
              alt="Undergraduate Engineering Lab"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-black/25 to-transparent"></div>
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                Higher Education • Years 1–4
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs text-white/90 font-medium">Industry 4.0 Specialization &amp; Capstones</span>
            </div>
          </div>
          
          <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors mb-2">
                Polytechnic &amp; UG Engineering Acceleration
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Specialized domain training across Multi-Layer PCB Design, Edge AI, Industrial IoT, and Turnkey Capstone Prototype Realization with verification logs.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-amber-300">Bambu A1</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">4-Color Lab</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-cyan-300">STM32 / ESP</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">Firmware</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-white/5 text-center">
                <p className="text-sm font-bold text-emerald-300">IEEE / IP</p>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase">Ready</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-400">Levels 5, 6 &amp; 7 Continuum</span>
              <button
                onClick={() => {
                  setActiveTab('ug');
                  document.getElementById('learning-pathway')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:text-white transition-colors"
              >
                <span>View Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 7-Level Progression Section */}
      <div id="learning-pathway" className="max-w-6xl mx-auto mb-16 scroll-mt-28">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>The 7-Level Learning Pathway</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Select any level below to review its four STEM pillars and verified learning outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[var(--bg-secondary)] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              All 7 Levels
            </button>
            <button
              onClick={() => setActiveTab('school')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'school' 
                  ? 'bg-cyan-500 text-black shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              School (Levels 1–4)
            </button>
            <button
              onClick={() => setActiveTab('ug')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'ug' 
                  ? 'bg-purple-500 text-white shadow-md' 
                  : 'text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              Polytechnic &amp; UG (Levels 5–7)
            </button>
          </div>
        </div>

        {/* Level Cards Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {filteredLevels.map((item) => {
            const isSelected = selectedLevel.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedLevel(item)}
                className={`text-left p-3 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(244,197,66,0.3)] scale-[1.03]'
                    : 'border-white/5 bg-[var(--bg-secondary)]/60 hover:border-cyan-500/40 hover:bg-[var(--bg-secondary)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--accent)]">
                      {item.level}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[10px] text-[var(--text-secondary)] mt-2">
                  {item.audience.split('(')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Level Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLevel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)] border border-cyan-500/30 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider border ${selectedLevel.accentColor}`}>
                    {selectedLevel.level} • {selectedLevel.tag}
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">
                    Target: {selectedLevel.audience}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  {selectedLevel.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-3xl leading-relaxed">
                  {selectedLevel.description}
                </p>
              </div>
            </div>

            {/* 4 Pillars Breakdown for this Level */}
            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Four-Pillar Curriculum Framework</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-white/5">
                  <p className="text-xs font-bold text-emerald-400 mb-1">Science Understanding</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{selectedLevel.pillars.science}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-white/5">
                  <p className="text-xs font-bold text-cyan-400 mb-1">Technology &amp; Tools</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{selectedLevel.pillars.tech}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-white/5">
                  <p className="text-xs font-bold text-amber-400 mb-1">Engineering &amp; Fabrication</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{selectedLevel.pillars.engineering}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-white/5">
                  <p className="text-xs font-bold text-purple-400 mb-1">Mathematics &amp; Logic</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{selectedLevel.pillars.math}</p>
                </div>
              </div>
            </div>

            {/* Verifiable Learning Outcomes */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verifiable Student Deliverables &amp; Outcomes</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {selectedLevel.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--bg-primary)]/70 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-[var(--text-primary)] leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Institutional Services & Partnerships */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
            Institutional Collaboration Models
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
            Partnering with schools, polytechnics, and engineering universities to establish state-of-the-art innovation ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {institutionalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-white/5 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[var(--bg-secondary)] to-amber-950/40 border border-amber-400/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
              Ready to Upgrade Your Institution&apos;s STEM &amp; Engineering Labs?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
              Connect with Naziyah Creed to schedule a curriculum mapping consultation, ATL audit, or custom engineering bootcamp for your school or college.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-sm shadow-[0_0_20px_rgba(244,197,66,0.35)] hover:shadow-[0_0_30px_rgba(244,197,66,0.5)] hover:scale-105 transition-all duration-300 shrink-0"
          >
            <span>Institutional Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
