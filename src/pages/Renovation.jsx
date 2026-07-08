import SectionHeader from '../components/SectionHeader';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Wrench, Layers, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Renovation() {
  const steps = [
    { title: 'Structural Survey & Diagnosis', desc: 'Analyzing existing concrete foundations, structural columns, and load-bearing parameters.' },
    { title: 'Reinforcement & Upgrades', desc: 'Adding micro-piles, composite carbon fiber columns, or steel support frames where required.' },
    { title: 'Systems & Utilities Integration', desc: 'Upgrading aged electrical wiring grids, main drainage channels, and HVAC ducts.' },
    { title: 'Travertine & Premium Finishes', desc: 'Installing high-end stone slabs, custom flooring layouts, and double-glazed facades.' }
  ];

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Structural Refurbishment</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            High-End Restoration & Renovation
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Preserving historic architectural charm while fully modernizing structural systems, materials, layout spacing, and luxury standards.
          </p>
        </div>
      </section>

      {/* Before / After comparison */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader 
            badge="Restoration Showcase" 
            title="Heritage Manor Transformation" 
            subtitle="View our work stabilizing and modernizing structural framing while preserving early architectural layouts."
          />

          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Aged Timber Manor"
            afterLabel="Restored Premium Villa"
          />
        </div>
      </section>

      {/* Renovation timeline / process */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Refurbishment Lifecycle" 
            title="The Renovation Timeline" 
            subtitle="Understanding how we structurally diagnose, stabilize, and modernise older estates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                className="bg-black border border-white/5 p-6 rounded-xl flex flex-col gap-4 hover:border-[#C89B3C]/30 transition-colors"
              >
                <span className="font-heading font-black text-3xl text-[#C89B3C]/20">{`0${idx+1}`}</span>
                <h4 className="text-white font-bold text-base">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/get-quote" 
              className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition-all inline-block shadow-lg"
            >
              Get Renovation Cost Estimation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
