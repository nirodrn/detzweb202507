import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from './ServicesGrid';

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-gray-900/[0.02]"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive innovation
          </p>
        </motion.div>

        <ServicesGrid />
      </div>
    </section>
  );
};

export default ServicesSection;