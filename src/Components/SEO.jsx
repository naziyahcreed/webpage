import React from 'react';


const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Naziyah Creed | IoT & Robotics Consultancy";
  const defaultDescription = "Expert engineering project guidance in Automation, IoT, and Robotics for Diploma and UG students. Innovative solutions for academic and industrial projects.";
  
  // Expanded Keyword List for Ranking
  const defaultKeywords = "Naziyah Creed, IoT Projects, Robotics Projects, Engineering Consultancy, Final Year Projects, ESP32, Arduino, Raspberry Pi, Python, Home Automation, Smart Systems, Industrial Automation, PCB Design, 3D Printing, MSME Projects, Diploma Engineering Projects, B.Tech Projects, Student Guidance, Tech Prototypes";
  
  const defaultImage = "https://naziyahcreed.com/logo.png"; // Absolute URL preferred for SEO
  const siteUrl = "https://naziyahcreed.com";
  const currentUrl = url || siteUrl;

  return (
    <>
      {/* Standard Metadata */}
      <title>{title ? `${title} | Naziyah Creed` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </>
  );
};

export default SEO;
