import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Maximize, Heart, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { PROPERTIES } from '../constants/data';
import Modal from '../components/Modal';

export default function Properties() {
  const [filter, setFilter] = useState('All');
  const [favorites, setFavorites] = useState({});
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const statuses = ['All', 'For Sale', 'Booked', 'Under Offer'];
  
  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.status === filter);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookVisit = (property) => {
    setSelectedProperty(property);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Your luxury visit for "${selectedProperty?.title}" has been requested. Our concierge manager will connect shortly.`);
    setIsBookingOpen(false);
  };

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Luxury Spaces</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Exclusive Listings
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Acquire legacy architectural mansions and modern smart villas in prime sectors. Managed and verified directly by Builders Crew.
          </p>
        </div>
      </section>

      {/* Properties Archive Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Status Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 ${
                  filter === s 
                    ? 'bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/20' 
                    : 'border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <div 
                key={p.id} 
                className="group bg-[#111111] border border-white/5 hover:border-[#C89B3C]/40 rounded-xl overflow-hidden transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image frame */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#C89B3C] text-black text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded">
                        {p.badge}
                      </span>
                      <span className="bg-black/85 text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded border border-white/10">
                        {p.status}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button 
                      onClick={() => toggleFavorite(p.id)}
                      className="absolute top-4 right-4 p-2 bg-black/75 rounded-full border border-white/10 text-white hover:text-red-500 hover:bg-black transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${favorites[p.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#C89B3C] transition-colors leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    
                    <span className="font-heading font-black text-xl text-[#C89B3C]">{p.price}</span>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {p.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                      <span>{p.location}</span>
                    </div>

                    {/* Spec Grid details */}
                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 mt-2 text-xs text-gray-400 text-center">
                      <div className="flex flex-col gap-1 border-r border-white/5">
                        <span className="text-gray-600 uppercase text-[9px] tracking-wider font-semibold">Beds</span>
                        <span className="text-white font-semibold flex items-center justify-center gap-1">
                          <BedDouble className="w-3.5 h-3.5 text-[#C89B3C]" /> {p.beds}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 border-r border-white/5">
                        <span className="text-gray-600 uppercase text-[9px] tracking-wider font-semibold">Baths</span>
                        <span className="text-white font-semibold flex items-center justify-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-[#C89B3C]" /> {p.baths}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-600 uppercase text-[9px] tracking-wider font-semibold">Area</span>
                        <span className="text-white font-semibold flex items-center justify-center gap-1">
                          <Maximize className="w-3.5 h-3.5 text-[#C89B3C]" /> {p.area}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                  <Link 
                    to={`/properties/${p.id}`} 
                    className="text-center border border-white/15 hover:border-[#C89B3C] text-xs font-semibold uppercase tracking-wider py-2.5 rounded transition-all bg-white/5 hover:bg-[#C89B3C]/10 text-white"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={() => handleBookVisit(p)}
                    className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black text-xs font-bold uppercase tracking-wider py-2.5 rounded transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Book Visit <Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Booking Modal */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        title={`Book Private Visit: ${selectedProperty?.title}`}
      >
        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
          <p className="text-xs text-gray-400 leading-normal">
            Request a private walkthrough of {selectedProperty?.title} located at {selectedProperty?.location}. Our luxury sales coordinators will arrange logistics.
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
            Submit Private Booking Request
          </button>
        </form>
      </Modal>
    </div>
  );
}
