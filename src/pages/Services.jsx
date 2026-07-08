import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants/data';

export default function Services() {
  return (
    <div className="bg-black text-white pt-24">
      {/* Page Title Header */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Our Capabilities</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Specialized Development Offerings
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Builders Crew integrates design, engineering, approvals, construction management, and turnkey handovers into a single fluid framework.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div 
                  key={s.id} 
                  className="group bg-[#111111] border border-white/5 hover:border-[#C89B3C]/50 rounded-xl overflow-hidden transition-all duration-500 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-85" />
                      <div className="absolute top-4 left-4 p-3 bg-black/85 border border-white/10 rounded-lg group-hover:bg-[#C89B3C] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#C89B3C] group-hover:text-black transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-4">
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#C89B3C] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {s.fullDesc}
                      </p>
                      
                      {/* Features mini-list */}
                      <ul className="flex flex-col gap-2 mt-2">
                        {s.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                            <Check className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="px-6 pb-6 pt-4 border-t border-white/5">
                    <Link 
                      to={`/services/${s.id}`} 
                      className="text-xs font-bold text-[#C89B3C] hover:underline flex items-center gap-1.5"
                    >
                      View Service Details <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-[#111111] border-t border-[#C89B3C]/10 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">Need a Customized Dynamic Package?</h2>
          <p className="text-gray-400 text-sm max-w-xl">
            We offer fully customizable structural consultations, mixed architecture-construction agreements, and single-contract turnkey solutions.
          </p>
          <Link 
            to="/get-quote" 
            className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded mt-4 transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
