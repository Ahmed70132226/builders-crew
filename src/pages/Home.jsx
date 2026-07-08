import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ArrowUpRight, Shield, Award, Users, HardHat, CheckCircle2, Star } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants/data';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
    { step: '01', title: 'Consultation', desc: 'Understanding client spatial aspirations, site feasibility, and financial parameters.' },
    { step: '02', title: 'Planning & Architecture', desc: 'Engineering core blueprints, 3D renderings, structural layouts, and material maps.' },
    { step: '03', title: 'Construction Phase', desc: 'Active development with strict project management, safety audits, and certified engineers.' },
    { step: '04', title: 'Quality Handover', desc: 'Thorough micro-inspections followed by premium cleanups, certifications, and smooth key handovers.' }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/Create_a_cinematic_second_.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 max-w-3xl items-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C89B3C]">
              // Premium Architectural Development
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white drop-shadow-lg">
              Building <span className="text-[#C89B3C]">Dreams</span>.<br />
              Creating Landmarks.
            </h1>
            <p className="text-gray-300 text-xs md:text-sm max-w-xl leading-relaxed mt-2 drop-shadow-md">
              Engineering iconic, multi-million dollar developments and bespoke luxury residences. We merge timeless design aesthetics with superior industrial engineering.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/get-quote"
              className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 hover:shadow-[#C89B3C]/40"
            >
              Start Project
            </Link>
            <Link
              to="/services"
              className="border border-white/20 hover:border-[#C89B3C] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors duration-300 bg-white/5 hover:bg-[#C89B3C]/10"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Floating cards / Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-white/10 pt-6 text-center"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-2xl md:text-4xl text-[#C89B3C]">
                  {s.value}{s.suffix}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll Down</span>
          <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-[#C89B3C] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* About Section Split Layout */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C]">
              // Premium Corporate Profile
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Engineering Foundations For Future Generations
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              At Builders Crew, we manage the blueprint, structural planning, permissions, material procurement, and concrete execution. Our team of certified professionals handles multi-million dollar projects with transparency and structural excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Certified Engineers</h4>
                  <p className="text-xs text-gray-500 mt-1">LSE/PEC-certified senior engineers leading all site operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Premium Standards</h4>
                  <p className="text-xs text-gray-500 mt-1">Strict adherence to national and international build codes.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:underline"
              >
                Learn More About Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Collage Grid */}
          <div className="grid grid-cols-12 gap-4 h-[450px] md:h-[500px]">
            <div className="col-span-8 h-full rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="Architecture planning"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-4 flex flex-col gap-4 h-full">
              <div className="h-1/2 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                  alt="Luxury home finish"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-1/2 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-xl p-6 flex flex-col justify-end">
                <h4 className="font-heading font-extrabold text-4xl text-[#C89B3C] mb-1">100%</h4>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Transparent pricing & material procurement logs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-black border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Luxury Services"
            title="Premium Construction Offerings"
            subtitle="Explore our comprehensive engineering, architectural, and turnkey development specialties."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group bg-[#111111] border border-white/5 hover:border-[#C89B3C]/50 rounded-xl overflow-hidden transition-all duration-500 shadow-xl"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 p-3 bg-black/80 rounded-lg border border-white/10 group-hover:bg-[#C89B3C] transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-[#C89B3C] group-hover:text-black transition-colors" />
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
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C89B3C] hover:underline pt-2 w-max"
                  >
                    Read Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-[#C89B3C]/30 text-white hover:text-black hover:bg-[#C89B3C] px-8 py-3.5 rounded transition-all duration-300 text-xs font-semibold uppercase tracking-widest"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-[#111111] border-y border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">
                // Luxury Portfolio
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight">
                Featured Developments
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 ${activeTab === cat
                    ? 'bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/20'
                    : 'border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group relative h-[450px] rounded-xl overflow-hidden border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-500 shadow-2xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

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
                      View Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 border border-[#C89B3C]/30 text-white hover:text-black hover:bg-[#C89B3C] px-8 py-3.5 rounded transition-all duration-300 text-xs font-semibold uppercase tracking-widest"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Building Process Timeline */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Project Lifecycle"
            title="Our Construction Philosophy"
            subtitle="A detailed look at the seamless, transparent journey from blueprints to turnkey handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="relative bg-[#111111] border border-white/5 p-8 rounded-xl flex flex-col gap-4 shadow-xl hover:border-[#C89B3C]/30 transition-colors"
              >
                <div className="font-heading font-black text-5xl text-[#C89B3C]/20 group-hover:text-[#C89B3C] transition-colors">
                  {proc.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {proc.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Client Endorsements"
            title="Trusted By Industry Leaders"
            subtitle="Hear what major real estate owners and commercial directors say about partnering with Builders Crew."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/5 p-8 rounded-xl flex flex-col gap-6 shadow-xl"
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
                    className="w-12 h-12 rounded-full object-cover border border-[#C89B3C]"
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

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-[#C89B3C]/20">
        <div className="absolute inset-0 bg-[#C89B3C]/5 mix-blend-overlay" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C89B3C]">
            // Build Beyond Limits
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-6xl text-white tracking-tight leading-tight">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Partner with our certified engineering consulting group and premium planners. Request a free custom consultation, and let's craft a landmark together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link
              to="/get-quote"
              className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-xl shadow-[#C89B3C]/20"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:0321-4858075"
              className="border border-white/20 hover:border-[#C89B3C] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors duration-300 bg-white/5"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
