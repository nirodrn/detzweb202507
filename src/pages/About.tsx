import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Target, Award, Building, Globe, MapPin, Briefcase, Code, Brain, Camera, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
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

  const countries = [
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "United States of America (USA)", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "United Arab Emirates (UAE)", flag: "🇦🇪" }
  ];

  const clientSectors = [
    {
      icon: Shield,
      title: "Healthcare & Medical Professionals",
      description: "Clinics, private practices, and appointment management."
    },
    {
      icon: Users,
      title: "Doctors & Specialists",
      description: "Secure patient portals, websites, and digital interfaces."
    },
    {
      icon: Lightbulb,
      title: "Teachers & Educational Institutions",
      description: "Digital tools, LMS, and student management platforms."
    },
    {
      icon: Target,
      title: "Student Management Systems (SMS)",
      description: "University and school-level academic management."
    },
    {
      icon: Code,
      title: "Learning Management Systems (LMS)",
      description: "Course management, e-learning, attendance, and grading solutions."
    },
    {
      icon: Zap,
      title: "Smart Home System Clients",
      description: "Custom AI-powered home automation and IoT enabled living solutions."
    },
    {
      icon: Camera,
      title: "Creative Professionals",
      description: "Photographers, content creators, and entrepreneurs."
    },
    {
      icon: Briefcase,
      title: "Small & Medium Businesses",
      description: "E-commerce, branding websites, and workflow automation tools."
    }
  ];

  const products = [
    {
      icon: Code,
      title: "IMS Systems",
      description: "Internship Management Systems for monitoring activities, evaluations, and documentation."
    },
    {
      icon: Globe,
      title: "Business & E-Commerce Platforms",
      description: "Fully customized websites with secure payment processing and user management."
    },
    {
      icon: Brain,
      title: "Ria AI for Smart Home Systems",
      description: "AI-powered assistant for lighting, appliance control, and security automation."
    },
    {
      icon: Shield,
      title: "AI for ESDM",
      description: "Ethically developed AI solutions for digital identity verification, decision support, and access control."
    },
    {
      icon: Target,
      title: "Educational Systems",
      description: "Student Management Systems (SMS), Learning Management Systems (LMS), and custom academic tools."
    },
    {
      icon: Camera,
      title: "Creative Studio Services",
      description: "Professional photography, cinematic videography, and media editing services."
    },
    {
      icon: Zap,
      title: "Smart Electrical Installations",
      description: "IoT-integrated smart wiring, remote control systems, and real-time energy monitoring."
    }
  ];

  return (
    <div>
      <PageHeader
        title="About DETZ"
        description="Crafting Tomorrow's Vision Today"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      {/* Company Registration Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Officially Registered Company</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              DETZ Global Pvt Ltd is a registered private limited company in Sri Lanka under the 
              Companies Act No. 7 of 2007, bearing the official Company Registration Number 
              <span className="font-semibold text-blue-600"> PV 00324946</span> as certified by the 
              Democratic Socialist Republic of Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Client Base Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Client Base</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DETZ Global proudly serves a diverse international client base across multiple countries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900">{country.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Client Sectors Served</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{sector.title}</h4>
                  <p className="text-gray-600 text-sm">{sector.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DETZ Global delivers a broad portfolio of innovative and impactful products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DETZ, our mission is to empower mid and small-level businesses by seamlessly integrating modern technology into their operations. We strive to provide high-class services that not only meet but exceed our clients' expectations, turning their business visions into reality. With a focus on innovation and quality, we aim to elevate every business we partner with, helping them thrive in a competitive landscape.
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="px-8 py-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  Our team consists of skilled professionals with diverse backgrounds in technology, design, and business. Together, we bring a wealth of knowledge and expertise to deliver outstanding results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;