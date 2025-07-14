import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  border?: boolean;
  shadow?: boolean;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  blur = 'md',
  opacity = 0.1,
  border = true,
  shadow = true,
  hover = true,
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const baseClasses = `
    ${blurClasses[blur]}
    bg-white/[${opacity}]
    ${border ? 'border border-white/20' : ''}
    ${shadow ? 'shadow-xl shadow-black/10' : ''}
    rounded-2xl
    relative
    overflow-hidden
    ${className}
  `;

  const hoverVariants = hover ? {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  } : {};

  return (
    <motion.div
      className={baseClasses}
      variants={hoverVariants}
      whileHover="hover"
      style={{
        background: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity + 0.1}) 0%, rgba(255, 255, 255, ${opacity}) 100%)`,
      }}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
      
      {/* Subtle border glow */}
      {border && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;