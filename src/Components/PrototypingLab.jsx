import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Zap, Box, Sparkles, ArrowRight, MessageSquare, Compass
} from 'lucide-react';

const galleryTabs = [
  { id: 'all', label: 'All Showcase' },
  { id: 'machine', label: 'Bambu Lab Hardware' },
  { id: 'prints', label: 'Real Test Prints & Parts' },
  { id: 'prototypes', label: 'Engineering Assemblies' }
];

const galleryItems = [
  {
    id: 1,
    category: 'machine',
    title: 'Bambu Lab A1 + AMS Lite (Multi-Color Studio)',
    subtitle: 'Commercial Multi-Filament FDM Workhorse',
    badge: 'Flagship Equipment',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    image: '/images/3d-printing/studio_bambu_a1.webp',
    specs: ['4-Color Auto Switching', 'Up to 500 mm/s Speed', 'Textured PEI Bed']
  },
  {
    id: 2,
    category: 'prints',
    title: 'Micron Precision Hotend in Action',
    subtitle: 'Extruding High-Strength Planetary Gears',
    badge: '0.08mm - 0.2mm Precision',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    image: '/images/3d-printing/studio_precision_macro.webp',
    specs: ['Direct Drive Extruder', 'Vibration Compensation', 'Active Flow Rate']
  },
  {
    id: 3,
    category: 'prototypes',
    title: 'Functional Engineering Prototypes',
    subtitle: 'Robotic Joints, Drone Arms & IoT Nodes',
    badge: 'End-to-End DFAM',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    image: '/images/3d-printing/studio_prototypes.webp',
    specs: ['Custom Sensor Enclosures', 'High Load Structural Parts', 'Snap-Fit Joints']
  },
  {
    id: 4,
    category: 'machine',
    title: 'In-House Operational Bambu Lab A1',
    subtitle: 'Installed & Active in Our Prototyping Lab',
    badge: '✓ Verified Real Setup',
    badgeColor: 'bg-green-500/20 text-green-300 border-green-500/40',
    image: '/images/3d-printing/real_bambu_a1_setup_clean.webp',
    specs: ['4 Spools Loaded (Black/White/Blue/Orange)', 'Real Lab Environment', 'Ready for Orders']
  },
  {
    id: 5,
    category: 'prints',
    title: 'First-Print Test Sample (Embossed Logo Part)',
    subtitle: 'Ultra-Smooth Layer Adhesion & Surface Quality',
    badge: '✓ Real Print Result',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    image: '/images/3d-printing/real_printed_sample_clean.webp',
    specs: ['100% In-House Fabricated', 'Rigid PLA Structure', 'Crisp Embossed Logo']
  }
];

const capabilities = [
  {
    icon: Layers,
    title: '4-Color Multi-Filament Printing',
    desc: 'Powered by Bambu Lab AMS Lite. Print complex multi-color designs, support interfaces, and color-coded engineering models in a single continuous print.'
  },
  {
    icon: Zap,
    title: '500 mm/s Rapid Prototyping',
    desc: 'Turn ideas into physical prototypes in hours instead of days. Fast turnaround times ideal for final-year project deadlines and rapid iterations.'
  },
  {
    icon: Box,
    title: 'Engineering Grade Materials',
    desc: 'Support for PLA, Tough PLA, PETG (weather/heat resistant), TPU (flexible rubber-like), ABS, and Carbon-Fiber composites for high-strength parts.'
  },
  {
    icon: Compass,
    title: 'CAD Modeling to Finished Model',
    desc: 'Don’t have a 3D model yet? Our team can design 3D CAD files (.STL, .STEP) from your 2D sketches, circuit diagrams, or dimensional requirements.'
  }
];

const PrototypingLab = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-12 text-[var(--text-primary)]">
      
      {/* 1. Header & Exclusive Tag */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(244,197,66,0.2)]">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Exclusive In-House Service • New Launch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
          Next-Gen <span className="golden-text">3D Printing</span> & Rapid Prototyping Lab
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed max-w-3xl mx-auto">
          Industrial-grade rapid prototyping powered by our in-house <span className="golden-text font-bold">Bambu Lab A1 + AMS Lite</span> 4-color multi-filament system. Delivering micron-precision mechanical assemblies, custom robotics chassis, and ruggedized IoT sensor enclosures.
        </p>

        {/* WhatsApp & File Submission Quick Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://wa.me/918925205509?text=Hello%20Naziyah%20Creed,%20I%20have%20a%203D%20printing%20/%20prototyping%20requirement.%20Can%20you%20provide%20a%20quote?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A86B] text-black font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_0_25px_rgba(0,208,132,0.4)] hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Send STL File via WhatsApp</span>
          </a>

          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm sm:text-base hover:border-[var(--accent)] transition-all"
          >
            <span>Request Custom 3D Design</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
          </a>
        </div>
      </div>

      {/* 2. Interactive Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 max-w-3xl mx-auto">
        {galleryTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[var(--accent)] text-black shadow-[0_0_15px_var(--accent)] scale-105'
                : 'bg-white/5 text-[var(--text-secondary)] hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. Showcase Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-[var(--accent)] shadow-xl hover:shadow-[0_0_30px_rgba(244,197,66,0.25)] transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#051512]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-black/60 to-black/90">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium mb-4">
                  {item.subtitle}
                </p>

                {/* Specs Pill List */}
                <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {item.specs.map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 4. Capabilities Grid */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Why Choose Our <span className="golden-text">Prototyping Facility?</span>
          </h3>
          <p className="text-sm text-gray-400">Everything needed to turn technical concepts into functional hardware</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-400/30 flex items-center justify-center text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {cap.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>


      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#041C18] border border-white/20 rounded-3xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-red-500 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ✕
            </button>
            
            <div className="max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedImage.badgeColor}`}>
                  {selectedImage.badge}
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">In-House Prototyping</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{selectedImage.subtitle}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedImage.specs.map((s, idx) => (
                  <span key={idx} className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PrototypingLab;

