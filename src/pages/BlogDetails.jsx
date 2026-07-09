import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { BLOGS } from '../constants/data';
import NotFound from './NotFound';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Blog Meta */}
        <div className="flex flex-col gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">{blog.category}</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-4 border-y border-white/10 py-3 mt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#C89B3C]" /> By {blog.author}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C89B3C]" /> {blog.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C89B3C]" /> 5 min read
            </span>
          </div>
        </div>

        {/* Blog Image */}
        <div className="h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-white/10 mb-8">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-6">
          <p className="font-semibold text-white text-base md:text-lg italic leading-relaxed border-l-2 border-[#C89B3C] pl-4">
            {blog.summary}
          </p>
          <p className="whitespace-pre-line">
            {blog.content}
          </p>
          <p>
            When investing in premium commercial structures or designing residential estates, aligning with an engineering team that handles approvals, procurement logistics, and load diagnostics protects both the architectural beauty and structural assets.
          </p>
        </div>
      </div>
    </div>
  );
}
