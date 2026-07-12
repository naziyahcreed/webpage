import Title from '../Components/Title';
import Image from '../Components/Image';
import ContentBox from '../Components/ContentBox';
import OurMission from '../Components/Services';
import About from '../Components/About';
import Email from '../Components/Email';
import React, { Suspense } from 'react';
const CertificatesPage = React.lazy(() => import('./CertificatesPage'));
const ProjectsPage = React.lazy(() => import('./ProjectsPage'));
import SEO from '../Components/SEO';


const RunningBorderSection = ({ id, children }) => (
  <section id={id} className="relative w-11/12 max-w-[95%] mx-auto rounded-[15px] overflow-hidden p-[2px] my-16 shadow-lg transition-shadow duration-500 hover:shadow-[0_0_30px_5px_rgba(0,243,255,0.2)]">
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
          "logo": "https://naziyahcreed.com/logo.webp",
          "description": "Expert engineering project guidance in Automation, IoT, and Robotics for Diploma and UG students.",
          "contactPoint": {
             "@type": "ContactPoint",
             "contactType": "customer support",
             "email": "contact@naziyahcreed.com" 
          }
        })}
      </script>
      <section id="home"><Title /><Image /></section>

      <SectionDivider />
      <RunningBorderSection id="about">
        <About />
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="service">
        <ContentBox />
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="why-choose">
        <OurMission />
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="certificates">
        <Suspense fallback={<div className="text-center p-10 text-[var(--accent)] font-semibold">Loading Certificates...</div>}>
          <CertificatesPage />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="projects">
        <Suspense fallback={<div className="text-center p-10 text-[var(--accent)] font-semibold">Loading Projects...</div>}>
          <ProjectsPage />
        </Suspense>
      </RunningBorderSection>

      <SectionDivider />
      <RunningBorderSection id="contact">
        <Email />
      </RunningBorderSection>
    </main>
  );
};

export default Home;
