import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, BedDouble, Bath, Maximize, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { PROPERTIES } from '../constants/data';
import NotFound from './NotFound';
import Modal from '../components/Modal';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  if (!property) {
    return <NotFound />;
  }

  // Set initial image
  const heroImage = activeImage || property.image;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Your private visit scheduling has been requested. Our concierge manager will connect shortly.`);
    setIsBookingOpen(false);
  };

  const amenities = [
    'Italian Travertine Cladding', 'Fully Automated Smart Grid', 'Seismic-Resilient Reinforced Concrete',
    'Concealed Climate-Control HVAC', 'Infinity Cantilever Pool', 'Landscape Botanical Garden',
    'Sub-Zero High-Performance Kitchen', 'Multi-Layer Security Infrastructure'
  ];

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          to="/properties" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </Link>

        {/* Property Headline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#C89B3C] text-black text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded">
                {property.badge}
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-300 text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded">
                {property.status}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight mb-2">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-[#C89B3C]" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-gray-500 uppercase text-[10px] tracking-wider font-semibold">Asking Price</span>
            <span className="font-heading font-black text-3xl md:text-4xl text-[#C89B3C]">{property.price}</span>
          </div>
        </div>

        {/* Gallery Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main big image */}
          <div className="lg:col-span-9 h-[450px] md:h-[550px] rounded-xl overflow-hidden border border-white/10 relative">
            <img 
              src={heroImage} 
              alt={property.title} 
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          {/* Thumbnails grid */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 h-max overflow-x-auto lg:overflow-x-visible">
            {property.gallery.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`h-24 md:h-32 lg:h-28 w-32 lg:w-full rounded-lg overflow-hidden border transition-all duration-300 shrink-0 ${
                  heroImage === img ? 'border-[#C89B3C] scale-95' : 'border-white/10 hover:border-[#C89B3C]/50'
                }`}
              >
                <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Details & Scheduling Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-4 bg-[#111111] p-6 rounded-xl border border-white/5 text-center text-sm">
              <div className="flex flex-col gap-1 border-r border-white/10">
                <span className="text-gray-500 uppercase text-[10px] tracking-wider font-bold">Bedrooms</span>
                <span className="text-white font-extrabold text-lg flex items-center justify-center gap-1.5 mt-1">
                  <BedDouble className="w-4 h-4 text-[#C89B3C]" /> {property.beds}
                </span>
              </div>
              <div className="flex flex-col gap-1 border-r border-white/10">
                <span className="text-gray-500 uppercase text-[10px] tracking-wider font-bold">Bathrooms</span>
                <span className="text-white font-extrabold text-lg flex items-center justify-center gap-1.5 mt-1">
                  <Bath className="w-4 h-4 text-[#C89B3C]" /> {property.baths}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase text-[10px] tracking-wider font-bold">Total Area</span>
                <span className="text-white font-extrabold text-lg flex items-center justify-center gap-1.5 mt-1">
                  <Maximize className="w-4 h-4 text-[#C89B3C]" /> {property.area}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-2xl text-[#C89B3C]">About The Property</h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-2xl text-[#C89B3C]">Premium Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {amenities.map((am, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs bg-white/5 border border-white/5 p-4 rounded-lg">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#C89B3C]" />
                    <span className="text-gray-300">{am}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visit booking sidebar widget */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#111111] border border-[#C89B3C]/20 rounded-xl p-6 shadow-xl flex flex-col gap-6">
              <h3 className="font-heading font-bold text-lg text-white border-b border-white/10 pb-4">Schedule Private Tour</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Experience this luxury masterpiece in person. Arrange a confidential tour with our senior concierge coordinators.
              </p>
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest py-3.5 rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Schedule Tour Now <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        title={`Request Tour: ${property.title}`}
      >
        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
          <p className="text-xs text-gray-400">
            Request a private walkthrough of {property.title}. Our luxury coordinators will contact you to coordinate dates and security clearances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Your Name *</label>
              <input type="text" required className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Your Contact *</label>
              <input type="tel" required className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Preferred Date *</label>
              <input type="date" required className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Preferred Hour *</label>
              <select className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none">
                <option>Morning (10:00 AM - 12:00 PM)</option>
                <option>Afternoon (01:00 PM - 03:00 PM)</option>
                <option>Evening (04:00 PM - 06:00 PM)</option>
              </select>
            </div>
          </div>
          <button 
            type="submit"
            className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest py-3.5 rounded transition-all mt-4 cursor-pointer"
          >
            Submit Schedule Request
          </button>
        </form>
      </Modal>
    </div>
  );
}
