import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CertificateModal({ certificate, close }) {
  const images = certificate.images || [certificate.image_url];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-lg max-w-2xl w-full p-6 relative"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-2xl font-bold text-[var(--text-primary)] z-10"
        >
          ✕
        </button>

        <div className="w-full h-80 rounded-md overflow-hidden bg-black/20">
          {images.length > 1 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full h-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${certificate.name} shot ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={images[0]}
              alt={certificate.name}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <h2 className="text-2xl font-bold mt-4">{certificate.name}</h2>
        <p className="text-[var(--text-secondary)] mt-2">{certificate.description}</p>
        <p className="font-semibold text-[var(--accent)] mt-3">{certificate.date}</p>


        <button
          onClick={close}
          className="mt-6 px-6 py-2 bg-[var(--accent)] text-white rounded-full"
        >
          Back
        </button>
      </motion.div>
    </div>
  );
}
