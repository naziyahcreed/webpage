import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import id1 from "/images/b2.jpg";
import id2 from "/images/b1.jpg";
import id3 from "/images/id3.png";

const slides = [
  { id: 1, img: id1, text: "TRUST US" },
  { id: 2, img: id2, text: "LEARN MORE" },
  { id: 3, img: id3, text: "JOIN US" },
];

export default function Image() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center bg-[var(--bg-primary)] px-4">
      <div
        className="relative flex justify-center items-center w-full h-[700px] 
        max-sm:w-[400px] max-sm:h-[400px] max-md:w-full max-md:h-[400px] 
        max-lg:w-full max-lg:h-[500px] max-xl:w-full 
        max-xl:h-[500px] max-2xl:w-full max-2xl:h-[600px] 
        max-3xl:w-full max-3xl:h-[700px] max-4xl:w-full max-4xl:h-[700px] 
        max-6xl:h-[700px] rounded-[10px] overflow-hidden p-[2px] transition-shadow duration-500 hover:shadow-[0_0_30px_5px_var(--accent)]"
      >
        {/* Animated Running Border Background (Sharp, no glow, golden only) */}
        <div className="absolute w-[200vw] h-[200vw] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,var(--accent)_70%,var(--accent)_100%)]"></div>

        {/* Inner container to hold the Swiper and hide the center of the gradient */}
        <div className="relative w-full h-full rounded-md overflow-hidden z-10 bg-[var(--bg-primary)]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            loop
            speed={800}
            className="w-full h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ update index on slide change
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative group w-full h-full">
              {/* ✅ Restart zoom animation every slide change using key + index */}
              <motion.img
                key={activeIndex + "-" + index}  // 🔥 Forces animation restart each slide
                src={slide.img}
                alt=""
                className="w-full h-full object-cover rounded-md"
                initial={{ scale: 1 }}
                animate={activeIndex === index ? { scale: 1.1 } : { scale: 1 }} // ✅ active slide only zoom
                transition={{ duration: 3, ease: "linear" }} // ✅ 3 sec zoom until next slide
              />

              {/* Hover overlay text (smooth fade and slide up) */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0 
                group-hover:opacity-100 transition-all duration-300 ease-out
                flex justify-center items-end pb-10 group-hover:pb-16 text-4xl font-bold text-[var(--accent)] backdrop-blur-[2px]"
              >
                <span className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  {slide.text}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
