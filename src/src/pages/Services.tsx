import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Code, Zap, GraduationCap, Store } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const services = [
    {
      icon: Film,
      title: "Studios",
      description: "Professional video and photo production services",
      link: "/studios",
      color: "from-purple-500 to-pink-500",
      available: true,
    },
    {
      icon: Code,
      title: "Software",
      description: "Custom software development solutions",
      link: "/software",
      color: "from-blue-500 to-cyan-500",
      available: true,
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Expert electrical services and solutions",
      link: "/electrical",
      color: "from-amber-500 to-orange-500",
      available: true,
    },
    {
      icon: Store,
      title: "App Store",
      description: "Download our mobile applications",
      link: "/store",
      color: "from-rose-500 to-red-500",
      available: false,
    },
    {
      icon: GraduationCap,
      title: "Academic",
      description: "Educational resources and documentation",
      link: "/academic",
      color: "from-indigo-500 to-violet-500",
      available: false,
    },
  ];

  const handleUnavailableClick = (title) => {
    setModalMessage(`${title} is coming soon! Stay tuned.`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions for your business needs"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {service.available ? (
                    <Link
                      to={service.link}
                      className="block group h-full"
                    >
                      <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <div className={`bg-gradient-to-r ${service.color} p-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => handleUnavailableClick(service.title)}
                      className="block group h-full cursor-pointer"
                    >
                      <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <div className={`bg-gradient-to-r ${service.color} p-6 opacity-50`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 opacity-50">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 opacity-50">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-600">{modalMessage}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
