import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Commercial', 'Residential', 'Interior', 'Architecture', 'Renovation'];

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Our Archive</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Premium Portfolio
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Witness our premium structural craftsmanship, complex biophilic architectural engineering, and luxurious custom handovers.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/20' 
                    : 'border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.id} 
                className="group relative h-[450px] rounded-xl overflow-hidden border border-white/5 hover:border-[#C89B3C]/30 transition-all duration-500 shadow-2xl"
              >
                {/* Background image */}
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Information */}
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
                  
                  {/* Grid details border */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                    <span className="text-[10px] uppercase text-gray-500 font-medium">
                      {p.location}
                    </span>
                    <Link 
                      to={`/projects/${p.id}`} 
                      className="text-xs font-bold text-white group-hover:text-[#C89B3C] flex items-center gap-1 hover:underline"
                    >
                      View Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
