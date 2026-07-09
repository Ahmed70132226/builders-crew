import { Compass, PenTool, LayoutGrid, Layers, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';

export default function Architecture() {
  const concepts = [
    {
      title: 'Biophilic Integration',
      desc: 'Merging live botanical zones with steel-grid layouts to optimize climate retention and human productivity.',
      icon: Compass
    },
    {
      title: 'Floating Structural Steel',
      desc: 'Removing heavy columns in main reception halls with advanced cantilever steel beams.',
      icon: PenTool
    },
    {
      title: 'Glass Curtain Walls',
      desc: 'Optimizing exterior views with thermally insulated low-E glazed windows.',
      icon: LayoutGrid
    }
  ];

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Hero Header */}
      <section className="py-24 bg-[#111111] border-b border-[#C89B3C]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C]">// Design Studio</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-tight">
              Future-Proof Architectural Form
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design landmarks that blend utility with absolute prestige. Our structural layouts use 3D BIM models to simulate load patterns, wind corridors, and solar trajectories before breaking ground.
            </p>
            <div className="pt-2">
              <Link 
                to="/get-quote"
                className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition-all inline-block"
              >
                Inquire Architecture Package
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 h-[380px] md:h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
              alt="Architectural conceptual design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Concept Breakdown */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Engineering Philosophy" 
            title="Structural Design Standards" 
            subtitle="Explore the key pillars that support our award-winning architectural blueprints."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {concepts.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="bg-[#111111] border border-white/5 hover:border-[#C89B3C]/30 p-8 rounded-xl flex flex-col gap-4 transition-colors">
                  <div className="p-3 bg-[#C89B3C]/10 rounded-lg w-max border border-[#C89B3C]/20">
                    <Icon className="w-6 h-6 text-[#C89B3C]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{c.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blueprints / Render Gallery */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="BIM Visualizations" 
            title="3D Concepts & Structural Models" 
            subtitle="Witness the transition from technical layout blueprints to real textured environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden relative group border border-white/10 h-[300px] md:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                alt="Technical drawing blueprint" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] text-[#C89B3C] font-bold uppercase tracking-widest">Phase 1</span>
                <h4 className="text-white font-heading font-bold text-lg">Load Distribution Blueprints</h4>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden relative group border border-white/10 h-[300px] md:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Finished structure render" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] text-[#C89B3C] font-bold uppercase tracking-widest">Phase 2</span>
                <h4 className="text-white font-heading font-bold text-lg">Textured 3D Facade Renderings</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
