import React from 'react';

const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1] bg-[#041C18] pointer-events-none select-none">
      {/* 1. Ambient Aurora Mesh Gradients (Hardware-accelerated CSS, 0 JS thread work) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none opacity-35 blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0,208,132,0.3) 0%, rgba(4,28,24,0) 70%)',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute top-[30%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,194,199,0.25) 0%, rgba(4,28,24,0) 70%)',
        }}
      />
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(4,28,24,0) 70%)',
        }}
      />

      {/* 2. Sleek Hexagon Grid (Pure SVG pattern, ultra crisp and zero JS/repaint cost) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGridOpt" width="52" height="90" patternUnits="userSpaceOnUse">
            <path
              d="M26,0 L52,15 L52,45 L26,60 L0,45 L0,15 Z M26,60 L52,75 L52,105 L26,120 L0,105 L0,75 Z"
              fill="none"
              stroke="rgba(0, 208, 132, 0.15)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGridOpt)" />
      </svg>

      {/* 3. Subtle Cybernetic Scan Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,243,255,0.02)] to-transparent pointer-events-none" />

      {/* 4. Center Vignette Mask */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(4,28,24,0.3) 0%, rgba(4,28,24,0.92) 100%)'
        }}
      />
    </div>
  );
};

export default FuturisticBackground;
