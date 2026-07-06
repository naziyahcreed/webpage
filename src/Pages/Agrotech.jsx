import React, { useEffect, useState, useRef } from 'react';
import { 
  MdSettingsRemote, MdPrecisionManufacturing, MdPsychology,
  MdWaterDrop, MdBugReport, MdArrowForward, MdSensors, MdAnalytics,
  MdPlayCircleOutline, MdClose, MdWarning, MdInfo, MdCheckCircle
} from 'react-icons/md';
import { FaLeaf, FaTractor } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// --- IMPROVED 3D MINI COMPONENTS FOR CARDS ---

const WaterDrop3D = () => {
  const groupRef = useRef();
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
  });
  
  return (
    <group ref={groupRef} scale={1.1} position={[0, 0.2, 0]}>
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={1} opacity={1} metalness={0.2} roughness={0} ior={1.52} thickness={2} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <coneGeometry args={[0.7, 1.4, 64]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={1} opacity={1} metalness={0.2} roughness={0} ior={1.52} thickness={2} />
      </mesh>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i * 2.1) * 1.5, Math.sin(i * 1.5) * 0.8, Math.sin(i * 2.1) * 1.5]} scale={0.15}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial color="#93c5fd" transmission={1} roughness={0} thickness={0.5} />
        </mesh>
      ))}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 10, 5]} intensity={3} color="#ffffff" />
    </group>
  );
};

const Sun3D = () => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group scale={1.2}>
        <mesh ref={meshRef}>
           <sphereGeometry args={[1, 64, 64]} />
           <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={3} roughness={0.2} wireframe={false} />
        </mesh>
        <mesh scale={1.1}>
           <icosahedronGeometry args={[1, 2]} />
           <meshStandardMaterial color="#fef08a" emissive="#eab308" emissiveIntensity={1} wireframe={true} transparent opacity={0.5} />
        </mesh>
        <mesh scale={1.4}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#fb923c" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh scale={1.7}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#ef4444" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={8} color="#fef08a" distance={15} />
    </Float>
  );
};

const Cloud3D = () => {
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y -= 0.005;
  });
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={1}>
      <group ref={groupRef} scale={0.9} position={[0, -0.2, 0]}>
        <mesh position={[0, 0, 0]}><sphereGeometry args={[1, 64, 64]} /><meshStandardMaterial color="#ffffff" roughness={1} metalness={0} /></mesh>
        <mesh position={[-0.8, -0.2, 0]}><sphereGeometry args={[0.7, 64, 64]} /><meshStandardMaterial color="#ffffff" roughness={1} metalness={0} /></mesh>
        <mesh position={[0.8, -0.2, 0]}><sphereGeometry args={[0.7, 64, 64]} /><meshStandardMaterial color="#ffffff" roughness={1} metalness={0} /></mesh>
        <mesh position={[-0.4, 0.5, 0]}><sphereGeometry args={[0.6, 64, 64]} /><meshStandardMaterial color="#ffffff" roughness={1} metalness={0} /></mesh>
        <mesh position={[0.4, 0.5, 0]}><sphereGeometry args={[0.6, 64, 64]} /><meshStandardMaterial color="#ffffff" roughness={1} metalness={0} /></mesh>
      </group>
      <ambientLight intensity={1.5} />
      <directionalLight position={[-5, 5, 5]} intensity={1} color="#ffffff" />
    </Float>
  );
};

// Popup Data Mapping
const popupData = {
  "IoT Monitoring": {
    title: "IoT Monitoring",
    image: "/images/agrotech/photo_2026-07-06_15-37-05.jpg",
    desc: "Real-time field data collection using advanced IoT sensors. Monitor soil health, micro-climate, and crop conditions instantly from anywhere in the world."
  },
  "Drone Services": {
    title: "Drone Services",
    image: "/images/agrotech/photo_2026-07-06_15-37-02.jpg",
    desc: "Precision drone monitoring and automated spraying. Cover large acres of land in minutes, ensuring even distribution of nutrients and pesticides while saving time and resources."
  },
  "AI Advisory": {
    title: "AI Advisory",
    image: "/images/agrotech/photo_2026-07-06_15-36-55.jpg",
    desc: "Smart suggestions powered by Machine Learning. Our AI analyzes historical and real-time data to predict weather impacts, optimize harvest times, and recommend crop management strategies."
  },
  "Irrigation Control": {
    title: "Irrigation Control",
    image: "/images/agrotech/photo_2026-07-06_15-37-07.jpg",
    desc: "Smart water management systems. Automatically trigger irrigation based on exact soil moisture levels, drastically reducing water waste and preventing over-watering."
  },
  "Pest & Disease": {
    title: "Pest & Disease",
    image: "/images/agrotech/photo_2026-07-06_15-37-04.jpg",
    desc: "Early detection and alerts for pest infestations or crop diseases. Computer vision identifies threats before they spread, allowing for targeted organic treatments."
  },
  "Field Camera": {
    title: "Live Field Camera",
    image: "/images/agrotech/photo_2026-07-06_15-37-05.jpg",
    desc: "24/7 visual monitoring of your crops. Check the physical status of your farm remotely, deter trespassers, and verify sensor alerts with live video feeds."
  },
  "Soil Moisture": {
    title: "Soil Moisture Analytics",
    image: "/images/agrotech/photo_2026-07-06_15-37-07.jpg",
    desc: "Detailed historical tracking of soil hydration levels across multiple zones. Currently at 45% (Optimal) for the vegetative growth stage of your primary crop."
  },
  "Temperature": {
    title: "Micro-Climate Temperature",
    image: "/images/agrotech/photo_2026-07-06_15-37-05.jpg",
    desc: "Continuous temperature monitoring at the canopy level. 32.4°C is within the normal tolerance for your current crop, meaning no heat-stress mitigation is currently required."
  },
  "Humidity": {
    title: "Humidity Levels",
    image: "/images/agrotech/photo_2026-07-06_15-37-04.jpg",
    desc: "Ambient humidity is currently 65%. Monitoring humidity is critical for predicting fungal diseases and optimizing the timing for drone spraying operations."
  },
  "Drone Status": {
    title: "Active Drone Operation",
    image: "/images/agrotech/photo_2026-07-06_15-37-02.jpg",
    desc: "Drone currently in operation over Sector B. Battery is at 85%. Estimated time to completion is 12 minutes. Live telemetry is nominal."
  }
};

const bgImages = [
  "/images/agrotech/photo_2026-07-06_15-36-59.jpg", 
  "/images/agrotech/photo_2026-07-06_15-37-01.jpg"  
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
    document.body.style.backgroundColor = "#f3f4f6"; 
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const openPopup = (key) => {
    setActivePopup(popupData[key]);
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
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
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

          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-3xl drop-shadow-lg">
            Smart Farming for <br/><span className="text-[#aaff99]">Tamil Nadu Agriculture</span>
          </motion.h2>
          
          <motion.h3 variants={fadeUp} className="text-xl md:text-2xl font-bold text-gray-200 mb-3 drop-shadow-md">
            IoT + AI Technology for Sustainable Future
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-300 font-semibold mb-10 max-w-xl border-l-4 border-[#aaff99] pl-4">
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
          <span className="w-2 h-8 bg-green-600 rounded-full"></span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Live Field Monitoring</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <motion.div variants={fadeUp} onClick={() => openPopup("Field Camera")} className="col-span-1 lg:col-span-2 bg-gray-900 rounded-3xl overflow-hidden shadow-xl relative min-h-[300px] border border-gray-300 cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1 group">
             <img src="/images/agrotech/photo_2026-07-06_15-37-05.jpg" alt="Field Camera" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
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

          <motion.div variants={fadeUp} onClick={() => openPopup("Soil Moisture")} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 flex flex-col justify-between cursor-pointer hover:border-blue-400 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden h-[300px]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Soil Moisture</p>
                <MdWaterDrop className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-6xl font-extrabold text-blue-900 tracking-tighter">45<span className="text-4xl text-blue-700">%</span></h3>
              <p className="text-sm font-bold text-blue-600 mt-2 bg-blue-100 w-max px-3 py-1 rounded-full">Optimal</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-60 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}><WaterDrop3D /></Canvas>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} onClick={() => openPopup("Temperature")} className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl shadow-lg border border-orange-100 flex flex-col justify-between cursor-pointer hover:border-orange-400 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden h-[300px]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Temperature</p>
                <MdSensors className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-6xl font-extrabold text-orange-900 tracking-tighter">32.4<span className="text-4xl text-orange-700">°</span></h3>
              <p className="text-sm font-bold text-orange-700 mt-2 bg-orange-100 w-max px-3 py-1 rounded-full">Normal Range</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-60 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}><Sun3D /></Canvas>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} onClick={() => openPopup("Humidity")} className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-3xl shadow-lg border border-indigo-100 flex flex-col justify-between cursor-pointer hover:border-indigo-400 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden h-[300px]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Humidity</p>
                <MdAnalytics className="text-indigo-500 text-2xl" />
              </div>
              <h3 className="text-6xl font-extrabold text-indigo-900 tracking-tighter">65<span className="text-4xl text-indigo-700">%</span></h3>
              <p className="text-sm font-bold text-indigo-600 mt-2 bg-indigo-100 w-max px-3 py-1 rounded-full">Normal</p>
            </div>
            <div className="absolute -bottom-4 -right-10 w-64 h-64 opacity-50 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}><Cloud3D /></Canvas>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} onClick={() => openPopup("Drone Status")} className="col-span-1 lg:col-span-3 bg-white p-8 rounded-3xl shadow-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between cursor-pointer hover:border-gray-400 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="mb-6 md:mb-0 w-full">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">Automated Aerial Operations</p>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-green-50 group-hover:text-green-700 transition-colors shadow-inner border border-gray-200">
                  <MdPrecisionManufacturing className="text-5xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Drone Status</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500"></span>
                    <p className="text-base font-bold text-green-700 bg-green-50 px-3 py-1 rounded-md">In Operation (Sector B)</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 max-w-sm mt-6 border border-gray-200 relative">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full relative"
                >
                   <div className="absolute -top-6 right-0 text-xs font-bold text-gray-700">Battery: 85%</div>
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-64 h-64 rounded-2xl border-8 border-gray-50 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
               <img src="/images/agrotech/photo_2026-07-06_15-37-02.jpg" alt="Drone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
        <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-2xl">
              <MdPsychology />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">AI Yield Prediction</h3>
              <p className="text-sm text-gray-500 font-medium">Machine Learning Harvest Analytics</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Crop 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2">Rice (Ponni) <FaLeaf className="text-green-500 text-sm" /></h4>
                  <p className="text-xs text-gray-500">Sector A • Day 85 of 120</p>
                </div>
                <div className="text-right">
                  <span className="text-blue-600 font-extrabold text-xl">4.2 Tons</span>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Est. Yield</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 border border-gray-200 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full"
                ></motion.div>
              </div>
            </div>

            {/* Crop 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2">Sugarcane <FaTractor className="text-orange-500 text-sm" /></h4>
                  <p className="text-xs text-gray-500">Sector C • Day 210 of 360</p>
                </div>
                <div className="text-right">
                  <span className="text-green-600 font-extrabold text-xl">45 Tons</span>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Est. Yield</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 border border-gray-200 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "58%" }} transition={{ duration: 1.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
          
          <button className="mt-10 w-full bg-gray-50 hover:bg-gray-100 text-blue-600 font-bold py-3 rounded-xl border border-blue-100 transition-colors text-sm">
            View Detailed AI Report
          </button>
        </motion.div>

        {/* Right: Smart Field Alerts */}
        <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 text-2xl relative">
                <MdSensors />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">Smart Alerts</h3>
                <p className="text-sm text-gray-500 font-medium">IoT Sensor Notifications</p>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">LIVE</span>
          </div>

          <div className="space-y-4">
            {/* Alert 1 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-red-50 border border-red-100 hover:shadow-md transition-shadow cursor-pointer">
              <MdWarning className="text-red-500 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-900 text-sm">Pest Threat Detected</h4>
                <p className="text-xs text-red-700 mt-1">Computer vision camera identified potential locusts in Sector 4. AI recommends immediate Neem oil spraying.</p>
                <span className="text-[10px] font-bold text-red-400 mt-2 block">10 mins ago</span>
              </div>
            </motion.div>

            {/* Alert 2 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
              <MdInfo className="text-blue-500 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Auto-Irrigation Triggered</h4>
                <p className="text-xs text-blue-700 mt-1">Soil moisture dropped below 30% threshold in Sector 2. Smart valves opened successfully.</p>
                <span className="text-[10px] font-bold text-blue-400 mt-2 block">1 hour ago</span>
              </div>
            </motion.div>

            {/* Alert 3 */}
            <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-green-50 border border-green-100 hover:shadow-md transition-shadow cursor-pointer">
              <MdCheckCircle className="text-green-500 text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-green-900 text-sm">Drone Operation Complete</h4>
                <p className="text-xs text-green-700 mt-1">Routine aerial monitoring finished for Sector A. No anomalies found. Battery docking at 25%.</p>
                <span className="text-[10px] font-bold text-green-400 mt-2 block">3 hours ago</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.section>

      {/* --- POPUP MODAL OVERLAY --- */}
      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer" 
            onClick={closePopup}
          ></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col z-10 border border-white/20"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-md shadow-lg"
            >
              <MdClose className="text-2xl" />
            </button>
            
            <div className="w-full h-80 bg-gray-900 relative">
              <img src={activePopup.image} alt={activePopup.title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
                {activePopup.title}
              </h3>
            </div>
            
            <div className="p-8 md:p-10 bg-gray-50">
              <p className="text-gray-700 leading-relaxed text-lg font-medium border-l-4 border-green-500 pl-6">
                {activePopup.desc}
              </p>
              
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
