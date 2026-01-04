
import { ChevronLeft, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectsData from '../data/projects.json';
import SEO from './SEO';

/**
 * Project Card for the List View
 */
const ProjectCard = ({ project, onSelect }) => (
  <div className="flex-shrink-0 w-72 md:w-80 bg-[var(--bg-secondary)] shadow-xl rounded-xl overflow-hidden golden-border-textured transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
    <div className="relative h-40 overflow-hidden group">
      {/* Small placeholder image for the card */}
      <img
        src={project.images && project.images.length > 0 ? project.images[0] : "https://placehold.co/800x600?text=No+Image"}
        alt={project.title}
        className="w-full h-full object-cover transition duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         {/* Icon changed to indicate view detail rather than play video */}
        <span className="text-white text-lg font-bold">View Details</span>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-xl font-bold text-[var(--text-primary)] truncate mb-2">{project.title}</h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{project.short_description}</p>

      <button
        onClick={() => onSelect(project)}
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-black golden-btn focus:outline-none transition duration-150 ease-in-out"
      >
        Preview Project
      </button>
    </div>
  </div>
);

/**
 * List View Component with Horizontal Scrolling
 */
const ProjectList = ({ onSelectProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 md:mb-10 leading-tight h-fit golden-text">
        Explore Our Projects
      </h2>

      {/* Horizontal Scroll auto-play Container */}
      <div className="p-4 -m-4">
        {projects.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={projects.length > 4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProjectCard project={project} onSelect={onSelectProject} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
           <p className="text-[var(--text-secondary)]">Loading projects...</p>
        )}
      </div>
    </div>
  );
};


/**
 * Project Detail View (Refactored for Gallery)
 */
const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="py-4 h-fit min-h-screen px-4 sm:px-6 lg:px-16 bg-[var(--bg-primary)]">
      <SEO 
        title={project.title} 
        description={project.short_description} 
        image={project.images && project.images.length > 0 ? project.images[0] : ""}
      />
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--accent)] text-[var(--accent)] hover:golden-bg hover:text-black transition-all duration-300 shadow-md shadow-[var(--accent)]/10"
      >
        <ChevronLeft className="w-5 h-5 transition-colors" />
        <span className="font-bold">Back to Project List</span>
      </button>

      {/* Project Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-4 md:mb-6 leading-tight">
        {project.title}
      </h1>
      <p className="text-xl mb-8 golden-text">
        Detailed Project Overview
      </p>

      {/* Main Content Grid: Responsive 3-column layout (2/3 + 1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10  w-full h-fit">

        {/* LEFT SECTION: Gallery & Description (takes 2/3 on desktop) */}
        <div className="md:col-span-2 flex flex-col space-y-8">

          {/* 1. Image Gallery */}
          <div className="bg-[var(--bg-secondary)] p-4 shadow-xl rounded-xl golden-border-textured">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Gallery</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ring-4 ring-[#fcd34d]/50">
               {project.images && project.images.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={project.images.length > 1}
                    className="w-full h-full"
                  >
                    {project.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={img} 
                          alt={`Slide ${index}`} 
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
               ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                    No Images Available
                  </div>
               )}
            </div>
          </div>

          {/* 2. Project Description Card */}
          <div className="bg-[var(--bg-secondary)] p-6 shadow-xl rounded-xl golden-border-textured h-fit">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Description</h2>
            <div 
              className="text-[var(--text-secondary)] leading-relaxed prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: project.full_description }}
            />
          </div>
        </div>

        {/* 3. RIGHT SECTION: Info / Tags (Modified from Final Product Snapshot) */}
        <div className="md:col-span-1">
          <div className="bg-[var(--bg-secondary)] p-4 shadow-xl rounded-xl golden-border-textured sticky top-4">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Details</h2>
             {/* Use the first image as a thumbnail if needed, or remove. 
                 Since we have a gallery, maybe just show tags here. */}
            
            <div className="mb-6">
                 <h3 className="text-lg font-semibold mb-2 golden-text">Technologie Stack</h3>
                 <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-sm golden-border-textured golden-text font-bold">
                            {tag}
                        </span>
                    ))}
                 </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              This project demonstrates our commitment to innovation and technical excellence.
            </p>
          </div>
        </div>

      </div> {/* End of Main Grid */}

      {/* Bottom Back Button */}
      <div className="mt-12 pb-8 flex justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full golden-btn text-black font-bold shadow-xl hover:scale-105 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
          Explore More Projects
        </button>
      </div>
    </div>
  );
};


// --- Main App Component (Handles Routing) ---


export { ProjectList, ProjectDetail };