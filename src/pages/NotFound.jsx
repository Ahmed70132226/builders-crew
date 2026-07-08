import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="text-[#C89B3C] font-heading font-black text-8xl md:text-9xl tracking-widest block mb-4">
        404
      </span>
      <h1 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
        Architectural Error: Page Not Found
      </h1>
      <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
        The layout or blueprint coordinates you are seeking do not exist in our system. Return to the main page to continue exploring.
      </p>
      
      <Link 
        to="/" 
        className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Home
      </Link>
    </div>
  );
}
