import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Code, Zap, Image, GraduationCap, Store } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: "Studios",
    description: "Professional video and photo production services",
    link: "/studios",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Software",
    description: "Custom software development solutions",
    link: "/software",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Expert electrical services and solutions",
    link: "/electrical",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Image,
    title: "Gallery",
    description: "Showcase of our best work and projects",
    link: "/gallery",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Store,
    title: "App Store",
    description: "Download our mobile applications",
    link: "/store",
    color: "from-rose-500 to-red-500"
  },
  {
    icon: GraduationCap,
    title: "Academic",
    description: "Educational resources and documentation",
    link: "/academic",
    color: "from-indigo-500 to-violet-500"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions for your business needs</p>
        </div>

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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;