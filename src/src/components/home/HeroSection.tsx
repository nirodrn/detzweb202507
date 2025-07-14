import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20"
          >
            <span className="text-blue-400">Welcome to</span>
            <span className="ml-2 text-white">DETZ Global</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transforming Ideas into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Reality
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering businesses with innovative solutions across studios, 
            software development, and electrical services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/get-started"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all duration-300"
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
          </motion.div>

          {/* Service Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Studios",
                description: "Professional video and photo production",
                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
                delay: 0.4,
                link: "/studios"
              },
              {
                title: "Software",
                description: "Custom development solutions",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
                delay: 0.5,
                link: "/software"
              },
              {
                title: "Electrical",
                description: "Expert electrical services",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
                delay: 0.6,
                link: "/electrical"
              }
            ].map((card, index) => (
              <Link to={card.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: card.delay }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-semibold text-white mb-1">{card.title}</h3>
                        <p className="text-gray-300 text-sm">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;