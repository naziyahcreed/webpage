import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FuturisticBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hexagon Grid Properties
    const hexRadius = 40; // Size of honeycomb cells
    const hexHeight = hexRadius * 2;
    const hexWidth = Math.sqrt(3) * hexRadius;
    const vertDist = hexHeight * 0.75;
    const horizDist = hexWidth;

    // Mouse interaction variables
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    const drawHexagon = (x, y, glowIntensity) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const theta = (Math.PI / 3) * i - Math.PI / 6; // Pointy topped hexagons
        const px = x + hexRadius * Math.cos(theta);
        const py = y + hexRadius * Math.sin(theta);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      
      // Base color is a very faint tech green
      let strokeColor = 'rgba(0, 208, 132, 0.05)';
      ctx.lineWidth = 1;
      
      // If the blue light is affecting this hexagon, it glows brightly
      if (glowIntensity > 0) {
        const alpha = Math.min(glowIntensity, 1);
        
        // White-hot core for intense brightness near the cursor
        if (alpha > 0.85) {
          strokeColor = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.shadowBlur = 80 * alpha;
          ctx.shadowColor = '#ffffff';
        } else {
          strokeColor = `rgba(0, 243, 255, ${alpha})`;
          ctx.fillStyle = `rgba(0, 243, 255, ${alpha * 0.7})`;
          ctx.shadowBlur = 50 * alpha;
          ctx.shadowColor = '#00f3ff';
        }
        
        ctx.lineWidth = 2 + (alpha * 4);
        ctx.fill();
      } else {
        ctx.shadowBlur = 0;
      }
      
      ctx.strokeStyle = strokeColor;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / horizDist) + 1;
      const rows = Math.ceil(canvas.height / vertDist) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Calculate center of this hexagon
          let x = col * horizDist;
          let y = row * vertDist;
          
          // Offset odd rows
          if (row % 2 === 1) {
            x += horizDist / 2;
          }

          let totalGlow = 0;

          // 1. Constant glow around the cursor - Increased radius for a brighter/larger light
          const distToMouse = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          if (distToMouse < 400) {
            let cursorGlow = 1 - (distToMouse / 400);
            totalGlow += Math.pow(cursorGlow, 2);
          }

          drawHexagon(x, y, totalGlow);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-[-1] bg-[#041C18] pointer-events-none">
      
      {/* 1. Base Aurora Mesh Gradient Blobs for mood */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[120px] md:blur-[160px] opacity-40"
        style={{ backgroundColor: '#063B35' }}
        animate={{ x: ['0%', '15%', '0%'], y: ['0%', '10%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen blur-[120px] md:blur-[160px] opacity-30"
        style={{ backgroundColor: '#0A5F4D' }}
        animate={{ x: ['0%', '-15%', '0%'], y: ['0%', '-15%', '0%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 2. Interactive Honeycomb / Hexagon Grid (Canvas) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* 3. Center Clean Mask Overlay (Ensures text readability in the middle of screen) */}
      <div 
        className="absolute inset-0 bg-[#041C18]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          opacity: 0.85
        }}
      />
    </div>
  );
};

export default FuturisticBackground;
