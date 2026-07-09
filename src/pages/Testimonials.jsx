import { Star, Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { TESTIMONIALS } from '../constants/data';

export default function Testimonials() {
  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Client voices</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Client Endorsements
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Read comments from global estate owners and corporate real estate developers on partnering with Builders Crew.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#111111] border border-white/5 p-8 rounded-xl flex flex-col gap-6 shadow-xl relative overflow-hidden"
              >
                <Quote className="absolute right-6 top-6 w-20 h-20 text-[#C89B3C]/5 pointer-events-none" />
                <div className="flex gap-1 text-[#C89B3C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative z-10">
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
    </div>
  );
}
