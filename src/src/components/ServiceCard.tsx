import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  variants: any;
}

const ServiceCard = ({ Icon, title, description, link, variants }: ServiceCardProps) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-blue-600 font-semibold hover:text-blue-700"
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;