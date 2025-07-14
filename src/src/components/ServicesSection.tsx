import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Film, Zap, Image, Store, GraduationCap } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const services = [
    {
      Icon: Film,
      title: "DETZ Studios",
      description: "Bringing ideas to life through visual storytelling.",
      link: "/studios",
    },
    {
      Icon: Code,
      title: "DETZ Softwares",
      description: "Innovative software solutions for growth and efficiency.",
      link: "/software",
    },
    {
      Icon: Zap,
      title: "DETZ Electricals",
      description: "Safe, efficient, and sustainable electrical services.",
      link: "/electrical",
    },
    {
      Icon: Image,
      title: "Gallery",
      description: "Explore our portfolio and latest projects.",
      link: "/gallery",
    },
    {
      Icon: Store,
      title: "App Store",
      description: "Download our mobile applications and tools.",
      link: "/app-store",
    },
    {
      Icon: GraduationCap,
      title: "Academic Documents",
      description: "Access educational resources and documentation.",
      link: "/academic",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;