import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Corporate Branding",
      category: "Studios",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Software",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Industrial Installation",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Product Photography",
      category: "Studios",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "Software",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Smart Home Solutions",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Gallery"
        description="Explore our latest projects and achievements"
        backgroundImage="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;