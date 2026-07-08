import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, HeartHandshake, CheckSquare, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { TEAM } from '../constants/data';

export default function About() {
  const milestones = [
    { year: '2004', title: 'Company Inception', desc: 'Builders Crew founded in Lahore with a core focus on structural design consultancy.' },
    { year: '2010', title: 'Residential Landmark', desc: 'Completed our first gated premium housing sector layout contract.' },
    { year: '2017', title: 'Commercial Expansion', desc: 'Contracted for multi-level high-rises and modern plazas in main business hubs.' },
    { year: '2023', title: 'Turnkey Mastery', desc: 'Upgraded operations to full end-to-end turnkey packages including bespoke luxury interiors.' }
  ];

  return (
    <div className="bg-black text-white pt-24">
      {/* Page Title Header */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// About Our Firm</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Crafting Spaces for Global Lifestyles
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Builders Crew is a premium construction name dedicated to delivering high-performance commercial and luxury residential landmarks.
          </p>
        </div>
      </section>

      {/* Corporate Message / CEO Statement */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 h-[450px] rounded-xl overflow-hidden border border-[#C89B3C]/20 relative">
            <img 
              src="/CEO.png" 
              alt="CEO Asif Shahzad" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h4 className="text-white font-bold text-lg">Asif Shahzad</h4>
              <p className="text-xs text-[#C89B3C] uppercase tracking-wider font-semibold">CEO & Founder</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C]">
              // Message from Leadership
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight">
              "Excellence is not a singular act, but a habit of engineering."
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              For over two decades, Builders Crew has built trust alongside concrete. We believe that premium construction goes beyond laying bricks; it requires rigorous engineering integrity, deep design aesthetics, and absolute pricing transparency.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you plan an ultra-luxury modern villa in DHA Lahore or a commercial complex, our team coordinates with designers, vendors, and regulators, ensuring a smooth, stress-free delivery.
            </p>
            <div className="flex gap-12 mt-4 border-t border-white/10 pt-6">
              <div>
                <span className="text-3xl font-extrabold text-[#C89B3C] font-heading">20+</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Building Trust</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-[#C89B3C] font-heading">100%</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Legally Audited Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Our Creed" 
            title="Core Corporate Values" 
            subtitle="The fundamental guidelines that drive our engineers, planners, and designers every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-white/5 p-8 rounded-xl flex flex-col gap-4">
              <div className="p-3 bg-[#C89B3C]/10 rounded-lg w-max border border-[#C89B3C]/20">
                <Target className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Our Mission</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                To build high-end residential and commercial architecture that withstands generational shifts, offering high structural durability and aesthetic refinement.
              </p>
            </div>
            
            <div className="bg-black border border-white/5 p-8 rounded-xl flex flex-col gap-4">
              <div className="p-3 bg-[#C89B3C]/10 rounded-lg w-max border border-[#C89B3C]/20">
                <Eye className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Our Vision</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                To stand as the gold standard of real estate development globally, recognized for engineering innovations, seismic designs, and zero-defect handovers.
              </p>
            </div>
            
            <div className="bg-black border border-white/5 p-8 rounded-xl flex flex-col gap-4">
              <div className="p-3 bg-[#C89B3C]/10 rounded-lg w-max border border-[#C89B3C]/20">
                <ShieldCheck className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Quality Promise</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                We implement complete material transparency logsheets, tracking concrete compressive strengths, steel gauges, and waterproofing integrity with extreme diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones History Timeline */}
      <section className="py-24 bg-black border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Company Evolution" 
            title="Our Milestone Timeline" 
            subtitle="Follow our growth story from a local consultancy to a premier turnkey development force."
          />

          <div className="relative border-l-2 border-[#C89B3C]/20 max-w-4xl mx-auto pl-8 flex flex-col gap-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Year Indicator circle */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-black border-4 border-[#C89B3C] group-hover:bg-[#C89B3C] transition-colors duration-300" />
                <span className="font-heading font-black text-2xl text-[#C89B3C] block mb-1">
                  {m.year}
                </span>
                <h4 className="text-white font-bold text-lg mb-2">
                  {m.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team grid */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Elite Leadership" 
            title="The Builders Crew Group" 
            subtitle="Meet our senior architects, project managers, and structural consultants."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((t, idx) => (
              <div 
                key={idx} 
                className="group bg-black border border-white/5 hover:border-[#C89B3C]/50 rounded-xl overflow-hidden transition-all duration-500 shadow-xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h4 className="text-white font-heading font-bold text-base group-hover:text-[#C89B3C] transition-colors">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-semibold">{t.position}</p>
                  <div className="text-[10px] text-gray-400 mt-2 pt-2 border-t border-white/5 flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span>Exp: {t.experience}</span>
                      <a href={`mailto:${t.email}`} className="text-[#C89B3C] hover:underline">Email</a>
                    </div>
                    {t.phone && (
                      <div className="flex justify-between text-gray-500 mt-0.5">
                        <span>Phone:</span>
                        <a href={`tel:${t.phone}`} className="text-white hover:underline">{t.phone}</a>
                      </div>
                    )}
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
