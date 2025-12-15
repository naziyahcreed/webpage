import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import id1 from "../assets/images/b2.jpg";
import id2 from "../assets/images/b1.jpg";
import id3 from "../assets/images/id3.png";

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
      className="flex justify-center items-center bg-[var(--bg-primary)]">
      <div
        className="flex justify-center items-center w-full h-[700px] bg-cover bg-center 
        max-sm:w-[400px] max-sm:h-[400px] max-sm:rounded-md max-md:w-full max-md:h-[400px] 
        max-md:rounded-md max-lg:w-full max-lg:h-[500px] max-lg:rounded-md max-xl:w-full 
        max-xl:h-[500px] max-xl:rounded-md max-2xl:w-full max-2xl:h-[600px] max-2xl:rounded-md 
        max-3xl:w-full max-3xl:h-[700px] max-3xl:rounded-md max-4xl:w-full max-4xl:h-[700px] 
        max-4xl:rounded-md max-5xl:w-full max-5xl:h-[900px] max-5xl:rounded-md max-6xl:w-full 
        max-6xl:h-[700px] hover:border-2 border-[var(--text-primary)] rounded-md"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={800}
          className="w-full h-full rounded-md"
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

              {/* Hover overlay text (moved lower) */}
              <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                group-hover:opacity-100 transition-all 
                flex justify-center items-end pb-16 text-4xl font-bold text-[var(--accent)]" // ✅ text lower
              >
                {slide.text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
