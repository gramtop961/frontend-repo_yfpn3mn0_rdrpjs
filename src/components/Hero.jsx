import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlays for mood (don't block pointer) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-[40vw] h-[40vw] bg-[#00FF88]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-10 w-[30vw] h-[30vw] bg-[#00FF88]/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating particles */}
      <NeonParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <div
          className="max-w-4xl"
          style={{
            transform: `perspective(1000px) rotateX(${mouse.y * -2}deg) rotateY(${mouse.x * 2}deg)`
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">Welcome to </span>
            <span className="text-[#00FF88] drop-shadow-[0_0_20px_#00FF8855]">Upscala</span>
            <span className="text-white"> — Elevate Your Digital Experience.</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl">
            A premium, tech-forward studio crafting immersive interfaces and intelligent products with depth, motion, and precision.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 bg-[#00FF88] text-black font-semibold px-6 py-3 rounded-full shadow-[0_0_30px_#00FF8855] hover:bg-[#00e67b] transition"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:text-[#00FF88] hover:border-[#00FF88]/50 transition"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeonParticles() {
  // Lightweight ambient particles
  const dots = Array.from({ length: 20 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute block w-1.5 h-1.5 bg-[#00FF88] rounded-full opacity-60 shadow-[0_0_12px_#00FF88]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float${i % 3} ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            transform: 'translateZ(0)'
          }}
        />
      ))}
      <style>{`
        @keyframes float0 { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } }
        @keyframes float1 { 0%,100%{ transform: translateX(0) } 50%{ transform: translateX(10px) } }
        @keyframes float2 { 0%,100%{ transform: translate(0,0) } 50%{ transform: translate(-8px,8px) } }
      `}</style>
    </div>
  );
}
