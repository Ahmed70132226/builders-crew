import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/90 backdrop-blur-md border-b border-[#C89B3C]/20 py-4 shadow-xl'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex flex-col items-start select-none">
          <span className="font-heading font-extrabold text-2xl tracking-wider text-white flex items-center gap-1">
            BUILDERS<span className="text-[#C89B3C]">CREW  </span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-sans -mt-1">
            Construction Company
          </span>
        </Link>
        <br></br>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white hover:text-[#C89B3C] transition-colors relative group py-2">
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${location.pathname === '/' ? 'scale-x-100' : ''}`} />
          </Link>
          <Link to="/about" className="text-sm font-medium text-white hover:text-[#C89B3C] transition-colors relative group py-2">
            About
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${location.pathname === '/about' ? 'scale-x-100' : ''}`} />
          </Link>

          {/* Services Mega Menu Toggle */}
          <div
            className="relative py-2"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <button className="text-sm font-medium text-white hover:text-[#C89B3C] transition-colors flex items-center gap-1 cursor-pointer">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-black/95 border border-[#C89B3C]/20 shadow-2xl p-6 rounded-lg grid grid-cols-2 gap-4 mt-2"
                >
                  <div className="col-span-2 border-b border-white/10 pb-2 mb-2">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C89B3C]">Our Specializations</h4>
                  </div>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="group flex items-start gap-3 p-2 rounded hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 bg-[#C89B3C]/10 rounded group-hover:bg-[#C89B3C] transition-colors">
                        <s.icon className="w-4 h-4 text-[#C89B3C] group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white group-hover:text-[#C89B3C] transition-colors">{s.title}</h5>
                        <p className="text-xs text-gray-400 line-clamp-1">{s.shortDesc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 text-center pt-2 border-t border-white/5">
                    <Link to="/services" className="text-xs text-[#C89B3C] hover:underline flex items-center justify-center gap-1">
                      View All Services <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/projects" className="text-sm font-medium text-white hover:text-[#C89B3C] transition-colors relative group py-2">
            Projects
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${location.pathname.startsWith('/projects') ? 'scale-x-100' : ''}`} />
          </Link>
          {/* <Link to="/properties" className="text-sm font-medium text-white hover:text-[#C89B3C] transition-colors relative group py-2">
            Properties
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${location.pathname.startsWith('/properties') ? 'scale-x-100' : ''}`} />
          </Link> */}

          <div className="flex items-center gap-6">
            <Link to="/architecture" className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-[#C89B3C] transition-colors">Architecture</Link>
            <Link to="/interior-design" className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-[#C89B3C] transition-colors">Interior</Link>
            <Link to="/renovation" className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-[#C89B3C] transition-colors">Renovation</Link>
          </div>
        </nav>

        {/* Call & CTA buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0321-4858075"
            className="flex items-center gap-2 text-white hover:text-[#C89B3C] transition-colors text-sm font-medium"
          >
            <div className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-[#C89B3C]/50 transition-colors">
              <Phone className="w-4 h-4 text-[#C89B3C]" />
            </div>
            <span>0321-4858075</span>
          </a>
          <Link
            to="/get-quote"
            className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded transition-all duration-300 shadow-lg shadow-[#C89B3C]/20 hover:shadow-[#C89B3C]/35 flex items-center gap-1.5"
          >
            Get Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburguer */}
        <button
          className="lg:hidden text-white hover:text-[#C89B3C] transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 p-6 bg-black/95">
              <Link to="/" className="text-lg font-medium text-white hover:text-[#C89B3C] transition-colors">Home</Link>
              <Link to="/about" className="text-lg font-medium text-white hover:text-[#C89B3C] transition-colors">About</Link>
              <Link to="/services" className="text-lg font-medium text-white hover:text-[#C89B3C] transition-colors">Services</Link>
              <Link to="/projects" className="text-lg font-medium text-white hover:text-[#C89B3C] transition-colors">Projects</Link>
              <Link to="/properties" className="text-lg font-medium text-white hover:text-[#C89B3C] transition-colors">Properties</Link>

              <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-3 my-2">
                <Link to="/architecture" className="text-xs uppercase tracking-widest text-gray-400 text-center hover:text-[#C89B3C]">Architecture</Link>
                <Link to="/interior-design" className="text-xs uppercase tracking-widest text-gray-400 text-center hover:text-[#C89B3C]">Interior</Link>
                <Link to="/renovation" className="text-xs uppercase tracking-widest text-gray-400 text-center hover:text-[#C89B3C]">Renovation</Link>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <a
                  href="tel:0321-4858075"
                  className="flex items-center justify-center gap-2 text-white hover:text-[#C89B3C] transition-colors py-3 border border-white/10 rounded"
                >
                  <Phone className="w-4 h-4 text-[#C89B3C]" />
                  <span>0321-4858075</span>
                </a>
                <Link
                  to="/get-quote"
                  className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-center text-xs uppercase tracking-widest py-3.5 rounded transition-all duration-300 shadow-lg shadow-[#C89B3C]/20"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
