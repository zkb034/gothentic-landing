import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Zap, Globe2, Sparkles } from 'lucide-react';

export default function GoThenticLanding() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    camera.position.z = 15;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create futuristic vehicle/pod
    const vehicleGroup = new THREE.Group();

    // Main body - sleek capsule
    const bodyGeometry = new THREE.SphereGeometry(2, 32, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.3,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1.5, 0.8, 1);
    vehicleGroup.add(body);

    // Windshield - glowing glass
    const windshieldGeometry = new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI);
    const windshieldMaterial = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const windshield = new THREE.Mesh(windshieldGeometry, windshieldMaterial);
    windshield.rotation.z = Math.PI / 2;
    windshield.position.set(1.5, 0, 0);
    vehicleGroup.add(windshield);

    // Hover rings - propulsion system
    const ringGeometry = new THREE.TorusGeometry(1.2, 0.15, 16, 100);
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.7
    });

    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.y = Math.PI / 2;
    ring1.position.set(-1.5, -1, 0);
    vehicleGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.y = Math.PI / 2;
    ring2.position.set(1.5, -1, 0);
    vehicleGroup.add(ring2);

    // Energy particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add globe/planet
    const globeGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const globeWireframe = new THREE.WireframeGeometry(globeGeometry);
    const globeMaterial = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.3
    });
    const globe = new THREE.LineSegments(globeWireframe, globeMaterial);
    globe.position.set(-8, 3, -5);
    scene.add(globe);

    scene.add(vehicleGroup);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate and float vehicle
      vehicleGroup.rotation.y += 0.005;
      vehicleGroup.position.y = Math.sin(time) * 0.5;

      // Rotate rings
      ring1.rotation.x += 0.05;
      ring2.rotation.x -= 0.05;

      // Animate particles
      particles.rotation.y += 0.001;
      const positions = particles.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(time + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Rotate globe
      globe.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-[297mm] h-[420mm] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden">
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)',
               backgroundSize: '60px 60px',
               animation: 'gridMove 20s linear infinite'
             }} />
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(60px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(6, 182, 212, 0.6); }
        }
      `}</style>

      {/* Glowing orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px] opacity-15 animate-pulse" />
      
      {/* Main Container */}
      <div className="relative z-10 h-full flex">
        
        {/* Left Side - Content */}
        <div className="w-1/2 flex flex-col justify-between px-20 py-16">
          
          {/* Header */}
          <header>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/50" 
                     style={{ animation: 'glow 3s ease-in-out infinite' }}>
                  <Globe2 className="w-9 h-9 text-slate-900" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full" 
                     style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              </div>
              <div>
                <h1 className="text-6xl font-black text-white tracking-tight">
                  Go<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">'</span>Thentic
                </h1>
                <p className="text-xs text-emerald-400 font-mono tracking-widest mt-1">QUANTUM TRAVEL SYSTEM</p>
              </div>
            </div>
          </header>

          {/* Hero Content */}
          <main className="flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm w-fit">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold tracking-wide">ZERO-EMISSION TRANSPORT</span>
            </div>

            {/* Headline */}
            <h2 className="text-[7rem] font-black text-white leading-[0.85] mb-8 tracking-tighter">
              Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                Is Now
              </span>
            </h2>
            
            {/* Tagline */}
            <p className="text-3xl text-slate-300 leading-relaxed font-light mb-12">
              Autonomous eco-pods. Instant global access.
              <span className="block text-emerald-400 font-normal mt-2">Travel reimagined for 2050.</span>
            </p>

            {/* CTA */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 text-xl font-black rounded-2xl overflow-hidden w-fit transition-all duration-300 hover:scale-105"
                    style={{ animation: 'glow 3s ease-in-out infinite' }}>
              <span className="relative z-10 flex items-center gap-3">
                Initialize Journey
                <Sparkles className="w-5 h-5" />
              </span>
            </button>
          </main>

          {/* Footer */}
          <footer className="flex items-center gap-4 pt-6 border-t border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" 
                 style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <p className="text-slate-500 text-sm font-mono">AUTONOMOUS • SUSTAINABLE • AUTHENTIC</p>
          </footer>
        </div>

        {/* Right Side - 3D Vehicle */}
        <div className="w-1/2 flex flex-col justify-center items-center px-16">
          <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <canvas ref={canvasRef} className="w-full max-w-[600px]" />
            
            {/* Vehicle info overlay */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-6 py-3">
              <p className="text-emerald-400 text-sm font-mono">ECO-POD MK.VII</p>
              <p className="text-slate-400 text-xs">Hover Propulsion Active</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 w-full max-w-[600px]">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-teal-500/30">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-400">0%</div>
              <div className="text-xs text-teal-300 font-bold mt-1">Carbon</div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-emerald-500/30">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-green-400">100%</div>
              <div className="text-xs text-emerald-300 font-bold mt-1">Authentic</div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/30">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-400">∞</div>
              <div className="text-xs text-cyan-300 font-bold mt-1">Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}