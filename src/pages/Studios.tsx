import React from 'react';
import { Camera, Video, Image, Palette, Film, Play } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceFeature from '../components/ServiceFeature';

const Studios = () => {
  const features = [
    {
      Icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, products, and portraits.",
    },
    {
      Icon: Video,
      title: "Videography",
      description: "High-quality video production for commercials, events, and corporate needs.",
    },
    {
      Icon: Image,
      title: "Photo Editing",
      description: "Expert photo retouching and enhancement services.",
    },
    {
      Icon: Film,
      title: "Video Editing",
      description: "Professional video editing and post-production services.",
    },
    {
      Icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design solutions for all your branding needs.",
    },
    {
      Icon: Play,
      title: "Content Creation",
      description: "Engaging content creation for social media and marketing.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="DETZ Studios"
        description="Bringing ideas to life through visual storytelling"
        backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
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
    </div>
  );
};

export default Studios;