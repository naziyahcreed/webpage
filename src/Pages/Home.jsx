import Title from '../Components/Title';
import Image from '../Components/Image';
import ContentBox from '../Components/ContentBox';
import OurMission from '../Components/Services';
import About from '../Components/About';
import Email from '../Components/Email';
import CertificatesPage from './CertificatesPage';
import ProjectsPage from './ProjectsPage';
import SEO from '../Components/SEO';


const Home = () => {
  return (
    <div>
      <SEO />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Naziyah Creed",
          "url": "https://naziyahcreed.com", 
          "logo": "https://naziyahcreed.com/logo.png",
          "description": "Expert engineering project guidance in Automation, IoT, and Robotics for Diploma and UG students.",
          "contactPoint": {
             "@type": "ContactPoint",
             "contactType": "customer support",
             "email": "contact@naziyahcreed.com" 
          }
        })}
      </script>
      <section id="home"><Title /><Image /></section>
      <section id="about"><About /></section>
      <section id="service"><ContentBox /><OurMission /></section>
      <section id="certificates"><CertificatesPage /></section>
      <section id="projects"><ProjectsPage /></section>
      <section id="contact"><Email /></section>
    </div>
  );
};

export default Home;
