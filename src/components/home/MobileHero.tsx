import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MobileHero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Mobile-optimized background */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-blue-400">Welcome to</span>
            <span className="ml-2 text-white">DETZ Global</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-white mb-4 leading-tight"
          >
            Transforming Ideas into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Reality
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 mb-8 max-w-sm"
          >
            Empowering businesses with innovative solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 w-full max-w-xs"
          >
            <Link
              to="/contact"
              className="group w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Mobile Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pb-8 px-4"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {[
              {
                url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
                title: "Studios",
                category: "Visual Production"
              },
              {
                url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
                title: "Software",
                category: "Development"
              },
              {
                url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
                title: "Electrical",
                category: "Services"
              }
            ].map((image, index) => (
              <div
                key={index}
                className="flex-none w-[85%] snap-center px-2"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;