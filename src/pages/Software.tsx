import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Smartphone, Database, Layout, Settings, Brain, Shield, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceFeature from '../components/ServiceFeature';

const Software = () => {
  const features = [
    {
      Icon: Globe,
      title: "Web Development",
      description: "Professional websites and web applications for your business needs.",
    },
    {
      Icon: Database,
      title: "POS Systems",
      description: "Point of Sale systems for retail and restaurant businesses.",
    },
    {
      Icon: Layout,
      title: "Management Systems",
      description: "Comprehensive business management and workflow solutions.",
    },
    {
      Icon: Brain,
      title: "AI Tools",
      description: "Cutting-edge artificial intelligence tools for business automation.",
    },
    {
      Icon: Settings,
      title: "AI Integrated Management",
      description: "Management systems powered by DETZ RIA AI for intelligent operations.",
    },
    {
      Icon: Shield,
      title: "ESDM Security Control AI",
      description: "Advanced security control systems powered by DETZ-owned AI technology.",
    },
    {
      Icon: Brain,
      title: "Ria AI Smart Home",
      description: "Cutting-edge smart home system with AI-enabled devices that transform your home into an intelligent ecosystem.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="DETZ Software"
        description="Innovative software solutions for growth and efficiency"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
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

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our premium software solutions with special offers and flexible payment options.
          </p>
          <Link
            to="/special-offers"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Special Offers
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Ria AI Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full mb-6">
                <Brain className="w-5 h-5 mr-2" />
                <span className="font-semibold">Featured Product</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Ria AI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ria AI by Detz is a cutting-edge smart home system made up of small, AI-enabled devices that seamlessly install across your home. These compact units communicate wirelessly, forming a unified network that transforms your home into a truly intelligent ecosystem.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Wireless AI-enabled devices for seamless integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Unified network creating an intelligent home ecosystem</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Compact design with powerful AI capabilities</p>
                </div>
              </div>
              <a
                href="https://ria.detzglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Ria AI
                <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
                  alt="Ria AI Smart Home System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;