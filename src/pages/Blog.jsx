import { Link } from 'react-router-dom';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { BLOGS } from '../constants/data';

export default function Blog() {
  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Corporate Insights</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            The Builders Crew Journal
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Read expert research on real estate investments, smart construction methodologies, and structural innovations.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <div 
                key={blog.id} 
                className="group bg-[#111111] border border-white/5 hover:border-[#C89B3C]/40 rounded-xl overflow-hidden transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-[10px] text-gray-500">
                      <span className="text-[#C89B3C] font-bold uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {blog.date}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#C89B3C] transition-colors leading-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{blog.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="text-xs font-bold text-[#C89B3C] hover:underline flex items-center gap-1"
                  >
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
