import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const progressTextRef = useRef(null);
  const logoRef = useRef(null);
  const craneRef = useRef(null);

  useEffect(() => {
    // 1. Simulating progress loading percentage
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // random incremental step
        return Math.min(100, prev + Math.floor(Math.random() * 12) + 5);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Create finishing timeline
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // Animate crane lifting the logo
      tl.to(craneRef.current, {
        y: -40,
        x: 20,
        duration: 0.8,
        ease: 'power2.out'
      })
      .to(logoRef.current, {
        scale: 1.1,
        y: -10,
        duration: 0.4,
        ease: 'back.out(2)'
      })
      // Fade container out
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#070707] z-[99999] flex flex-col items-center justify-center select-none"
    >
      {/* Blueprint lines on loading screen background */}
      <div className="absolute inset-0 blueprint-grid-overlay opacity-30" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-20" />

      {/* Main assembly wrapper */}
      <div className="relative flex flex-col items-center max-w-md w-full px-8 z-10">
        
        {/* Animated Crane/Structure SVG */}
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          {/* Background grid marker */}
          <div className="absolute inset-0 border border-[#C89B3C]/10 rounded-full animate-slow-rotate" />
          
          <svg
            className="w-40 h-40"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            {/* Outline drawing of building structure */}
            <path
              className="draw-path"
              d="M 20,80 L 20,40 L 50,15 L 80,40 L 80,80 Z"
              stroke="#C89B3C"
              strokeWidth="2.5"
            />
            {/* Grid lines inside */}
            <path
              className="draw-path"
              d="M 20,60 L 80,60 M 50,15 L 50,80 M 35,40 L 65,40"
              stroke="rgba(200, 155, 60, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <circle
              cx="50"
              cy="48"
              r="8"
              stroke="#C89B3C"
              strokeWidth="2"
              className="draw-path"
            />
          </svg>

          {/* Custom crane silhouette lifting the building center */}
          <div
            ref={craneRef}
            className="absolute top-2 left-6 w-16 h-16 pointer-events-none transition-transform"
          >
            <svg viewBox="0 0 50 50" fill="none" stroke="#C89B3C" className="w-full h-full opacity-80">
              {/* Crane tower */}
              <line x1="10" y1="50" x2="10" y2="10" strokeWidth="2" />
              {/* Crane jib */}
              <line x1="10" y1="15" x2="45" y2="10" strokeWidth="1.5" />
              {/* Counterweight */}
              <line x1="10" y1="15" x2="0" y2="17" strokeWidth="3" />
              {/* Lifting hook line */}
              <line x1="38" y1="11" x2="38" y2="35" strokeWidth="1" strokeDasharray="1 1" />
              {/* Hook */}
              <path d="M 36,35 C 36,38 40,38 40,35" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Text Details */}
        <div ref={logoRef} className="text-center mb-6">
          <h1 className="font-heading font-black text-2xl tracking-[0.25em] text-white">
            BUILDERS <span className="text-[#C89B3C]">CREW</span>
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mt-1">
            Structural Excellence
          </p>
        </div>

        {/* Progress Bar & Counter */}
        <div className="w-full bg-white/5 border border-white/10 rounded-full h-1 overflow-hidden relative mb-2">
          <div
            className="bg-[#C89B3C] h-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-[10px] font-mono tracking-widest text-gray-400">
          <span>SYSTEM_INIT</span>
          <span ref={progressTextRef}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
