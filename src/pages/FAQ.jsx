import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { FAQS } from '../constants/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Queries resolved</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Frequently Answered Questions
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Find answers regarding licensing, warranties, cost calculators, structural engineering diagnostics, and handover cycles.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-sm md:text-base text-white hover:text-[#C89B3C] transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-xs md:text-sm text-gray-400 border-t border-white/5 leading-relaxed bg-black/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
