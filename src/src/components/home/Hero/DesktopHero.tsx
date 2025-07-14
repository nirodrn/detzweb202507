import React from 'react';
import BackgroundEffects from './BackgroundEffects';
import HeroContent from './HeroContent';
import ImageShowcase from '../ImageShowcase';

const DesktopHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <HeroContent />
            <ImageShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;