import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const NeuralBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();

  const initThreeJS = useCallback(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable antialiasing for better performance
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Reduced star field for better performance
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.05, 
      transparent: true, 
      opacity: 0.6,
      sizeAttenuation: false // Better performance
    });
    const starVertices = [];
    
    // Reduced number of stars from 15000 to 3000
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Simplified neural network with fewer nodes and connections
    const neuralNetworkGroup = new THREE.Group();
    scene.add(neuralNetworkGroup);

    const nodes: THREE.Mesh[] = [];
    const connections: { line: THREE.Line; nodeA: THREE.Mesh; nodeB: THREE.Mesh; distance: number }[] = [];
    const pings: THREE.Mesh[] = [];
    const numNodes = 50; // Reduced from 150
    const nodeRadius = 0.025;
    const connectionDistance = 2.5; // Reduced connection distance

    // Simplified node material
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x87ceeb,
      transparent: true, 
      opacity: 0.4
    });

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(nodeRadius, 8, 8), nodeMaterial); // Reduced geometry complexity
      const radius = Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      node.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      nodes.push(node);
      neuralNetworkGroup.add(node);
    }

    // Create fewer connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: 0.15 });
    
    // Simplified ping materials
    const greenPingMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff44,
      transparent: true, 
      opacity: 0.8
    });
    
    const yellowPingMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffaa00,
      transparent: true, 
      opacity: 0.8
    });

    // Create connections with limit
    let connectionCount = 0;
    const maxConnections = 80; // Limit total connections
    
    for (let i = 0; i < numNodes && connectionCount < maxConnections; i++) {
      for (let j = i + 1; j < numNodes && connectionCount < maxConnections; j++) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const distance = nodeA.position.distanceTo(nodeB.position);

        if (distance < connectionDistance) {
          const points = [];
          points.push(nodeA.position);
          points.push(nodeB.position);
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          connections.push({ line, nodeA, nodeB, distance });
          neuralNetworkGroup.add(line);
          connectionCount++;
        }
      }
    }

    // Function to create ping with reduced complexity
    const createPing = (connection: { line: THREE.Line; nodeA: THREE.Mesh; nodeB: THREE.Mesh; distance: number }) => {
      const isGreen = Math.random() < 0.7;
      let material, speed;
      
      if (isGreen) {
        material = greenPingMaterial;
        speed = 0.06;
      } else {
        material = yellowPingMaterial;
        speed = 0.04;
      }
      
      const ping = new THREE.Mesh(new THREE.SphereGeometry(nodeRadius * 0.4, 6, 6), material); // Reduced geometry
      ping.position.copy(connection.nodeA.position);
      
      (ping as any).userData = {
        connection: connection,
        progress: 0,
        direction: 1,
        speed: speed
      };
      pings.push(ping);
      neuralNetworkGroup.add(ping);
    };

    // Create fewer initial packets
    for (let i = 0; i < 4; i++) {
      if (connections.length > 0) {
        const randomConnection = connections[Math.floor(Math.random() * connections.length)];
        createPing(randomConnection);
      }
    }

    let lastPingTime = 0;
    const pingInterval = 800; // Less frequent packet creation
    let frameCount = 0;

    // Optimized animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      frameCount++;

      // Reduce update frequency for some elements
      if (frameCount % 2 === 0) {
        // Slower star rotation
        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0002;

        // Slower neural network rotation
        neuralNetworkGroup.rotation.y += 0.0004;
        neuralNetworkGroup.rotation.x += 0.0001;
      }

      const currentTime = Date.now();

      // Update packets with reduced frequency
      if (frameCount % 2 === 0) {
        for (let i = pings.length - 1; i >= 0; i--) {
          const ping = pings[i];
          const { connection, progress, direction, speed } = (ping as any).userData;

          let newProgress = progress + (speed / connection.distance) * direction;

          if (newProgress >= 1) {
            neuralNetworkGroup.remove(ping);
            pings.splice(i, 1);
          } else {
            (ping as any).userData.progress = newProgress;
            ping.position.lerpVectors(connection.nodeA.position, connection.nodeB.position, newProgress);
          }
        }
      }

      // Create new packets less frequently
      if (currentTime - lastPingTime > pingInterval && connections.length > 0 && pings.length < 8) {
        const randomConnection = connections[Math.floor(Math.random() * connections.length)];
        createPing(randomConnection);
        lastPingTime = currentTime;
      }

      renderer.render(scene, camera);
    };

    // Optimized resize handler
    let resizeTimeout: NodeJS.Timeout;
    const onWindowResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener('resize', onWindowResize);
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Clean up geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  useEffect(() => {
    const cleanup = initThreeJS();
    return cleanup;
  }, [initThreeJS]);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-60" />;
};

export default NeuralBackground;