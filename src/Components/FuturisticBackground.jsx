import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const HEX_RADIUS = 30;
const HEX_WIDTH = Math.sqrt(3) * HEX_RADIUS; // ~51.9615
const HEX_HEIGHT = 2 * HEX_RADIUS; // 60
const Y_OFFSET = HEX_HEIGHT * 0.75; // 45

const HexagonGrid = () => {
  const points = "25.98,-15 25.98,15 0,30 -25.98,15 -25.98,-15 0,-30";

  const pulsingHexes = useMemo(() => {
    const selected = [];
    const cols = 50; // Wide enough for most screens
    const rows = 40;
    for (let i = 0; i < 40; i++) {
      const r = Math.floor(Math.random() * rows);
      const c = Math.floor(Math.random() * cols);
      const x = c * HEX_WIDTH + (r % 2 === 1 ? HEX_WIDTH / 2 : 0);
      const y = r * Y_OFFSET;
      selected.push({
        id: `${r}-${c}-${i}`,
        x,
        y,
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 5
      });
    }
    return selected;
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-[0.45]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGrid" width={HEX_WIDTH} height={Y_OFFSET * 2} patternUnits="userSpaceOnUse">
            <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none">
              <polygon points={points} transform={`translate(${HEX_WIDTH / 2}, ${HEX_HEIGHT / 2})`} />
              <polygon points={points} transform={`translate(0, ${HEX_HEIGHT / 2 + Y_OFFSET})`} />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
        
        {/* Pulsing Hexagons */}
        <g>
          {pulsingHexes.map((hex) => (
            <motion.polygon
              key={hex.id}
              points={points}
              transform={`translate(${hex.x + HEX_WIDTH / 2}, ${hex.y + HEX_HEIGHT / 2})`}
              fill="rgba(0, 208, 132, 0.08)"
              stroke="rgba(0, 194, 199, 0.3)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: hex.duration,
                repeat: Infinity,
                delay: hex.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

const AuroraMesh = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 mix-blend-screen">
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,208,132,0.3) 0%, rgba(0,0,0,0) 70%)', top: '-10%', left: '-10%' }}
        animate={{
          x: ['0%', '15%', '0%'],
          y: ['0%', '15%', '0%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.25) 0%, rgba(0,0,0,0) 70%)', bottom: '-10%', right: '-5%' }}
        animate={{
          x: ['0%', '-15%', '0%'],
          y: ['0%', '-10%', '0%'],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[70vw] h-[70vw] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(0,0,0,0) 70%)', top: '20%', left: '20%' }}
        animate={{
          x: ['0%', '25%', '0%'],
          y: ['0%', '-15%', '0%'],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

const EnergyFlow = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-color-dodge">
      {/* Wave 1 - Tech Cyan */}
      <motion.div
        className="absolute top-[20%] w-[800px] h-[300px] rounded-[100%] blur-[90px] opacity-50"
        style={{ background: 'radial-gradient(ellipse, rgba(0,194,199,0.5) 0%, rgba(0,0,0,0) 70%)' }}
        animate={{
          x: ['-100vw', '150vw'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      {/* Wave 2 Diagonal - Emerald */}
      <motion.div
        className="absolute top-[60%] w-[1000px] h-[400px] rounded-[100%] blur-[110px] opacity-40"
        style={{ background: 'radial-gradient(ellipse, rgba(0,208,132,0.4) 0%, rgba(0,0,0,0) 70%)' }}
        animate={{
          x: ['150vw', '-100vw'],
          y: ['30vh', '-30vh'],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      {/* Wave 3 Slow - Leaf Green & Golden Accent mix */}
      <motion.div
        className="absolute top-[40%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(126,217,87,0.3) 0%, rgba(244,197,66,0.15) 40%, rgba(0,0,0,0) 70%)' }}
        animate={{
          x: ['-50vw', '120vw'],
          y: ['-20vh', '20vh'],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

const DataStreams = () => {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      {/* Horizontal Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C2C7] to-transparent opacity-20"
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Vertical Scan Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#00D084] to-transparent opacity-10"
        animate={{
          left: ['-10%', '110%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating IoT Signal Dashes */}
      <motion.div
        className="absolute top-[25%] left-[-10%] w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-30"
        animate={{
          x: ['0vw', '120vw'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
      />
      <motion.div
        className="absolute top-[75%] right-[-10%] w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#7ED957] to-transparent opacity-20"
        animate={{
          x: ['0vw', '-120vw'],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 6 }}
      />
      <motion.div
        className="absolute top-[50%] left-[-10%] w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#F4C542] to-transparent opacity-30"
        animate={{
          x: ['0vw', '120vw'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 1 }}
      />
    </div>
  );
};

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white opacity-40"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`,
          }}
          animate={{
            y: ['-30px', '30px', '-30px'],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
            opacity: { duration: p.duration * 0.7, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
          }}
        />
      ))}
    </div>
  );
};

const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1] bg-[#041C18] pointer-events-none selection:bg-transparent">
      {/* 1. Deep Background Mesh (Aurora) */}
      <AuroraMesh />

      {/* 2. Flowing Energy Lights */}
      <EnergyFlow />

      {/* 3. Honeycomb Grid Structure */}
      <HexagonGrid />

      {/* 4. Digital Signals and Scan Lines */}
      <DataStreams />

      {/* 5. Floating Ambient Particles */}
      <FloatingParticles />

      {/* 6. Center Radial Mask to Ensure Hero Text Readability */}
      <div 
        className="absolute inset-0 bg-[#041C18] z-30"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
          opacity: 0.75
        }}
      />
    </div>
  );
};

export default FuturisticBackground;

