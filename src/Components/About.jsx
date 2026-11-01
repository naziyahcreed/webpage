import React from "react";
import { Sprout, Cpu, Wrench, GraduationCap, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

const verticalsList = [
  {
    code: "01",
    name: "NAZIYAH CREED AGRI",
    title: "AgriTech & Smart Agriculture",
    desc: "IoT soil & climate analytics, automated micro-irrigation, solar farm systems, and agricultural robotics.",
    icon: Sprout,
    image: "/images/enterprise/agri_precision_farming.webp",
    color: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-400"
  },
  {
    code: "02",
    name: "NAZIYAH CREED TECHNOLOGIES",
    title: "AI, IoT & Industrial Automation",
    desc: "Embedded firmware (ESP32/STM32), edge AI, computer vision, PLC/SCADA integration, and cloud telemetry.",
    icon: Cpu,
    image: "/images/enterprise/technologies_automation.webp",
    color: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/30 text-cyan-400"
  },
  {
    code: "03",
    name: "NAZIYAH CREED ENGINEERING",
    title: "R&D, Design & Rapid Prototyping",
    desc: "Mechanical CAD modeling, custom multi-layer PCB design, 4-color 3D printing lab, and validation testing.",
    icon: Wrench,
    image: "/images/enterprise/engineering_rd.webp",
    color: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-400"
  },
  {
    code: "04",
    name: "NAZIYAH CREED STEM ACADEMY",
    title: "Progressive STEM & Robotics Education",
    desc: "Structured, age-appropriate learning continuum from Class 1 through Undergraduate capstones and faculty bootcamps.",
    icon: GraduationCap,
    image: "/images/enterprise/stem_academy.webp",
    color: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-400"
  },
  {
    code: "05",
    name: "NAZIYAH CREED INNOVATIONS",
    title: "Incubation & Technology Transfer",
    desc: "Proof-of-concept validation, prototype-to-product incubation, hackathon guidance, and MSME partnerships.",
    icon: Lightbulb,
    image: "/images/enterprise/innovations_incubation_hub.webp",
    color: "from-blue-500/20 to-blue-900/10 border-blue-500/30 text-blue-400"
  }
];

const About = () => {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-14 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Corporate Identity &amp; Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            About <span className="golden-text">NAZIYAH CREED</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
            A multidisciplinary <strong className="text-white">Integrated Technology and Innovation Enterprise</strong> based in Tamil Nadu, India. 
            We identify real-world challenges across agriculture, industry, engineering, and education—responding through high-impact consultancy, product development, system integration, and structured technical education.
          </p>
        </div>

        {/* Narrative & Strategic Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Philosophy */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-[var(--accent)] rounded-full"></span>
              The Problem-Led Engineering Philosophy
            </h3>
            <p>
              NAZIYAH CREED does not operate solely as a training center or as an isolated software startup. Our core differentiator is the end-to-end capacity to examine a client or community problem, architect appropriate hardware and software technologies, engineer a functional proof-of-concept, deploy it in field conditions, and transfer technical knowledge to the operator or learner.
            </p>
            <p className="border-l-2 border-[var(--accent)] pl-4 text-gray-200 font-medium italic">
              &quot;We believe technical innovation is meaningless without practical utility. From agricultural sensors in rural Tamil Nadu to precision robotics in research labs, every project we undertake is engineered for measurable real-world performance.&quot;
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-white">Application-Led &amp; Field Validated</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-white">Award-Winning MSME Solutions</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-white">In-House Multi-Color 3D Lab</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-white">K-12 to University STEM Pathways</span>
              </div>
            </div>
          </div>

          {/* Right: Enterprise Visual Showcase Box (Agrotech Style) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group min-h-[360px] flex flex-col justify-end">
            <img 
              src="/images/enterprise/technologies_automation.webp" 
              alt="Naziyah Creed Enterprise Technologies"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
            
            <div className="relative z-10 p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/40">
                  2026 ROADMAP
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Operations
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Integrated Technology &amp; Innovation Enterprise
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Tamil Nadu, India • Multidisciplinary R&amp;D, Embedded IoT, 4-Color Bambu Lab A1 Prototyping &amp; STEM Academy.
              </p>
            </div>
          </div>
        </div>

        {/* Five Business Verticals Showcase (with rich images like Agrotech) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Five Business <span className="golden-text">Verticals</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Shared core engineering capabilities addressing distinct sector demands</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticalsList.map((vert, idx) => {
              const Icon = vert.icon;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl bg-gradient-to-br ${vert.color} border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] flex flex-col justify-between overflow-hidden group`}
                >
                  {/* Image Header */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img 
                      src={vert.image} 
                      alt={vert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/40 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                        {vert.code}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-3 p-2 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-black tracking-widest uppercase opacity-75 block mb-1 text-cyan-300">
                        {vert.name}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2 leading-tight">
                        {vert.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-normal mb-4">
                        {vert.desc}
                      </p>
                    </div>

                    <a 
                      href="#services"
                      className="inline-flex items-center justify-between text-xs font-bold text-[var(--accent)] hover:text-white transition-colors pt-3 border-t border-white/10"
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
