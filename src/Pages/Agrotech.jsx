import React, { useEffect, useState } from 'react';
import { 
  MdSettingsRemote, MdPrecisionManufacturing, MdPsychology,
  MdWaterDrop, MdBugReport, MdArrowForward, MdSensors, MdAnalytics,
  MdPlayCircleOutline, MdClose, MdWarning, MdInfo, MdCheckCircle
} from 'react-icons/md';
import { FaLeaf, FaTractor } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import FuturisticBackground from '../Components/FuturisticBackground';
import CostEngineApp from '../Components/CostEngine/CostEngineApp';
import { Droplets, Activity, Thermometer, Zap, Database, Cpu, Wind, Lightbulb, ShieldAlert, Sprout } from 'lucide-react';

// Popup Data Mapping
const popupData = {
  "IoT Monitoring": {
    title: "IoT Monitoring",
    image: "/images/agrotech/photo_2026-07-06_15-37-05.webp",
    desc: "Real-time field data collection using advanced IoT sensors. Monitor soil health, micro-climate, and crop conditions instantly from anywhere in the world."
  },
  "Drone Services": {
    title: "Drone Services",
    image: "/images/agrotech/photo_2026-07-06_15-37-02.webp",
    desc: "Precision drone monitoring and automated spraying. Cover large acres of land in minutes, ensuring even distribution of nutrients and pesticides while saving time and resources."
  },
  "AI Advisory": {
    title: "AI Advisory",
    image: "/images/agrotech/ai_advisory_agri.webp",
    desc: "Smart suggestions powered by Machine Learning. Our AI analyzes historical and real-time data to predict weather impacts, optimize harvest times, and recommend crop management strategies."
  },
  "Irrigation Control": {
    title: "Irrigation Control",
    image: "/images/agrotech/photo_2026-07-06_15-37-07.webp",
    desc: "Smart water management systems. Automatically trigger irrigation based on exact soil moisture levels, drastically reducing water waste and preventing over-watering."
  },
  "Pest & Disease": {
    title: "Pest & Disease",
    image: "/images/agrotech/photo_2026-07-06_15-37-04.webp",
    desc: "Early detection and alerts for pest infestations or crop diseases. Computer vision identifies threats before they spread, allowing for targeted organic treatments."
  },
  "Field Camera": {
    title: "Live Field Camera",
    image: "/images/agrotech/photo_2026-07-06_15-37-05.webp",
    desc: "24/7 visual monitoring of your crops. Check the physical status of your farm remotely, deter trespassers, and verify sensor alerts with live video feeds."
  },
  "Soil Moisture": {
    title: "Soil Moisture Analytics",
    image: "/images/agrotech/soil_moisture_ai.webp",
    desc: "Detailed historical tracking of soil hydration levels across multiple zones. Currently at 45% (Optimal) for the vegetative growth stage of your primary crop."
  },
  "Temperature": {
    title: "Micro-Climate Temperature",
    image: "/images/agrotech/temperature_ai.webp",
    desc: "Continuous temperature monitoring at the canopy level. 32.4°C is within the normal tolerance for your current crop, meaning no heat-stress mitigation is currently required."
  },
  "Humidity": {
    title: "Humidity Levels",
    image: "/images/agrotech/humidity_ai.webp",
    desc: "Ambient humidity is currently 65%. Monitoring humidity is critical for predicting fungal diseases and optimizing the timing for drone spraying operations."
  },
  "Drone Status": {
    title: "Active Drone Operation",
    image: "/images/agrotech/photo_2026-07-06_15-37-02.webp",
    desc: "Drone currently in operation over Sector B. Battery is at 85%. Estimated time to completion is 12 minutes. Live telemetry is nominal."
  }
};

const bgImages = [
  "/images/agrotech/photo_2026-07-06_15-36-59.webp",
  "/images/agrotech/ai_advisory_agri.webp"
];

const productsData = [
  {
    id: 1,
    name: "Smart AgriNode – IoT Irrigation Controller",
    image: "/images/Products/Product 1 – Smart AgriNode (IoT Irrigation Controller).webp",
    overview: "Smart AgriNode is an intelligent IoT-based irrigation controller designed to automate watering based on real-time environmental conditions. Using advanced sensors and wireless connectivity, it monitors soil moisture, water levels, and climate parameters to ensure crops receive the right amount of water at the right time.",
    suitableFor: "Farmers, Terrace Gardens, Greenhouses, Educational Institutions",
    metrics: [
      { label: "Soil Moisture", value: 45, unit: "%", icon: Droplets, color: "#38BDF8" },
      { label: "Water Saved", value: 120, unit: "L", icon: Database, color: "#00D084" },
      { label: "Pump Status", value: 100, customText: "Active", icon: Zap, color: "#F4C542" }
    ]
  },
  {
    id: 2,
    name: "Smart Terrace Garden Automation Kit",
    image: "/images/Products/Product 2 – Smart Terrace Garden Automation Kit.webp",
    overview: "The Smart Terrace Garden Automation Kit is designed for busy individuals who want to grow healthy plants without worrying about daily watering and monitoring. The system automatically irrigates plants based on soil moisture levels while allowing users to monitor their garden remotely through a mobile application.",
    suitableFor: "Apartments, Homes, Rooftop Gardens, Hobby Gardeners",
    metrics: [
      { label: "Moisture Level", value: 68, unit: "%", icon: Droplets, color: "#38BDF8" },
      { label: "Ambient Temp", value: 32, unit: "°C", icon: Thermometer, color: "#F97316" },
      { label: "Light Exposure", value: 85, unit: "%", icon: Lightbulb, color: "#F4C542" }
    ]
  },
  {
    id: 3,
    name: "AI Smart Hydroponics Kit",
    image: "/images/Products/Product 3 – AI Smart Hydroponics Kit.webp",
    overview: "The AI Smart Hydroponics Kit enables sustainable soil-less farming through intelligent automation. It continuously monitors nutrient levels, water circulation, pH, and environmental conditions to create the perfect growing environment for leafy vegetables and herbs. Combines AI and IoT technologies to maximize crop health.",
    suitableFor: "Indoor Farming, Schools, Colleges, Urban Agriculture",
    metrics: [
      { label: "pH Level", value: 65, customText: "6.5 pH", icon: Activity, color: "#A855F7" },
      { label: "Nutrient EC", value: 72, customText: "1.8 mS/cm", icon: Database, color: "#00D084" },
      { label: "Water Temp", value: 24, unit: "°C", icon: Thermometer, color: "#38BDF8" }
    ]
  },
  {
    id: 4,
    name: "Smart Water Tank Monitoring System",
    image: "/images/Products/Product 4 – Smart Water Tank Monitoring System.webp",
    overview: "The Smart Water Tank Monitoring System provides real-time monitoring of water levels and automatically controls water pumps to prevent overflow and dry running. Users can monitor tank status from anywhere using a smartphone, reducing water wastage and ensuring uninterrupted water availability.",
    suitableFor: "Residential Buildings, Farms, Apartments, Industries",
    metrics: [
      { label: "Current Volume", value: 78, unit: "%", icon: Droplets, color: "#38BDF8" },
      { label: "Pump Engine", value: 0, customText: "Standby", icon: Cpu, color: "#9CA3AF" },
      { label: "Est. Capacity", value: 100, customText: "400L", icon: Database, color: "#00D084" }
    ]
  },
  {
    id: 5,
    name: "AI Smart Greenhouse Controller",
    image: "/images/Products/Product 5 – AI Smart Greenhouse Controller.webp",
    overview: "The AI Smart Greenhouse Controller intelligently manages irrigation, ventilation, lighting, and environmental conditions to maintain the ideal climate for crop growth. By continuously analyzing sensor data, the system optimizes greenhouse operations, improving productivity while reducing energy and water consumption.",
    suitableFor: "Greenhouses, Nurseries, Commercial Farms",
    metrics: [
      { label: "Temperature", value: 28, unit: "°C", icon: Thermometer, color: "#F97316" },
      { label: "Humidity", value: 65, unit: "%", icon: Wind, color: "#38BDF8" },
      { label: "CO2 Levels", value: 40, customText: "400ppm", icon: Activity, color: "#A855F7" }
    ]
  },
  {
    id: 6,
    name: "Smart Plant Health Monitoring Kit",
    image: "/images/Products/Product 6 – Smart Plant Health Monitoring Kit.webp",
    overview: "The Smart Plant Health Monitoring Kit combines artificial intelligence and computer vision to monitor plant health in real time. The system detects early signs of diseases, nutrient deficiencies, and environmental stress, allowing growers to take preventive action before crop damage occurs.",
    suitableFor: "Farmers, Researchers, Educational Institutions, Greenhouses",
    metrics: [
      { label: "Plant Health", value: 92, unit: "%", icon: Sprout, color: "#00D084" },
      { label: "Disease Status", value: 100, customText: "Clear", icon: ShieldAlert, color: "#F4C542" },
      { label: "Growth Stage", value: 60, customText: "Vegetative", icon: Activity, color: "#38BDF8" }
    ]
  },
  {
    id: 7,
    name: "Smart Indoor Farming System",
    image: "/images/Products/Product 7 – Smart Indoor Farming Automation System.webp",
    overview: "The Smart Indoor Farming System brings sustainable farming into homes and offices through a fully automated growing solution. Equipped with smart irrigation, LED grow lighting, environmental monitoring, and IoT connectivity, the system allows users to cultivate fresh vegetables and herbs throughout the year.",
    suitableFor: "Homes, Offices, Apartments, Smart Homes",
    metrics: [
      { label: "LED Intensity", value: 80, unit: "%", icon: Lightbulb, color: "#F4C542" },
      { label: "Soil Moisture", value: 60, unit: "%", icon: Droplets, color: "#38BDF8" },
      { label: "Temperature", value: 24, unit: "°C", icon: Thermometer, color: "#F97316" }
    ]
  },
  {
    id: 8,
    name: "Modular Smart Agriculture Starter Kit",
    image: "/images/Products/Product 8 – Modular Smart Agriculture Starter Kit.webp",
    overview: "The Modular Smart Agriculture Starter Kit is an educational and development platform designed for students, researchers, startups, and innovators. It includes programmable controllers, sensors, automation modules, and IoT connectivity, enabling users to build and experiment with real-world smart agriculture applications.",
    suitableFor: "Students, Engineering Colleges, Researchers, Startups",
    metrics: [
      { label: "Active Nodes", value: 100, customText: "4 Online", icon: Cpu, color: "#00D084" },
      { label: "Sensor Health", value: 98, unit: "%", icon: ShieldAlert, color: "#38BDF8" },
      { label: "System Load", value: 24, unit: "%", icon: Activity, color: "#A855F7" }
    ]
  }
];

const Agrotech = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPopup = (keyOrObj) => {
    if (typeof keyOrObj === 'string') {
      setActivePopup(popupData[keyOrObj]);
    } else {
      // Handle direct product object
      setActivePopup({
        title: keyOrObj.name,
        image: keyOrObj.image,
        desc: keyOrObj.overview,
        suitableFor: keyOrObj.suitableFor,
        metrics: keyOrObj.metrics
      });
    }
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen relative font-sans text-gray-800">
      <FuturisticBackground />

      <style>{`
        .glass-card {
          background: rgba(4, 28, 24, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen lg:min-h-[750px] bg-gray-900 text-white overflow-hidden">
        
        {bgImages.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${bgIndex === idx ? 'opacity-80' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10 lg:py-24"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="inline-block bg-[#1f592e] border border-green-400 text-white font-bold px-6 py-2 rounded-lg mb-8 shadow-lg text-sm tracking-wide">
            தமிழ்நாடு விவசாயம்
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl drop-shadow-lg">
            <span className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">AI & IoT</span> Powered <span className="text-transparent animate-flow-bg font-black tracking-tight" style={{ backgroundImage: `url('/images/agrotech/photo_2026-07-06_15-37-01.webp')`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.7)', backgroundSize: '300% auto', filter: 'brightness(1.5)' }}>Agriculture</span> <br/><span className="text-[#aaff99]">for Every Tamil Nadu Farmer</span>
          </motion.h2>
          
          <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-bold text-gray-200 mb-3 drop-shadow-md">
            IoT + AI Technology for Sustainable Future
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-300 font-semibold mb-6 max-w-xl border-l-4 border-[#aaff99] pl-4">
            தொழில்நுட்பத்துடன் விவசாயம், தமிழ்நாட்டின் பெருமை!
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:gap-6 mb-12">
            {[
              { id: "IoT Monitoring", icon: <MdSettingsRemote />, title: "IoT Monitoring", sub: "Real-time Data" },
              { id: "Drone Services", icon: <MdPrecisionManufacturing />, title: "Drone Services", sub: "Spraying" },
              { id: "AI Advisory", icon: <MdPsychology />, title: "AI Advisory", sub: "Suggestions" },
              { id: "Irrigation Control", icon: <MdWaterDrop />, title: "Irrigation", sub: "Smart Water" },
              { id: "Pest & Disease", icon: <MdBugReport />, title: "Pest Control", sub: "Detection" },
            ].map((feat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                onClick={() => openPopup(feat.id)}
                className="bg-white/10 backdrop-blur-md text-white p-4 lg:p-6 rounded-2xl shadow-xl w-full lg:w-56 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/20 cursor-pointer transition-all border border-white/20 hover:border-green-400 hover:shadow-green-500/40"
              >
                <div className="text-4xl lg:text-5xl text-[#aaff99] mb-2 lg:mb-4 drop-shadow-md">{feat.icon}</div>
                <h4 className="text-sm lg:text-lg font-bold mb-1 leading-tight">{feat.title}</h4>
                <p className="text-[10px] lg:text-xs text-gray-300 font-medium">{feat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* AI Workflow Overlay - Normal Document Flow (No Overlapping!) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
            className="w-full lg:w-max mx-auto z-10 pointer-events-none mt-12"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-200">
              <h4 className="text-gray-900 font-extrabold text-lg lg:text-xl mb-1 text-center lg:text-left">AI Powered Smart Farming</h4>
              <p className="text-green-700 text-xs lg:text-sm mb-6 font-bold text-center lg:text-left">செயற்கை நுண்ணறிவு மூலம் விவசாயத்திற்கு புதிய வழி</p>
              
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-between gap-6 text-gray-800">
                {[
                  { icon: <MdSensors />, title: "Data Collection", sub: "from Sensors" },
                  { icon: <MdAnalytics />, title: "Data Analysis", sub: "AI Processing" },
                  { icon: <MdPsychology />, title: "Smart Decision", sub: "AI Logic" },
                  { icon: <MdSettingsRemote />, title: "Action", sub: "In Field" },
                  { icon: <FaLeaf />, title: "Better Yield", sub: "Sustainable" },
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center w-full sm:w-24 lg:w-28">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center text-green-700 text-2xl lg:text-3xl shadow-md mb-2 lg:mb-3 border border-gray-200">
                        {step.icon}
                      </div>
                      <span className="text-[10px] lg:text-sm font-bold leading-tight mb-1">{step.title}</span>
                      <span className="text-[9px] lg:text-xs text-gray-500 font-medium">{step.sub}</span>
                    </div>
                    {idx < 4 && <MdArrowForward className="hidden sm:block text-gray-300 text-xl lg:text-2xl" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 2. ADVANCED LIVE FIELD MONITORING SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
          <span className="w-2 h-8 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">Live Field Monitoring</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <motion.div variants={fadeUp} onClick={() => openPopup("Field Camera")} className="col-span-1 lg:col-span-2 glass-card rounded-3xl overflow-hidden shadow-xl relative min-h-[300px] cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1 group">
             <img src="/images/agrotech/photo_2026-07-06_15-37-05.webp" alt="Field Camera" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
             <div className="absolute top-6 left-6 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>LIVE
             </div>
             <div className="absolute bottom-6 left-6 text-white">
               <h4 className="font-extrabold text-2xl drop-shadow-md">Field Camera</h4>
               <p className="text-sm text-gray-200 font-medium drop-shadow-md mt-1">Control Panel Overview</p>
             </div>
             <div className="absolute bottom-6 right-6 text-white/80 group-hover:text-white cursor-pointer text-6xl drop-shadow-xl transition-all group-hover:scale-110">
               <MdPlayCircleOutline />
             </div>
          </motion.div>

          {/* 1. Soil Moisture Telemetry Card */}
          <motion.div variants={fadeUp} onClick={() => openPopup("Soil Moisture")} className="glass-card p-6 md:p-7 rounded-3xl shadow-lg border border-blue-500/30 flex flex-col justify-between cursor-pointer hover:border-blue-400/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-[300px] group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">Soil Moisture</span>
                <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  <MdWaterDrop className="text-xl" />
                </span>
              </div>
              <h3 className="text-5xl font-black text-white tracking-tighter">45<span className="text-3xl text-blue-400 font-bold">%</span></h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-blue-200 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-500/40">Optimal</span>
                <span className="text-[11px] text-gray-400 font-medium">Zone 2 Sensor</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs text-blue-200/90 font-medium">
              <span>Depth: 15cm</span>
              <span className="flex items-center gap-1.5 text-green-400 font-bold"><span className="w-2 h-2 rounded-full bg-green-400 animate-ping" /> Live Sync</span>
            </div>

            {/* AI Generated 3D Telemetry Asset with Soft Ambient Glow */}
            <div className="absolute -bottom-4 -right-4 w-44 h-44 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
              <img 
                src="/images/agrotech/soil_moisture_ai.webp" 
                alt="Soil Moisture AI Sensor"
                loading="lazy"
                decoding="async"
                width="176"
                height="176"
                className="w-full h-full object-contain rounded-2xl relative z-10 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* 2. Micro-Climate Temperature Card */}
          <motion.div variants={fadeUp} onClick={() => openPopup("Temperature")} className="glass-card p-6 md:p-7 rounded-3xl shadow-lg border border-orange-500/30 flex flex-col justify-between cursor-pointer hover:border-orange-400/80 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-[300px] group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">Temperature</span>
                <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 group-hover:scale-110 group-hover:bg-orange-500/30 transition-all">
                  <MdSensors className="text-xl" />
                </span>
              </div>
              <h3 className="text-5xl font-black text-white tracking-tighter">32.4<span className="text-3xl text-orange-400 font-bold">°C</span></h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-orange-200 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-500/40">Normal Range</span>
                <span className="text-[11px] text-gray-400 font-medium">Canopy Level</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs text-orange-200/90 font-medium">
              <span>Heat Index: 34°</span>
              <span className="flex items-center gap-1.5 text-green-400 font-bold"><span className="w-2 h-2 rounded-full bg-green-400 animate-ping" /> Live Sync</span>
            </div>

            {/* AI Generated 3D Telemetry Asset with Soft Ambient Glow */}
            <div className="absolute -bottom-4 -right-4 w-44 h-44 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl" />
              <img 
                src="/images/agrotech/temperature_ai.webp" 
                alt="Temperature AI Sensor"
                loading="lazy"
                decoding="async"
                width="176"
                height="176"
                className="w-full h-full object-contain rounded-2xl relative z-10 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* 3. Atmospheric Humidity Card */}
          <motion.div variants={fadeUp} onClick={() => openPopup("Humidity")} className="glass-card p-6 md:p-7 rounded-3xl shadow-lg border border-indigo-500/30 flex flex-col justify-between cursor-pointer hover:border-indigo-400/80 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-[300px] group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">Atmospheric Humidity</span>
                <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all">
                  <MdAnalytics className="text-xl" />
                </span>
              </div>
              <h3 className="text-5xl font-black text-white tracking-tighter">65<span className="text-3xl text-indigo-400 font-bold">%</span></h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-indigo-200 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-500/40">Normal</span>
                <span className="text-[11px] text-gray-400 font-medium">Condensation Safe</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs text-indigo-200/90 font-medium">
              <span>Dew Point: 21°C</span>
              <span className="flex items-center gap-1.5 text-green-400 font-bold"><span className="w-2 h-2 rounded-full bg-green-400 animate-ping" /> Live Sync</span>
            </div>

            {/* AI Generated 3D Telemetry Asset with Soft Ambient Glow */}
            <div className="absolute -bottom-4 -right-4 w-44 h-44 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl" />
              <img 
                src="/images/agrotech/humidity_ai.webp" 
                alt="Humidity AI Sensor"
                loading="lazy"
                decoding="async"
                width="176"
                height="176"
                className="w-full h-full object-contain rounded-2xl relative z-10 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} onClick={() => openPopup("Drone Status")} className="col-span-1 lg:col-span-3 glass-card p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="mb-6 md:mb-0 w-full">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Automated Aerial Operations</p>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-20 h-20 bg-black/40 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-green-900/40 group-hover:text-green-400 transition-colors shadow-inner border border-white/10">
                  <MdPrecisionManufacturing className="text-5xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">Drone Status</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-sm shadow-green-500"></span>
                    <p className="text-base font-bold text-green-300 bg-green-900/40 px-3 py-1 rounded-md border border-green-500/30">In Operation (Sector B)</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-black/50 rounded-full h-3 max-w-sm mt-6 border border-white/10 relative">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-green-500 to-green-300 h-3 rounded-full relative shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                >
                   <div className="absolute -top-6 right-0 text-xs font-bold text-green-300">Battery: 85%</div>
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-64 h-64 rounded-2xl border-8 border-black/30 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
               <img src="/images/agrotech/photo_2026-07-06_15-37-02.webp" alt="Drone" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* 3. NEW SECTION: AI CROP YIELD & ALERTS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left: AI Crop Yield Prediction */}
        <motion.div variants={fadeUp} className="glass-card p-8 md:p-10 rounded-3xl shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-900/40 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 text-2xl">
              <MdPsychology />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">AI Yield Prediction</h3>
              <p className="text-sm text-gray-400 font-medium">Machine Learning Harvest Analytics</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Crop 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-gray-200 text-lg flex items-center gap-2">Rice (Ponni) <FaLeaf className="text-green-400 text-sm" /></h4>
                  <p className="text-xs text-gray-400">Sector A • Day 85 of 120</p>
                </div>
                <div className="text-right">
                  <span className="text-blue-400 font-extrabold text-xl">4.2 Tons</span>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Est. Yield</p>
                </div>
              </div>
              <div className="w-full bg-black/40 rounded-full h-4 border border-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-300 h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                ></motion.div>
              </div>
            </div>

            {/* Crop 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-gray-200 text-lg flex items-center gap-2">Sugarcane <FaTractor className="text-orange-400 text-sm" /></h4>
                  <p className="text-xs text-gray-400">Sector C • Day 210 of 360</p>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-extrabold text-xl">45 Tons</span>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Est. Yield</p>
                </div>
              </div>
              <div className="w-full bg-black/40 rounded-full h-4 border border-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "58%" }} transition={{ duration: 1.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-green-500 to-green-300 h-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                ></motion.div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => {
              document.getElementById('yield-analyzer-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-10 w-full bg-blue-900/30 hover:bg-blue-800/40 text-blue-300 font-bold py-3 rounded-xl border border-blue-500/30 transition-colors text-sm flex items-center justify-center gap-2"
          >
            Try AI Yield Analyzer
          </button>
        </motion.div>

        {/* Right: Smart Field Alerts */}
        <motion.div variants={fadeUp} className="glass-card p-8 md:p-10 rounded-3xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-900/30 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 text-2xl relative">
                <MdSensors />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Smart Alerts</h3>
                <p className="text-sm text-gray-400 font-medium">IoT Sensor Notifications</p>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-300 bg-black/40 border border-white/10 px-3 py-1 rounded-full">LIVE</span>
          </div>

          <div className="space-y-4">
            {/* Alert 1 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-red-900/20 border border-red-900/50 hover:shadow-md transition-shadow cursor-pointer">
              <MdWarning className="text-red-400 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-200 text-sm">Pest Threat Detected</h4>
                <p className="text-xs text-red-300/80 mt-1">Computer vision camera identified potential locusts in Sector 4. AI recommends immediate Neem oil spraying.</p>
                <span className="text-[10px] font-bold text-red-400 mt-2 block">10 mins ago</span>
              </div>
            </motion.div>

            {/* Alert 2 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-blue-900/20 border border-blue-900/50 hover:shadow-md transition-shadow cursor-pointer">
              <MdInfo className="text-blue-400 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-200 text-sm">Auto-Irrigation Triggered</h4>
                <p className="text-xs text-blue-300/80 mt-1">Soil moisture dropped below 30% threshold in Sector 2. Smart valves opened successfully.</p>
                <span className="text-[10px] font-bold text-blue-400 mt-2 block">1 hour ago</span>
              </div>
            </motion.div>

            {/* Alert 3 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-green-900/20 border border-green-900/50 hover:shadow-md transition-shadow cursor-pointer">
              <MdCheckCircle className="text-green-400 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-green-200 text-sm">Drone Operation Complete</h4>
                <p className="text-xs text-green-300/80 mt-1">Routine aerial monitoring finished for Sector A. No anomalies found. Battery docking at 25%.</p>
                <span className="text-[10px] font-bold text-green-400 mt-2 block">3 hours ago</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.section>

      {/* 4.5. NEW SECTION: CROP COST ESTIMATION ENGINE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-12 relative z-10"
      >
        <CostEngineApp />
      </motion.section>

      {/* 5. OUR AGROTECH PRODUCTS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-900/50 border border-green-500/30 text-green-300 font-bold rounded-full text-sm mb-4">
            Our Innovations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Agrotech <span className="text-green-400">Products</span>
          </h2>
          <p className="text-gray-200 max-w-2xl text-lg drop-shadow">
            Explore our range of smart agricultural devices designed to bring intelligence and automation to your farming, gardening, and research needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <motion.div 
              key={product.id} 
              variants={fadeUp}
              onClick={() => openPopup(product)}
              className="glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 flex flex-col group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                  {product.overview}
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Suitable For</p>
                  <p className="text-sm font-semibold text-green-400 leading-tight">
                    {product.suitableFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- POPUP MODAL OVERLAY --- */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" 
            onClick={closePopup}
          ></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
            className="relative glass-card bg-[rgba(4,28,24,0.9)] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col z-10 border border-white/20"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-md shadow-lg"
            >
              <MdClose className="text-2xl" />
            </button>
            
            <div className="w-full h-48 md:h-80 bg-gray-900 relative shrink-0">
              <img src={activePopup.image} alt={activePopup.title} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041C18] via-transparent to-transparent"></div>
              <h3 className="absolute bottom-4 md:bottom-6 left-6 md:left-8 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
                {activePopup.title}
              </h3>
            </div>
            
            <div className="p-8 md:p-10">
              <p className="text-gray-200 leading-relaxed text-lg font-medium border-l-4 border-green-400 pl-6 shadow-sm">
                {activePopup.desc}
              </p>

              {/* Live Data Simulator Dashboard */}
              {activePopup.metrics && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Activity className="text-[#00D084]" /> Live Sensor Telemetry
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activePopup.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.1) }}
                          className="bg-black/40 rounded-xl p-4 border border-white/5 relative overflow-hidden group"
                        >
                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <Icon size={18} style={{ color: metric.color }} />
                            <span className="text-xl font-extrabold text-white">
                              {metric.customText || `${metric.value}${metric.unit}`}
                            </span>
                          </div>
                          
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 relative z-10">{metric.label}</p>
                          
                          {/* Animated Progress Bar */}
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden relative z-10">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 + (idx * 0.1) }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: metric.color }}
                            />
                          </div>

                          {/* Subtle background glow */}
                          <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-[20px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40" style={{ backgroundColor: metric.color }}></div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activePopup.suitableFor && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Suitable For</p>
                  <p className="text-lg font-semibold text-green-400">
                    {activePopup.suitableFor}
                  </p>
                </div>
              )}
              
              <button 
                onClick={closePopup}
                className="mt-10 w-full bg-[#1f592e] hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors shadow-xl text-lg flex justify-center items-center gap-2"
              >
                <MdArrowForward className="text-xl rotate-180" /> Return to Dashboard
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Agrotech;
