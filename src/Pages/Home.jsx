import React, { Suspense } from 'react';
import Title from '../Components/Title';
import Image from '../Components/Image';
import SEO from '../Components/SEO';

const PrototypingLab = React.lazy(() => import('../Components/PrototypingLab'));
const About = React.lazy(() => import('../Components/About'));
const Services = React.lazy(() => import('../Components/Services'));
const StemAcademy = React.lazy(() => import('../Components/StemAcademy'));
const ContentBox = React.lazy(() => import('../Components/ContentBox'));
const CertificatesPage = React.lazy(() => import('./CertificatesPage'));
const ProjectsPage = React.lazy(() => import('./ProjectsPage'));
const Email = React.lazy(() => import('../Components/Email'));

const RunningBorderSection = ({ id, children }) => (
  <section id={id} className="scroll-mt-28 relative w-11/12 max-w-[95%] mx-auto rounded-[15px] overflow-hidden p-[2px] my-16 shadow-lg transition-shadow duration-500 hover:shadow-[0_0_30px_5px_rgba(0,243,255,0.2)]">
    {/* Left-to-Right scanning border effect */}
    <div className="absolute top-0 bottom-0 w-[50%] animate-slide-line bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent z-0 opacity-100"></div>

    {/* Inner container */}
    <div className="relative w-full h-full rounded-[13px] z-10 bg-[var(--bg-primary)] overflow-hidden">
      {children}
    </div>
  </section>
);

const SectionDivider = () => (
  <div className="relative w-11/12 max-w-5xl mx-auto h-[2px] bg-[var(--bg-secondary)] my-12 overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,243,255,0.2)]">
    <div className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent animate-slide-line opacity-80"></div>
  </div>
);

const SectionLoading = ({ label }) => (
  <div className="text-center p-12 text-[var(--accent)] font-semibold flex items-center justify-center gap-3">
    <div className="w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
    <span>Loading {label}...</span>
  </div>
);

const Home = () => {
  return (
    <main className="pb-10">
      <SEO />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Naziyah Creed",
          "url": "https://naziyahcreed.com", 
          "logo": "https://naziyahcreed.com/images/logo.webp",
          "description": "Integrated Technology and Innovation Enterprise specializing in AgriTech, AI, IoT, Robotics, Rapid Prototyping, and STEM Education.",
          "contactPoint": {
             "@type": "ContactPoint",
             "contactType": "customer support",
             "email": "contact@naziyahcreed.com" 
          }
        })}
      </script>

      <section id="home">
        {/* Top Exclusive Announcement Pill */}
        <div className="w-full flex justify-center pt-4 sm:pt-6 px-4">
          <a 
            href="#3d-printing"
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-cyan-500/10 to-amber-500/15 border border-amber-400/40 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(244,197,66,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.35)] transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-[1.02]"
          >
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md animate-pulse">
              EXCLUSIVE NEW
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              In-House 3D Printing &amp; Rapid Prototyping Lab (Bambu Lab A1 Multi-Color)
            </span>
            <span className="text-xs sm:text-sm font-bold text-[var(--accent)] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
              Explore <span className="text-base">&rarr;</span>
            </span>
          </a>
        </div>

        <Title />
        <Image />
      </section>

      <SectionDivider />
      <RunningBorderSection id="3d-printing">
        <Suspense fallback={<SectionLoading label="3D Prototyping Lab" />}>
          <PrototypingLab />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="about">
        <Suspense fallback={<SectionLoading label="Enterprise Overview" />}>
          <About />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      {/* Anchor for backward compatibility with #service & #services */}
      <span id="service" className="block relative -top-24"></span>
      <RunningBorderSection id="services">
        <Suspense fallback={<SectionLoading label="Business Verticals &amp; Workflow" />}>
          <Services />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="stem-academy">
        <Suspense fallback={<SectionLoading label="STEM Academy Continuum" />}>
          <StemAcademy />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="why-choose">
        <Suspense fallback={<SectionLoading label="Principles &amp; Quality Standards" />}>
          <ContentBox />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="certificates">
        <Suspense fallback={<SectionLoading label="Certificates &amp; Achievements" />}>
          <CertificatesPage />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="projects">
        <Suspense fallback={<SectionLoading label="Engineering Projects" />}>
          <ProjectsPage />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="contact">
        <Suspense fallback={<SectionLoading label="Contact &amp; Inquiries" />}>
          <Email />
        </Suspense>
      </RunningBorderSection>
    </main>
  );
};

export default Home;
