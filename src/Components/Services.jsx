import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, Cpu, Wrench, GraduationCap, Lightbulb, 
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, 
  Workflow, Layers, Sparkles, ExternalLink, Activity,
  Zap, Database, Radio, Droplets, Gauge
} from 'lucide-react';

const verticals = [
  {
    id: 'agri',
    name: 'NAZIYAH CREED AGRI',
    tagline: 'AgriTech & Smart Agricultural Solutions',
    badge: 'Vertical 01',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/15',
    icon: Sprout,
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/80',
    glowColor: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
    image: '/images/enterprise/agri_precision_farming.webp',
    description: 'Transforming traditional farming into precision agriculture through automated telemetry, environmental sensing, robotic harvesters, and smart irrigation ecosystems.',
    metrics: [
      { label: 'Water Conservation', value: '40%+', icon: Droplets, color: '#38BDF8' },
      { label: 'Telemetry Range', value: '15 km (LoRa)', icon: Radio, color: '#00D084' },
      { label: 'Response Latency', value: '< 2.5s', icon: Zap, color: '#F4C542' }
    ],
    services: [
      'IoT soil moisture, NPK, water pH & micro-climate monitoring',
      'Automated closed-loop drip irrigation & precision fertigation',
      'Aquaponics and controlled hydroponics monitoring & control',
      'Solar-powered off-grid agricultural pump automation',
      'Smart crop dryers & post-harvest cold room telemetry',
      'Agricultural field rovers and AI-assisted pest surveillance'
    ],
    targetClients: 'Farmers, FPOs, Agri-MSMEs, Agri-Startups, Agricultural Colleges & Research Stations',
    link: '/agrotech',
    linkLabel: 'Explore AgriTech System'
  },
  {
    id: 'tech',
    name: 'NAZIYAH CREED TECHNOLOGIES',
    tagline: 'AI, IoT, Robotics & Industrial Automation',
    badge: 'Vertical 02',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/15',
    icon: Cpu,
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400/80',
    glowColor: 'hover:shadow-[0_0_35px_rgba(0,243,255,0.3)]',
    image: '/images/enterprise/technologies_automation.webp',
    description: 'Developing mission-critical digital intelligence, edge AI vision, embedded firmware, and ruggedized industrial telemetry systems for enterprise efficiency.',
    metrics: [
      { label: 'Edge Vision Inference', value: '60 FPS', icon: Activity, color: '#38BDF8' },
      { label: 'Firmware Reliability', value: '99.98%', icon: ShieldCheck, color: '#00D084' },
      { label: 'Bus Protocols', value: 'CAN / RS485 / MQTT', icon: Database, color: '#A855F7' }
    ],
    services: [
      'Edge AI computer vision and real-time object tracking',
      'Industrial IoT telemetry gateways & live cloud dashboards',
      'High-performance embedded firmware on ESP32, STM32 ARM Cortex',
      'Autonomous mobile robots (AMR) & multi-axis robotic manipulators',
      'Industrial PLC, HMI touchscreens, and SCADA control panels',
      'Long-range wireless communication (LoRaWAN, 4G LTE, BLE Mesh)'
    ],
    targetClients: 'Manufacturing Industries, MSMEs, High-Tech Startups, Research Laboratories & Commercial Plants',
    link: '#contact',
    linkLabel: 'Inquire for Automation'
  },
  {
    id: 'eng',
    name: 'NAZIYAH CREED ENGINEERING',
    tagline: 'R&D, CAD Design & Rapid Prototyping',
    badge: 'Vertical 03',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/15',
    icon: Wrench,
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/30 hover:border-amber-400/80',
    glowColor: 'hover:shadow-[0_0_35px_rgba(244,197,66,0.3)]',
    image: '/images/enterprise/engineering_rd.webp',
    description: 'Delivering multidisciplinary engineering consultancy, mechanical CAD modeling, multi-layer PCB design, and 4-color rapid functional prototyping.',
    metrics: [
      { label: 'Print Precision', value: '0.08 mm', icon: Gauge, color: '#F4C542' },
      { label: 'Prototyping Turnaround', value: '48 Hours', icon: Zap, color: '#00D084' },
      { label: 'PCB Routing Layers', value: 'Up to 4 Layers', icon: Layers, color: '#38BDF8' }
    ],
    services: [
      'Engineering feasibility studies and architectural design',
      'Parametric 3D CAD modeling, kinematics & FEA stress simulation',
      'Schematic capture & 2-to-4 layer PCB routing in KiCad / Altium',
      'In-house 4-color Bambu Lab A1 rapid functional prototyping',
      'Custom IP-rated sensor enclosures and robotic chassis fabrication',
      'Comprehensive system testing, validation & technical documentation'
    ],
    targetClients: 'MSMEs, Innovators, Hardware Startups, Academic R&D Teams & Product Developers',
    link: '#3d-printing',
    linkLabel: 'Explore 3D Lab'
  },
  {
    id: 'stem',
    name: 'NAZIYAH CREED STEM ACADEMY',
    tagline: 'Progressive STEM & Robotics Education',
    badge: 'Vertical 04',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/15',
    icon: GraduationCap,
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30 hover:border-purple-400/80',
    glowColor: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
    image: '/images/enterprise/stem_academy.webp',
    description: 'Fostering technical competence from Classes 1–12 through polytechnic and undergraduate engineering via a hands-on, 7-level progressive STEM continuum.',
    metrics: [
      { label: 'Curriculum Progression', value: '7 Levels', icon: Layers, color: '#A855F7' },
      { label: 'Practical Ratio', value: '85% Hands-On', icon: Zap, color: '#F4C542' },
      { label: 'Framework Compliance', value: 'NEP 2020 Aligned', icon: ShieldCheck, color: '#00D084' }
    ],
    services: [
      'Levels 1–4: School STEM, robotics, visual coding & breadboard circuits',
      'Levels 5–7: Polytechnic & UG embedded C++, PCB design, IoT & Edge AI',
      'Turnkey Atal Tinkering Labs (ATL) and robotics innovation center setup',
      'Credit-aligned Value-Added Courses (VAC) with industry certification',
      'Faculty Development Programmes (FDP) & trainer bootcamps',
      'Inter-collegiate robotics competitions and maker hackathons'
    ],
    targetClients: 'Schools (CBSE/State), Polytechnics, Engineering Colleges, Universities & Faculty',
    link: '#stem-academy',
    linkLabel: 'View 7-Level Curriculum'
  },
  {
    id: 'innovations',
    name: 'NAZIYAH CREED INNOVATIONS',
    tagline: 'Incubation, Hackathons & Tech Transfer',
    badge: 'Vertical 05',
    badgeColor: 'border-orange-500/40 text-orange-300 bg-orange-500/15',
    icon: Lightbulb,
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/30 hover:border-orange-400/80',
    glowColor: 'hover:shadow-[0_0_35px_rgba(249,115,22,0.3)]',
    image: '/images/enterprise/innovations_incubation_hub.webp',
    description: 'Transforming conceptual ideas and prototypes into validated, patentable products, fostering industry-academia partnerships and MSME tech transfers.',
    metrics: [
      { label: 'PoC Validation Rate', value: '94%', icon: Activity, color: '#00D084' },
      { label: 'Hardware Acceleration', value: '4–8 Weeks', icon: Zap, color: '#F4C542' },
      { label: 'IP & Patent Scope', value: 'Commercial Ready', icon: ShieldCheck, color: '#38BDF8' }
    ],
    services: [
      'Idea screening, problem framing & product concept development',
      'Rapid Proof-of-Concept (PoC) validation and functional test beds',
      'Startup hardware incubation, architecture reviews & mentorship',
      'Industry–academia collaborative research and grant assistance',
      'National hackathon mentoring, ideation juries & technical workshops',
      'MSME technology licensing and commercialization roadmaps'
    ],
    targetClients: 'Startup Founders, Student Innovators, College Incubators, MSMEs & Entrepreneurs',
    link: '#contact',
    linkLabel: 'Inquire for Incubation'
  }
];

const workflowStages = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive client problem briefing, operational constraints & expected outcomes.' },
  { step: '02', title: 'Feasibility', desc: 'Technical viability study, hardware component availability, regulatory & safety analysis.' },
  { step: '03', title: 'Concept', desc: 'Comparative architectural block diagrams, trade-off analysis & baseline approval.' },
  { step: '04', title: 'Design', desc: 'Parametric CAD modeling, electronic schematics, complete BOM & milestone plan.' },
  { step: '05', title: 'Development', desc: 'Firmware engineering, PCB layout routing, 3D printing & hardware assembly.' },
  { step: '06', title: 'Integration', desc: 'Unified sensor, controller, cloud dashboard & mechanical mechanism calibration.' },
  { step: '07', title: 'Verification', desc: 'Stress testing, precision calibration, failure-mode analysis & verified test logs.' },
  { step: '08', title: 'Deployment', desc: 'On-site installation, commissioning, operational tuning & staff hands-on training.' },
  { step: '09', title: 'Handover', desc: 'Full engineering package delivery (CAD files, source code, manuals & support).' }
];

export default function Services() {
  return (
    <div className="min-h-fit bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-12 py-16">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(244,197,66,0.15)]">
          <Workflow className="w-4 h-4 text-amber-400" />
          <span>Multidisciplinary Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400 tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(244,197,66,0.25)]">
          The Five Core Business Verticals
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
          Naziyah Creed is structured into five specialized enterprise divisions sharing advanced in-house R&amp;D infrastructure while serving distinct industrial, agricultural, and educational missions.
        </p>
      </div>

      {/* 5-Card Visual Showcase (Direct on-page, Agrotech Product Grid style) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {verticals.map((v) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl bg-[var(--bg-secondary)] border ${v.borderColor} shadow-xl ${v.glowColor} flex flex-col justify-between overflow-hidden group`}
            >
              {/* Image Banner with Category Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-black/30 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-md ${v.badgeColor}`}>
                    {v.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white group-hover:bg-[var(--accent)] group-hover:text-black transition-colors shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300 mt-1">
                    {v.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                    {v.description}
                  </p>
                </div>

                {/* 3 Telemetry Metrics (Agrotech style) */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {v.metrics.map((m, idx) => {
                    const MetricIcon = m.icon;
                    return (
                      <div key={idx} className="p-2 rounded-xl bg-[var(--bg-primary)]/80 border border-white/5 text-center flex flex-col justify-center">
                        <MetricIcon className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: m.color }} />
                        <p className="text-xs sm:text-sm font-bold text-white truncate">{m.value}</p>
                        <p className="text-[9px] text-[var(--text-secondary)] uppercase font-semibold truncate">{m.label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Capabilities List */}
                <div className="pt-2 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Capabilities</span>
                  </p>
                  <div className="space-y-1.5">
                    {v.services.slice(0, 3).map((s, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-primary)]/90">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-secondary)] font-medium">Enterprise Scope</span>
                  <a
                    href={v.link}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs shadow-md hover:scale-105 transition-all"
                  >
                    <span>{v.linkLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 9-Stage Structured Engineering Delivery Workflow with Wide Visual Banner */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] shadow-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Standardized Industrial Delivery</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Our 9-Stage Engineering Delivery Workflow
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                From initial challenge formulation to certified client handover, every project follows a disciplined engineering lifecycle designed for transparency, zero technical debt, and verifiable performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--bg-primary)] border border-white/10 text-white">
                  ✓ Parametric 3D CAD
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--bg-primary)] border border-white/10 text-white">
                  ✓ Multi-Layer PCB Routing
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--bg-primary)] border border-white/10 text-white">
                  ✓ Bambu Lab A1 Prototyping
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--bg-primary)] border border-white/10 text-white">
                  ✓ IP67 Weatherproofing
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[280px]">
              <img
                src="/images/enterprise/engineering_workflow_pipeline.webp"
                alt="Engineering Delivery Pipeline"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--bg-secondary)] via-transparent to-transparent opacity-80 lg:opacity-60"></div>
            </div>
          </div>
        </div>

        {/* 9 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {workflowStages.map((stage, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-white/5 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-white/10 flex items-center justify-center font-black text-sm text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:shadow-[0_0_10px_rgba(244,197,66,0.3)] shrink-0 transition-all">
                {stage.step}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {stage.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
