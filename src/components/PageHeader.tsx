import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PageHeader;