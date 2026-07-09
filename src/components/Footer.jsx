import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Builders Crew insights.');
  };

  return (
    <footer className="bg-black border-t border-[#C89B3C]/20 pt-24 pb-10 text-gray-400 relative overflow-hidden">
      
      {/* Animated Skyline Background Overlay in Footer */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none select-none overflow-hidden opacity-10">
        <svg
          className="absolute bottom-0 w-full h-24 text-[#C89B3C]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Skyline outline */}
          <path d="M 0,100 L 0,80 L 30,80 L 30,50 L 80,50 L 80,100 L 120,100 L 120,70 L 180,70 L 180,30 L 230,30 L 230,100 L 350,100 L 350,40 L 420,40 L 420,100 L 500,100 L 500,60 L 550,60 L 550,100 L 700,100 L 700,20 L 780,20 L 780,100 L 850,100 L 850,65 L 920,65 L 920,100 L 1050,100 L 1050,45 L 1120,45 L 1120,100 L 1200,100 Z" />
          
          {/* Mini Cranes */}
          <g className="animate-float-crane transform origin-bottom" style={{ transformOrigin: '740px 100px' }}>
            <line x1="740" y1="100" x2="740" y2="40" stroke="currentColor" strokeWidth="1" />
            <line x1="740" y1="45" x2="790" y2="42" stroke="currentColor" strokeWidth="0.8" />
          </g>
          <g className="animate-float-crane transform origin-bottom" style={{ transformOrigin: '200px 100px' }}>
            <line x1="200" y1="100" x2="200" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="55" x2="250" y2="52" stroke="currentColor" strokeWidth="0.8" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
              BUILDERS<span className="text-[#C89B3C]">CREW</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans -mt-1">
              Construction Company
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-500">
            A premium, international construction and real estate brand. We engineer iconic modern landmarks, luxury villas, and high-performance corporate infrastructures.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-[#C89B3C] hover:text-black rounded transition-all duration-300 text-white">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-[#C89B3C] hover:text-black rounded transition-all duration-300 text-white">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-[#C89B3C] hover:text-black rounded transition-all duration-300 text-white">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-[#C89B3C] hover:text-black rounded transition-all duration-300 text-white">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6 border-l-2 border-[#C89B3C] pl-3">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/services/construction" className="hover:text-white hover:underline transition-all">General Construction</Link></li>
            <li><Link to="/services/residential-construction" className="hover:text-white hover:underline transition-all">Residential Estates</Link></li>
            <li><Link to="/services/commercial-construction" className="hover:text-white hover:underline transition-all">Commercial High-Rises</Link></li>
            <li><Link to="/services/architecture" className="hover:text-white hover:underline transition-all">Architectural Design</Link></li>
            <li><Link to="/services/interior-designing" className="hover:text-white hover:underline transition-all">Luxury Interiors</Link></li>
            <li><Link to="/services/renovation" className="hover:text-white hover:underline transition-all">Refurbishments</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6 border-l-2 border-[#C89B3C] pl-3">
            Corporate Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/about" className="hover:text-white hover:underline transition-all">About Our Company</Link></li>
            <li><Link to="/projects" className="hover:text-white hover:underline transition-all">Featured Portfolio</Link></li>
            <li><Link to="/properties" className="hover:text-white hover:underline transition-all">Luxury Real Estate</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:underline transition-all">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white hover:underline transition-all">General FAQ</Link></li>
            <li><Link to="/get-quote" className="hover:text-white hover:underline transition-all">Request Consultation</Link></li>
          </ul>
        </div>

        {/* Newsletter & Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-xs mb-6 border-l-2 border-[#C89B3C] pl-3">
              Newsletter
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe to receive updates on premium property releases and structural design insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex border border-white/10 rounded overflow-hidden max-w-sm">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="bg-white/5 text-sm px-4 py-2.5 outline-none flex-grow text-white placeholder-gray-600 focus:bg-white/10 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[#C89B3C] text-black px-4 flex items-center justify-center hover:bg-[#A67D2A] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-3 text-sm pt-2 border-t border-white/5">
            <a href="tel:0321-4858075" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#C89B3C]" />
              <span>0321-4858075</span>
            </a>
            <a href="mailto:shahzadaasif2023@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-[#C89B3C]" />
              <span>shahzadaasif2023@gmail.com</span>
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
              <span>Bahria Town, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Builders Crew. All Rights Reserved. Crafted for excellence.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
