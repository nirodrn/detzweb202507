import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lightbulb, Users, Target, ArrowRight, Building, Award, Code, Camera, Zap, Brain } from 'lucide-react';
import GlassCard from '../GlassCard';
import NeuralBackground from './NeuralBackground';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our actions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace change and strive for innovation in everything we do."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team to achieve common goals."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "We put our clients first, understanding their needs and exceeding their expectations."
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions, web applications, and AI-powered systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Creative Studios",
      description: "Professional photography, videography, and creative content production",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Smart electrical installations, IoT solutions, and safety inspections",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Ria AI Smart Home",
      description: "Cutting-edge AI-enabled devices creating intelligent home ecosystems",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Ria AI Featured Section - Moved to Top */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-cyan-50">
        {/* Simplified background - only show on larger screens */}
        <div className="hidden lg:block">
          <NeuralBackground />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-lg"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                    Ria AI
                  </span>
                  <br />
                  Smart Home
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ria AI by Detz is a cutting-edge smart home system made up of small, AI-enabled devices that seamlessly install across your home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://ria.detzglobal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Visit Ria AI
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </div>
            
            {/* Right side - Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
                {/* AI Network Visualization */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  ))}
                </div>
                
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
              />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Registration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-blue-100 px-6 py-2 rounded-full mb-6">
              <Building className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">Officially Registered</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DETZ Global</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DETZ Global Pvt Ltd is a registered private limited company in Sri Lanka under the 
              Companies Act No. 7 of 2007, bearing the official Company Registration Number 
              <span className="font-semibold text-blue-600"> PV 00324946</span> as certified by the 
              Democratic Socialist Republic of Sri Lanka.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <GlassCard className="p-8 lg:p-12 text-center" blur="lg" opacity={0.15}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At DETZ, our mission is to empower mid and small-level businesses by seamlessly integrating modern technology into their operations. We strive to provide high-class services that not only meet but exceed our clients' expectations, turning their business visions into reality. With a focus on innovation and quality, we aim to elevate every business we partner with, helping them thrive in a competitive landscape.
              </p>
            </GlassCard>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-100 px-6 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-600 font-semibold">Our Services</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions across three core divisions to meet all your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 group" blur="md" opacity={0.1}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="text-center p-6 group" blur="sm" opacity={0.08}>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] opacity-20" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have transformed their businesses with DETZ Global
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/get-started"
                    className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;