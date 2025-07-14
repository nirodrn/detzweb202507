import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      >
        <span className="text-blue-400">Welcome to</span>
        <span className="ml-2 text-white">DETZ Global</span>
      </motion.div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Transforming Ideas into{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Digital Reality
        </span>
      </h1>
      
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        Empowering businesses with innovative solutions across studios, 
        software development, and electrical services.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all duration-300"
        >
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/services"
          className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
        >
          Explore Services
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroContent;