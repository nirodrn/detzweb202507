import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-10 top-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-10 bottom-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            DETZ Global
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Innovation Across Dimensions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Featured Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
              alt="Studios"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-semibold">Studios</h3>
                <p className="text-white/80">Visual Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
              alt="Software"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-semibold">Software</h3>
                <p className="text-white/80">Digital Innovation</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
              alt="Electrical"
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-semibold">Electrical</h3>
                <p className="text-white/80">Powered Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;