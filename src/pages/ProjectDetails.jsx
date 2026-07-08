import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, User, Maximize, MapPin } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Project Header Info */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B3C]">// {project.category} Showcase</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Large Image Banner */}
        <div className="h-[450px] md:h-[600px] rounded-xl overflow-hidden border border-white/10 relative mb-12">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Project Specs Grid & Full Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="font-heading font-bold text-2xl text-[#C89B3C] border-b border-white/10 pb-3">Development Overview</h3>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Every detail of this project was executed under the strict supervision of Builders Crew engineers. The materials used were checked for structural specifications, and certifications were updated and verified with relevant local development authorities.
            </p>

            <div className="mt-8">
              <Link 
                to="/get-quote" 
                className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-lg shadow-[#C89B3C]/20"
              >
                Consult on Similar Project
              </Link>
            </div>
          </div>

          {/* Specs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#111111] border border-white/10 rounded-xl p-6 flex flex-col gap-6">
              <h4 className="font-heading font-bold text-white text-lg border-b border-white/10 pb-3">Project Specifications</h4>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <User className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase text-[10px] tracking-wider font-semibold">Client</span>
                    <span className="text-white font-medium">{project.client}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <Calendar className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase text-[10px] tracking-wider font-semibold">Completion Year</span>
                    <span className="text-white font-medium">{project.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <Maximize className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase text-[10px] tracking-wider font-semibold">Total Area</span>
                    <span className="text-white font-medium">{project.area}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="p-2 bg-white/5 rounded border border-white/10">
                    <MapPin className="w-4 h-4 text-[#C89B3C]" />
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase text-[10px] tracking-wider font-semibold">Location</span>
                    <span className="text-white font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
