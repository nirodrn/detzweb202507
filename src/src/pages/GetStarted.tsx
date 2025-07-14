import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Phone, Mail, Clock, Users, Shield, Zap, Star, Sparkles, CheckCircle, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const GetStarted = () => {
  const handleChatClick = () => {
    window.open('https://wa.me/94713979029', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+94713979029', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@detzglobal.com', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Get instant responses to your questions through our WhatsApp support",
      action: "Start Chat",
      onClick: handleChatClick,
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700",
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Direct Call",
      description: "Speak directly with our expert team for immediate assistance",
      action: "+94 71 397 9029",
      onClick: handleCallClick,
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700",
      delay: 0.2
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries and receive comprehensive responses",
      action: "Send Email",
      onClick: handleEmailClick,
      color: "from-purple-500 to-pink-600",
      hoverColor: "hover:from-purple-600 hover:to-pink-700",
      delay: 0.3
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals ready to help you succeed"
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Enterprise-grade security for all our services"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach out through your preferred communication method",
      icon: MessageSquare
    },
    {
      number: "02",
      title: "Consultation",
      description: "Free consultation to understand your requirements",
      icon: Users
    },
    {
      number: "03",
      title: "Proposal",
      description: "Receive a detailed proposal with timeline and pricing",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "Launch",
      description: "Project execution and successful delivery",
      icon: Star
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHeader
        title="Get Started with DETZ"
        description="Begin your digital transformation journey today"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section with Contact Methods */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold">Welcome to DETZ Global</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with us and start your digital transformation journey
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: method.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Floating Icon Background */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {method.description}
                  </p>
                  
                  {/* Action Button */}
                  <motion.button
                    onClick={method.onClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${method.color} ${method.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group`}
                  >
                    {method.action}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DETZ Global?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results with unmatched service quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 mr-2 text-white" />
              <span className="font-semibold text-white">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A simple, transparent process designed to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative text-center group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 z-0" />
                )}
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-semibold">Ready to Explore?</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Discover Our Complete Range of Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                From software development to creative studios and electrical services, 
                explore everything we have to offer for your business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/special-offers"
                  className="inline-flex items-center bg-white border-2 border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
                >
                  Special Offers
                  <Sparkles className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;