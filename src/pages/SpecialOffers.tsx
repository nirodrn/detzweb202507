import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag, Server, Globe, ShoppingCart, Shield, Clock, CreditCard, MessageSquare, Award, Code } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const SoftwareOffers = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the package if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Add highlight animation
        element.classList.add('animate-highlight');
        setTimeout(() => element.classList.remove('animate-highlight'), 2000);
      }
    }
  }, [location]);

  const packages = [
    {
      id: "personal",
      title: "Personal Website",
      price: "25,000",
      downPayment: "12,000",
      icon: Globe,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Free Domain (.web.app)",
        "2 Years Warranty",
        "Free Hosting",
        "24/7 Support"
      ]
    },
    {
      id: "business",
      title: "Business Website",
      price: "35,000",
      downPayment: "15,000",
      icon: Award,
      features: [
        "All Personal Website Features",
        "Business Email Setup",
        "Free Chatbot Integration",
        "Analytics Integration",
        "Social Media Integration",
        "Content Management System"
      ]
    },
    {
      id: "ecommerce-basic",
      title: "E-commerce Basic",
      price: "40,000",
      downPayment: "18,000",
      icon: ShoppingCart,
      features: [
        "All Business Website Features",
        "Product Management",
        "Order Management",
        "Inventory System",
        "Basic Analytics",
        "Customer Management"
      ]
    },
    {
      id: "ecommerce-premium",
      title: "E-commerce Premium",
      price: "65,000",
      downPayment: "20,000",
      icon: CreditCard,
      features: [
        "All E-commerce Basic Features",
        "Payment Gateway Integration",
        "Advanced Analytics",
        "Customer Reviews System",
        "Multi-currency Support",
        "Advanced Security Features"
      ]
    }, // <-- Added missing comma here
  ];

  const premiumSolutions = {
    title: "Premium Scale Solutions",
    price: "Up to 300,000",
    icon: Code,
    features: [
      "Custom Enterprise Applications",
      "Complex System Integration",
      "Advanced Security Implementation",
      "High Performance Architecture",
      "Scalable Infrastructure",
      "24/7 Premium Support",
      "Custom Feature Development",
      "Dedicated Project Manager",
      "Comprehensive Documentation",
      "Extended Warranty Options"
    ]
  };

  const highlights = [
    {
      icon: Tag,
      title: "Special Discounts",
      description: "10% off on management systems and 15% off for small business websites"
    },
    {
      icon: Server,
      title: "Premium Hosting",
      description: "Free 1300+ image hosting space on UK Located DETZ private servers with enhanced security"
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "2 years warranty included with option to extend"
    },
    {
      icon: Clock,
      title: "Flexible Payments",
      description: "Installment options available without credit cards"
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Expert advice on next-gen technology integration for your business"
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <PageHeader
        title="Software Offers"
        description="Premium IT services at affordable prices"
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
      />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Limited Time Offer Banner */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
            <p className="text-xl">
              First time in Sri Lanka - Premium software solutions for small and mid-range business owners
              with flexible payment options.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Standard Pricing Packages */}
          <motion.div
            variants={containerVariants}
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={index}
                  id={pkg.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-gray-900">LKR {pkg.price}</p>
                      <p className="text-sm text-gray-600">Down Payment: LKR {pkg.downPayment}</p>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Premium Scale Solutions */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-8 text-white">
              <div className="flex items-center justify-center mb-8">
                <premiumSolutions.icon className="w-16 h-16" />
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">{premiumSolutions.title}</h3>
                <p className="text-2xl font-semibold">LKR {premiumSolutions.price}</p>
                <p className="text-lg mt-2 text-blue-200">Down payment based on project scale</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {premiumSolutions.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Send your budget and business details to us at{' '}
              <a href="mailto:support@detzglobal.com" className="text-blue-600 hover:underline">
                support@detzglobal.com
              </a>
              {' '}or WhatsApp us at{' '}
              <a href="tel:+94713979029" className="text-blue-600 hover:underline">
                +94 71 397 9029
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SoftwareOffers;