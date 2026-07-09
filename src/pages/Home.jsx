import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, Shield, Award, Users, HardHat, CheckCircle2, Star,
  Compass, Paintbrush, Wrench, FileCheck, Layers, ClipboardList, PenTool,
  Clock, Check
} from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants/data';
import SectionHeader from '../components/SectionHeader';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BlueprintGrid from '../components/BlueprintGrid';

function CountUp({ end, duration = 3, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const endVal = parseInt(end, 10);
    if (isNaN(endVal)) return;

    let animationFrame;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * endVal));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeStep, setActiveStep] = useState(0);

  // Refs for animations
  const heroRef = useRef(null);
  const heroSkylineRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroStatsRef = useRef(null);

  const aboutRef = useRef(null);
  const blueprintSvgRef = useRef(null);
  const servicesRef = useRef(null);
  const showcaseRef = useRef(null);
  const whyUsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  // Intersection Observers for simple triggers
  const { ref: statsInViewRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Custom text split helper for anims
  const splitTextWords = (text) => {
    return text.split(' ').map((word, idx) => (
      <span key={idx} className="inline-block overflow-hidden mr-3">
        <span className="inline-block hero-title-word transform translate-y-full opacity-0">
          {word}
        </span>
      </span>
    ));
  };

  useEffect(() => {
    // --- Hero Animations ---
    const ctx = gsap.context(() => {
      // Heading words reveal
      gsap.to('.hero-title-word', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power4.out',
        delay: 0.2
      });

      // Subtitle fade-up
      gsap.to(heroSubRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });

      // CTA Buttons scale in
      gsap.to('.hero-cta-btn', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        delay: 1.1
      });

      // Skyline outline path reveal
      gsap.to('.skyline-draw-path', {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.out',
        delay: 0.5
      });

      // Cranes rotate slightly and lift beams
      gsap.to('.crane-jib', {
        rotate: 4,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.crane-hook', {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Floating clouds animation
      gsap.to('.sky-cloud', {
        x: '100vw',
        duration: 45,
        repeat: -1,
        ease: 'none',
        stagger: {
          each: 15,
          from: 'random'
        }
      });

      // Floating light particles inside hero
      const particles = document.querySelectorAll('.hero-particle');
      particles.forEach((p, idx) => {
        gsap.to(p, {
          y: -150,
          x: '+=40',
          opacity: 0,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          ease: 'power1.out',
          delay: idx * 0.4
        });
      });

      // Scroll parallax for Hero
      gsap.to(heroSkylineRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // --- Scroll Trigger Animations for each section ---

      // About Section
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      aboutTl.from('.about-reveal-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }).to('.about-blueprint-path', {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: 'power1.inOut'
      }, '-=1');

      // Services Cards Stagger
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%'
        }
      });

      // Showcase Section Mask Reveals
      gsap.from('.showcase-reveal-card', {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: 'top 70%'
        }
      });

      // Why Us Timeline Reveals
      const timelineNodes = document.querySelectorAll('.timeline-node');
      timelineNodes.forEach((node) => {
        gsap.from(node, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: node,
            start: 'top 85%'
          }
        });
      });

      // Progress Line Drawing
      gsap.from('.timeline-progress-bar', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true
        }
      });

      // Process Flow Steps
      gsap.from('.process-step-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 75%'
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 120, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 150, suffix: '+', label: 'Team Members' }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Interior'];
  const filteredProjects = activeTab === 'All'
    ? PROJECTS.slice(0, 3)
    : PROJECTS.filter(p => p.category === activeTab).slice(0, 3);

  const processes = [
    { step: '01', title: 'Consultation & Site Review', desc: 'Understanding client spatial aspirations, site feasibility, and financial parameters.' },
    { step: '02', title: 'Blueprint Design & Engineering', desc: 'Engineering core blueprints, 3D renderings, structural layouts, and material maps.' },
    { step: '03', title: 'Foundation & Framing', desc: 'Pouring foundation footings, laying steel reinforcement grids, and initiating framing.' },
    { step: '04', title: 'Active Construction Phase', desc: 'Active development with strict project management, safety audits, and certified engineers.' },
    { step: '05', title: 'Finishing & Fine-Tuning', desc: 'Integrating custom woodwork, tile lays, painting, utility connections, and detailing.' },
    { step: '06', title: 'Premium Handover', desc: 'Thorough micro-inspections followed by premium cleanups, certifications, and smooth key handovers.' }
  ];

  return (
    <div className="bg-[#070707] text-[#F3F4F6] relative overflow-hidden">

      {/* Background blueprint grid overlay */}
      <div className="fixed inset-0 blueprint-grid-overlay opacity-30 z-0 pointer-events-none" />
      <div className="fixed inset-0 blueprint-grid-fine opacity-20 z-0 pointer-events-none" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#C89B3C]/10"
      >
        {/* Sky Parallax Layer */}
        <div ref={heroSkylineRef} className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">

          {/* Cinematic Video Background */}
          <video
            src="/Create_a_cinematic_second_.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* Dark gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

          {/* Animated clouds */}
          <div className="absolute top-20 -left-40 w-44 h-16 bg-white/2 rounded-full filter blur-xl sky-cloud" />
          <div className="absolute top-44 -left-60 w-64 h-24 bg-white/2 rounded-full filter blur-2xl sky-cloud" />

          {/* Animated floating light particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#C89B3C] rounded-full opacity-40 hero-particle"
              style={{
                left: `${15 + i * 7}%`,
                bottom: '10%',
              }}
            />
          ))}

          {/* Blueprint drawings in hero bg */}
          <BlueprintGrid />

          {/* SVGs Skyline Silhouette with Cranes */}
          <svg
            className="absolute bottom-0 w-full h-[350px] md:h-[450px] text-[#C89B3C]/15"
            viewBox="0 0 1200 400"
            fill="none"
            stroke="currentColor"
          >
            {/* Draw Path Building 1 */}
            <path
              className="skyline-draw-path"
              d="M 50,400 L 50,220 L 150,220 L 150,400 Z"
              strokeWidth="1.5"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
            {/* Building 2 with windows grid */}
            <path
              className="skyline-draw-path"
              d="M 180,400 L 180,120 L 320,120 L 320,400 Z"
              strokeWidth="1.5"
              strokeDasharray="1200"
              strokeDashoffset="1200"
            />
            {/* Windows details */}
            <line x1="200" y1="150" x2="300" y2="150" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="200" x2="300" y2="200" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="250" x2="300" y2="250" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="300" x2="300" y2="300" strokeWidth="1" strokeDasharray="3 3" />

            {/* High Rise Outline */}
            <path
              className="skyline-draw-path"
              d="M 550,400 L 550,50 L 720,50 L 720,400 Z"
              strokeWidth="2"
              strokeDasharray="1500"
              strokeDashoffset="1500"
            />
            <path
              className="skyline-draw-path"
              d="M 550,50 L 635,10 L 720,50"
              strokeWidth="2"
              strokeDasharray="300"
              strokeDashoffset="300"
            />

            {/* Crane 1 */}
            <g className="animate-float-crane transform origin-bottom" style={{ transformOrigin: '820px 400px' }}>
              {/* Vertical tower */}
              <line x1="820" y1="400" x2="820" y2="180" strokeWidth="2.5" />
              {/* Horizontal jib */}
              <line className="crane-jib" x1="820" y1="190" x2="950" y2="175" strokeWidth="2" />
              {/* Counterweight arm */}
              <line x1="820" y1="190" x2="770" y2="195" strokeWidth="4.5" />
              {/* Pulley block and cable */}
              <line className="crane-hook" x1="910" y1="180" x2="910" y2="280" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* Crane 2 (Middle Background) */}
            <g className="transform origin-bottom" style={{ transformOrigin: '400px 400px' }}>
              <line x1="400" y1="400" x2="400" y2="220" strokeWidth="1.5" />
              <line className="crane-jib" x1="400" y1="230" x2="480" y2="215" strokeWidth="1" />
              <line x1="400" y1="230" x2="360" y2="235" strokeWidth="3" />
            </g>
          </svg>
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6 mt-12">

          {/* Tagline */}
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-[#C89B3C]">
            // Structural Engineering & Bespoke Luxury
          </span>

          {/* Heading with Split Text */}
          <h1
            ref={heroHeadingRef}
            className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-white"
          >
            {splitTextWords('Forging Legacies Through Fine Architecture.')}
          </h1>

          {/* Subtitle */}
          <p
            ref={heroSubRef}
            className="text-gray-400 text-xs md:text-base max-w-2xl leading-relaxed mt-2 opacity-0 transform translate-y-6"
          >
            Builders Crew delivers master-grade structural design, custom villas, and high-rise commercial structures with meticulous detail, certified engineers, and transparent management logs.
          </p>

          {/* Call to Actions */}
          <div ref={heroCtaRef} className="flex flex-wrap gap-4 justify-center mt-4">
            <Link
              to="/get-quote"
              className="hero-cta-btn opacity-0 scale-75 bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 hover:shadow-[#C89B3C]/40"
            >
              Consult an Engineer
            </Link>
            <Link
              to="/services"
              className="hero-cta-btn opacity-0 scale-75 border border-[#C89B3C]/30 hover:border-[#C89B3C] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 bg-[#C89B3C]/5 hover:bg-[#C89B3C]/10"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Animated Stats / Counters */}
          <div
            ref={heroStatsRef}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-[#C89B3C]/10 pt-8"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-2xl md:text-4xl text-[#C89B3C]">
                  <CountUp end={s.value} duration={3} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-500 mt-2 font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-[9px] uppercase tracking-[0.25em]">Scroll Down</span>
          <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C89B3C] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section with Drawing Animation */}
      {/* <section ref={aboutRef} className="py-28 bg-[#0a0a0a] relative border-b border-[#C89B3C]/5 z-10"> */}
      {/* {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6 about-reveal-item">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C]">
              // Precision Consulting & Execution
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Bridging Visual Art and Industrial Grade Engineering
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We manage the entire spatial lifecycle: structural layout modeling, government building code clearances, premium procurement logs, and turnkey finishing. Every development is supervised by registered architects and LSE-certified engineers.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#C89B3C]/10 rounded border border-[#C89B3C]/20">
                  <Shield className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Certified Audits</h4>
                  <p className="text-xs text-gray-500 mt-1">Rigorous concrete testing and foundation stress diagnostics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#C89B3C]/10 rounded border border-[#C89B3C]/20">
                  <Award className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Finishing Grade</h4>
                  <p className="text-xs text-gray-500 mt-1">Stated travertine, customized woodwork, and glass facades.</p>
                </div>
              </div>
            </div> */}

      {/* <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:text-[#DFBA6B] transition-colors"
              >
                Examine Corporate Profile <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div> */}
      {/* 
          {/* Architectural Drawing Animation Frame */}
      {/* <div className="relative flex items-center justify-center h-[400px] md:h-[450px] bg-[#111] rounded-2xl border border-[#C89B3C]/15 overflow-hidden">
        {/* Fine grids inside the frame */}
      {/* <div className="absolute inset-0 blueprint-grid-overlay opacity-30" />
        <div className="absolute inset-0 blueprint-grid-fine opacity-20" />

        <svg
          ref={blueprintSvgRef}
          className="w-4/5 h-4/5 text-[#C89B3C]/30"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        > */}
      {/* Detailed Architectural Blueprint Drawing */}
      {/* Foundation Lines */}
      {/* <line x1="10" y1="85" x2="90" y2="85" strokeWidth="0.5" strokeDasharray="1 1" /> */}
      {/* Rising Walls */}
      {/* <path
            className="about-blueprint-path"
            d="M 20,85 L 20,45 L 50,20 L 80,45 L 80,85"
            stroke="#C89B3C"
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          /> */}
      {/* Internal structure blocks */}
      {/* <path
            className="about-blueprint-path"
            d="M 20,65 L 80,65 M 50,20 L 50,85 M 35,45 L 65,45"
            stroke="rgba(200, 155, 60, 0.6)"
            strokeWidth="1"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          /> */}
      {/* Door and windows details */}
      {/* <rect
            className="about-blueprint-path"
            x="42"
            y="65"
            width="16"
            height="20"
            stroke="#C89B3C"
            strokeWidth="1"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
          <circle
            className="about-blueprint-path"
            cx="50"
            y="52"
            r="6"
            stroke="#C89B3C"
            strokeWidth="1"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
          {/* Floating Technical Text */}
      {/* <text x="12" y="15" fill="rgba(200,155,60,0.5)" className="font-mono text-[4px]">DRAFT_ID: #40582_A</text>
          <text x="75" y="15" fill="rgba(200,155,60,0.5)" className="font-mono text-[4px]">SCALE: 1:50</text>
        </svg> */}

      {/* Subtle light bar sweeping */}
      {/* <div className="absolute top-0 bottom-0 w-0.5 bg-[#C89B3C]/20 shadow-[0_0_10px_#C89B3C] animate-pulse left-1/4" />
      </div>
    </div>
      </section > 
}

{/* Services Showcase Section */ }
      <section ref={servicesRef} className="py-28 bg-[#070707] relative z-10 border-b border-[#C89B3C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Premium Specialties"
            title="Premium Construction Offerings"
            subtitle="Explore our comprehensive engineering, architectural, and turnkey development specialties."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {SERVICES.slice(0, 6).map((service) => {
              return (
                <div
                  key={service.id}
                  className="service-card group bg-[#0d0d0d] border border-white/5 hover:border-[#C89B3C]/40 rounded-xl overflow-hidden transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,155,60,0.05)]"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />

                    {/* Icon floating */}
                    <div className="absolute top-4 left-4 p-3 bg-black/80 rounded-lg border border-white/10 group-hover:bg-[#C89B3C] group-hover:border-[#C89B3C] transition-all duration-300">
                      <service.icon className="w-5 h-5 text-[#C89B3C] group-hover:text-black group-hover:rotate-12 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#C89B3C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C89B3C] hover:text-[#DFBA6B] pt-2 w-max"
                    >
                      Read Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-[#C89B3C]/30 text-white hover:text-black hover:bg-[#C89B3C] px-8 py-4 rounded transition-all duration-300 text-xs font-semibold uppercase tracking-widest"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects with Masonry / Before After Slider */}
      <section ref={showcaseRef} className="py-28 bg-[#0a0a0a] relative z-10 border-b border-[#C89B3C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">
                // Signature Portfolio
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight">
                Featured Landmarks & Design
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 ${activeTab === cat
                    ? 'bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/20'
                    : 'border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-Style Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={p.id}
                  className="showcase-reveal-card group relative h-[480px] rounded-xl overflow-hidden border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-500 shadow-2xl"
                >
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B3C]">
                      {p.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#C89B3C] transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2">
                      {p.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                      <span className="text-[10px] uppercase text-gray-500 font-medium">
                        Location: {p.location}
                      </span>
                      <Link
                        to={`/projects/${p.id}`}
                        className="text-xs font-bold text-white group-hover:text-[#C89B3C] flex items-center gap-1 hover:underline"
                      >
                        Examine Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Interactive Before/After Visualisation */}
          <div className="mt-20 border-t border-[#C89B3C]/10 pt-20">
            <SectionHeader
              badge="Case Study / Transformation"
              title="Modernizing Space Refurbishment"
              subtitle="Drag the interactive slider below to inspect the structural transformation of The Heritage Manor."
            />
            <div className="mt-12 max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80"
                afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                beforeLabel="Heritage Frame (Raw)"
                afterLabel="Finished Manor (Modernized)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Vertical Scroll Timeline */}
      <section ref={whyUsRef} className="py-28 bg-[#070707] relative z-10 border-b border-[#C89B3C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Engineering Integrity"
            title="Why Elite Developers Choose Us"
            subtitle="Our structural guarantees and process parameters set us apart from average contracting agencies."
          />

          <div className="relative mt-20 max-w-3xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#C89B3C] timeline-progress-bar scale-y-0 origin-top" />

            {/* Timeline Steps */}
            <div className="flex flex-col gap-16">
              {[
                {
                  title: '100% Raw Material Transparency',
                  desc: 'We provide open cloud logs tracking cement tests, steel brands, and raw aggregate source logs for absolute peace of mind.',
                  side: 'left'
                },
                {
                  title: 'LSE & PEC Certified Consulting',
                  desc: 'All projects are strictly calculated, signed off, and audited by structural engineers with decades of institutional history.',
                  side: 'right'
                },
                {
                  title: 'Strict Code Adherence & Permits',
                  desc: 'We process all LDA/DHA/CDA permissions, building height validations, and environmental safety clearances.',
                  side: 'left'
                },
                {
                  title: '10-Year Structural Coverage',
                  desc: 'Our confidence in reinforced foundations allows us to issue written 10-year guarantees on structural load stability.',
                  side: 'right'
                }
              ].map((item, idx) => (
                <div key={idx} className="timeline-node relative flex flex-col md:flex-row items-start md:items-center">

                  {/* Bullet center indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-black border-2 border-[#C89B3C] z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${item.side === 'left' ? 'md:pr-16 md:text-right' : 'md:translate-x-full md:pl-16'}`}>
                    <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider block mb-2">0{idx + 1}. FEATURE</span>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline Section */}
      <section ref={processRef} className="py-28 bg-[#0a0a0a] relative z-10 border-b border-[#C89B3C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Project Lifecycle"
            title="Our Construction Pipeline"
            subtitle="Interactive steps showing the detailed roadmap from empty plot to key delivery."
          />

          {/* Interactive Steps Horizontal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`process-step-card group relative p-6 rounded-xl border transition-all duration-500 cursor-pointer select-none ${activeStep === idx
                  ? 'bg-[#C89B3C]/5 border-[#C89B3C] shadow-[0_5px_15px_rgba(200,155,60,0.05)]'
                  : 'bg-[#0d0d0d] border-white/5 hover:border-[#C89B3C]/20'
                  }`}
              >
                <div className={`font-heading font-black text-3xl mb-4 transition-colors duration-300 ${activeStep === idx ? 'text-[#C89B3C]' : 'text-white/10 group-hover:text-[#C89B3C]/40'
                  }`}>
                  {proc.step}
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-2 leading-tight">
                  {proc.title}
                </h3>
                <div className={`w-full h-0.5 mt-4 rounded-full transition-all duration-300 ${activeStep === idx ? 'bg-[#C89B3C]' : 'bg-white/5'
                  }`} />
              </div>
            ))}
          </div>

          {/* Pipeline Active Description Box */}
          <div className="mt-12 p-8 bg-[#0d0d0d] border border-[#C89B3C]/20 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="p-5 bg-[#C89B3C]/10 rounded-xl border border-[#C89B3C]/25 text-[#C89B3C] font-heading font-extrabold text-3xl">
              0{activeStep + 1}
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-lg mb-2">{processes[activeStep].title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{processes[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="py-28 bg-[#070707] relative z-10 border-b border-[#C89B3C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Client Endorsements"
            title="Trusted By Private Real Estate Owners"
            subtitle="Hear what commercial directors and estate owners say about partnering with Builders Crew."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl flex flex-col gap-6 shadow-xl hover:border-[#C89B3C]/30 transition-all duration-300"
              >
                <div className="flex gap-1 text-[#C89B3C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#C89B3C]/30"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.author}</h4>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Actions / Start Project Form */}
      <section ref={contactRef} className="py-28 bg-[#0a0a0a] relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C89B3C]">
            // Build Beyond Limits
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Ready to Begin Drafting Your Landmark?
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl leading-relaxed">
            Discuss materials, structural plans, or scheduling. Request an initial consulting callback from our engineering management group.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              to="/get-quote"
              className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-xl shadow-[#C89B3C]/20"
            >
              Get Free Custom Estimate
            </Link>
            <a
              href="tel:03214858075"
              className="border border-white/20 hover:border-[#C89B3C] text-white hover:text-black hover:bg-white px-8 py-4 rounded transition-all duration-300 bg-white/5"
            >
              Call Office Direct
            </a>
          </div>
        </div>
      </section>
    </div >
  );
}
