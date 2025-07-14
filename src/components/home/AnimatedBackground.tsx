import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      points.current = [];
      const numberOfPoints = Math.floor(window.innerWidth * 0.05);
      for (let i = 0; i < numberOfPoints; i++) {
        points.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2
        });
      }
    };

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(66, 153, 225, 0.1)';
      ctx.lineWidth = 1;

      points.current.forEach((point, i) => {
        points.current.forEach((otherPoint, j) => {
          if (i !== j) {
            const dx = point.x - otherPoint.x;
            const dy = point.y - otherPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });
    };

    const updatePoints = () => {
      points.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Mouse interaction
        const dx = mouse.current.x - point.x;
        const dy = mouse.current.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          point.vx -= dx * 0.002;
          point.vy -= dy * 0.002;
        }

        // Bounce off walls
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Add some randomness
        point.vx += (Math.random() - 0.5) * 0.1;
        point.vy += (Math.random() - 0.5) * 0.1;

        // Limit velocity
        const maxVel = 2;
        point.vx = Math.max(Math.min(point.vx, maxVel), -maxVel);
        point.vy = Math.max(Math.min(point.vy, maxVel), -maxVel);
      });
    };

    const animate = () => {
      updatePoints();
      drawLines();
      raf.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(to bottom right, #1a202c, #2d3748)' }}
    />
  );
};

export default AnimatedBackground;