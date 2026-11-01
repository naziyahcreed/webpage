import React from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Naziyah Creed | Integrated Technology and Innovation Enterprise";
  const defaultDescription = "Multidisciplinary Technology and Innovation Enterprise specializing in AgriTech, AI, IoT, Robotics, Rapid Prototyping, and STEM Education. Innovate • Engineer • Educate • Transform.";
  
  // Expanded Enterprise Keyword List
  const defaultKeywords = "Naziyah Creed, Integrated Technology Enterprise, AgriTech, Smart Agriculture, IoT Automation, Robotics, Industrial Automation, Bambu Lab 3D Printing, Rapid Prototyping, STEM Academy, Technical Education, Engineering Consultancy, PCB Design, Embedded Systems, Tamil Nadu, MSME Technology Transfer";
  
  const defaultImage = "https://naziyahcreed.com/images/logo.webp";
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
