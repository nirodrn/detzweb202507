import React from 'react';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  const structuredData = {
    "name": "DETZ Global - Software Development, Studios & Electrical Services",
    "description": "DETZ Global Pvt Ltd offers premium software development, creative studio services, and electrical solutions in Sri Lanka. Registered company serving clients globally.",
    "url": "https://detzglobal.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "DETZ Global Pvt Ltd"
    }
  };

  return (
    <div className="min-h-screen">
      <MetaTags
        title="DETZ Global - Software Development, Studios & Electrical Services in Sri Lanka"
        description="DETZ Global Pvt Ltd offers premium software development, creative studio services, and electrical solutions in Sri Lanka. Registered company (PV 00324946) serving clients globally with innovative technology solutions."
        keywords="software development sri lanka, web development colombo, electrical services sri lanka, photography studio colombo, video production sri lanka, detz global, business websites, e-commerce development, smart home solutions, iot sri lanka"
        url="https://detzglobal.com"
      />
      <StructuredData type="WebPage" data={structuredData} />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;