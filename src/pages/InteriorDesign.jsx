import SectionHeader from '../components/SectionHeader';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

export default function InteriorDesign() {
  const interiorWorks = [
    {
      title: 'DHA Villa Living Lounge',
      desc: 'Bespoke walnut wood panels paired with book-matched Calacatta marble slab fireplaces.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Corporate Executive Boardroom',
      desc: 'Concealed smart technology screens, integrated acoustics, and premium custom leather paneling.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Travertine Master Bathroom',
      desc: 'Monolithic stone-carved bathtubs, brushed brass fixture sets, and custom floor-heating grids.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Bespoke Interiors</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Luxury Spatial Styling
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Curated lighting schemas, custom-designed woodwork, and high-end materials tailored to define sophisticated living.
          </p>
        </div>
      </section>

      {/* Before / After Transformation Slider */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader 
            badge="Space Transformation" 
            title="Before & After Comparison" 
            subtitle="Drag the golden divider in the center to view our dramatic structural and interior upgrades."
          />
          
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80" 
            afterImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Before Restoration"
            afterLabel="Bespoke Finished Lounge"
          />
        </div>
      </section>

      {/* Interior Gallery List */}
      <section className="py-24 bg-[#111111] border-t border-[#C89B3C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Featured Layouts" 
            title="Luxury Styling Showcase" 
            subtitle="Explore our custom work across elite residences and high-performance commercial layouts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interiorWorks.map((work, idx) => (
              <div 
                key={idx} 
                className="group bg-black border border-white/5 hover:border-[#C89B3C]/40 rounded-xl overflow-hidden transition-all duration-500 shadow-xl"
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#C89B3C] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {work.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/get-quote" 
              className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded transition-all inline-block"
            >
              Consult with Interior Architects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
