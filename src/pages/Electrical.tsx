import React from 'react';
import { Zap, Shield, Wrench, CheckCircle, AlertTriangle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ServiceFeature from '../components/ServiceFeature';

const Electrical = () => {
  const features = [
    {
      Icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety checks for your peace of mind.",
    },
    {
      Icon: Settings,
      title: "Installation Services",
      description: "Professional installation of electrical systems and components.",
    },
    {
      Icon: Wrench,
      title: "Maintenance",
      description: "Regular maintenance to keep your electrical systems running smoothly.",
    },
    {
      Icon: CheckCircle,
      title: "Quality Assurance",
      description: "All work completed to the highest safety standards.",
    },
    {
      Icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency electrical services when you need them most.",
    },
    {
      Icon: AlertTriangle,
      title: "Safety Consulting",
      description: "Expert advice on electrical safety and compliance.",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "4,500",
      components: [
        { name: "D Board", description: "Inspection of the main switch and 5 breakers", quantity: 1 },
        { name: "Standard Switch", description: "Standard single switch", quantity: 4 },
        { name: "Two-Gang Switch", description: "Two-gang switch", quantity: 4 },
        { name: "Three-Gang Switch", description: "Three-gang switch", quantity: 3 },
        { name: "Four-Gang Switch", description: "Four-gang switch", quantity: 4 },
        { name: "Five-Gang Switch", description: "Five-gang switch", quantity: 3 },
        { name: "Holders", description: "For fixtures below 12 ft height", quantity: 5 },
        { name: "Earth Check", description: "Check of grounding/earthing system", quantity: 1 },
        { name: "Ceiling Fan", description: "Check of ceiling fan (with regulator check)", quantity: 2 },
      ]
    },
    {
      name: "Intermediate",
      price: "5,500",
      components: [
        { name: "D Board", description: "Inspection of the main switch and 5 breakers", quantity: 1 },
        { name: "Standard Switch", description: "Standard single switch", quantity: 6 },
        { name: "Two-Gang Switch", description: "Two-gang switch", quantity: 6 },
        { name: "Three-Gang Switch", description: "Three-gang switch", quantity: 6 },
        { name: "Four-Gang Switch", description: "Four-gang switch", quantity: 5 },
        { name: "Five-Gang Switch", description: "Five-gang switch", quantity: 5 },
        { name: "Holders", description: "For fixtures below 12 ft height", quantity: 6 },
        { name: "Earth Check", description: "Check of grounding/earthing system", quantity: 1 },
        { name: "Ceiling Fan", description: "Check of ceiling fan (with regulator check)", quantity: 3 },
      ]
    },
    {
      name: "Advanced",
      price: "6,500",
      components: [
        { name: "D Board", description: "Inspection of the main switch and 5 breakers", quantity: 1 },
        { name: "Standard Switch", description: "Standard single switch", quantity: 6 },
        { name: "Two-Gang Switch", description: "Two-gang switch", quantity: 6 },
        { name: "Three-Gang Switch", description: "Three-gang switch", quantity: 6 },
        { name: "Four-Gang Switch", description: "Four-gang switch", quantity: 5 },
        { name: "Five-Gang Switch", description: "Five-gang switch", quantity: 5 },
        { name: "Holders", description: "For fixtures below 12 ft height", quantity: 7 },
        { name: "Earth Check", description: "Check of grounding/earthing system", quantity: 1 },
        { name: "Ceiling Fan", description: "Check of ceiling fan (with regulator check)", quantity: 4 },
      ]
    },
    {
      name: "Comprehensive",
      price: "8,000",
      components: [
        { name: "D Board", description: "Inspection of the main switch and 5 breakers", quantity: 1 },
        { name: "Standard Switch", description: "Standard single switch", quantity: 6 },
        { name: "Two-Gang Switch", description: "Two-gang switch", quantity: 6 },
        { name: "Three-Gang Switch", description: "Three-gang switch", quantity: 6 },
        { name: "Four-Gang Switch", description: "Four-gang switch", quantity: 5 },
        { name: "Five-Gang Switch", description: "Five-gang switch", quantity: 5 },
        { name: "Holders", description: "For fixtures below 12 ft height", quantity: 7 },
        { name: "Earth Check", description: "Check of grounding/earthing system", quantity: 1 },
        { name: "Ceiling Fan", description: "Check of ceiling fan (with regulator check)", quantity: 5 },
        { name: "Stand Fan", description: "Check of stand fan", quantity: 4 },
      ]
    }
  ];

  const extraComponents = [
    { name: "Extra Breakers", price: 30 },
    { name: "One-Gang Switch", price: 25 },
    { name: "Two-Gang Switch", price: 35 },
    { name: "Three-Gang Switch", price: 45 },
    { name: "Four-Gang Switch", price: 55 },
    { name: "Five-Gang Switch", price: 80 },
    { name: "Holders (up to 12 ft)", price: 35 },
    { name: "Holders (up to 15 ft)", price: 70 },
    { name: "Ceiling Fan", price: 500 },
    { name: "Stand Fan", price: 300 },
    { name: "Water Motor Checkup", price: 700 },
  ];

  return (
    <div>
      <PageHeader
        title="DETZ Electrical"
        description="Safe, efficient, and sustainable electrical services"
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Electrical Safety Check Packages</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <h3 className="text-2xl font-bold">{pkg.name} Package</h3>
                  <p className="text-3xl font-bold mt-2">LKR {pkg.price}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {pkg.components.map((component, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{component.name}</p>
                          <p className="text-sm text-gray-600">
                            {component.description} × {component.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Extra Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraComponents.map((component, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium">{component.name}</span>
                  <span className="text-blue-600 font-semibold">
                    LKR {component.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electrical;