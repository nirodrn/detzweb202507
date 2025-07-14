import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import MobileImageCarousel from './MobileImageCarousel';

const MobileHero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 bg-blue-500/20 blur-3xl"
      />

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <HeroContent />
        </div>
        <MobileImageCarousel />
      </div>
    </section>
  );
};

export default MobileHero;