import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ShieldAlert, ArrowLeft, ArrowUpRight, Calculator, Send } from 'lucide-react';
import { SERVICES } from '../constants/data';
import NotFound from './NotFound';
import emailjs from '@emailjs/browser';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  // Estimator States
  const [area, setArea] = useState(2000);
  const [grade, setGrade] = useState('premium');
  
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    message: ''
  });

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, message: '' });

    // Calculate rates in background
    let rate = 150;
    if (grade === 'standard') rate = 85;
    if (grade === 'luxury') rate = 290;

    const baseCost = area * rate;
    const engineeringFee = baseCost * 0.08;
    const approvalsFee = baseCost * 0.03;
    const total = baseCost + engineeringFee + approvalsFee;

    const emailContent = `
      Service Consultation Details:
      -----------------------------
      Service Name: ${service.title}
      Client Name: ${clientInfo.name}
      Client Phone: ${clientInfo.phone}
      Estimated Area: ${area} sq ft
      Material Grade: ${grade}

      Background Calculated Costs:
      ----------------------------
      Travertine & Core Construction: $${baseCost.toLocaleString()}
      Engineering & Supervision (8%): $${engineeringFee.toLocaleString()}
      Legal Approvals & Permitting (3%): $${approvalsFee.toLocaleString()}
      Total Project Valuation: $${total.toLocaleString()}
    `;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: clientInfo.name,
          email: 'quote-inquiry@builderscrew.com',
          message: emailContent
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        message: 'Your service consultation request and metrics were delivered! Our coordinators will contact you shortly.'
      });

      setClientInfo({ name: '', phone: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        message: 'Failed to process request. Please contact us directly at 0321-4858075.'
      });
    }
  };

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C89B3C] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-xl">
                <Icon className="w-8 h-8 text-[#C89B3C]" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gray-500">// Service Specialization</span>
                <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white">{service.title}</h1>
              </div>
            </div>

            <div className="h-[400px] rounded-xl overflow-hidden relative border border-white/10">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-2xl text-[#C89B3C]">Overview & Deliverables</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.fullDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111] p-8 rounded-xl border border-white/5">
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-4">Core Inclusions</h4>
                <ul className="flex flex-col gap-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <Check className="w-4 h-4 text-[#C89B3C] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <h4 className="font-heading font-bold text-white text-base">Warranty & Cover</h4>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    This service is backed by our full 10-Year structural engineering warranty and a 12-month fixtures, installations, and concrete warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Estimator Form Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#111111] border border-[#C89B3C]/20 rounded-xl p-6 shadow-xl flex flex-col gap-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <Calculator className="w-5 h-5 text-[#C89B3C]" />
                <h3 className="font-heading font-bold text-lg text-white">Project Cost Estimator</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Project Area (sq ft)</label>
                  <input 
                    type="number" 
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="bg-black border border-white/10 text-white rounded p-2.5 focus:border-[#C89B3C] outline-none text-sm w-full"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Finish / Material Grade</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['standard', 'premium', 'luxury'].map((lvl) => (
                      <button
                        type="button"
                        key={lvl}
                        onClick={() => setGrade(lvl)}
                        className={`text-[10px] uppercase font-bold tracking-widest py-2 rounded border transition-colors cursor-pointer ${
                          grade === lvl 
                            ? 'bg-[#C89B3C] text-black border-[#C89B3C]' 
                            : 'border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={clientInfo.name}
                      onChange={handleInputChange}
                      className="bg-black border border-white/10 text-white rounded p-2.5 focus:border-[#C89B3C] outline-none text-sm w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Phone Contact *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={clientInfo.phone}
                      onChange={handleInputChange}
                      className="bg-black border border-white/10 text-white rounded p-2.5 focus:border-[#C89B3C] outline-none text-sm w-full"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest py-3 rounded transition-colors duration-300 shadow-md cursor-pointer disabled:opacity-55 flex items-center justify-center gap-1.5"
                >
                  {formStatus.submitting ? 'Submitting...' : 'Submit Request'} <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {formStatus.message && (
                <div className={`p-4 rounded text-[11px] text-white text-center border leading-normal ${
                  formStatus.success ? 'bg-[#C89B3C]/10 border-[#C89B3C]' : 'bg-red-950/40 border-red-500'
                }`}>
                  {formStatus.message}
                </div>
              )}
            </div>

            {/* Inquiry Call Card */}
            <div className="bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-xl p-6 flex flex-col gap-4">
              <h4 className="font-heading font-bold text-white text-base">Inquire About This Service</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect directly with our project management group to discuss concrete specifications, custom layout design, and scheduling parameters.
              </p>
              <Link 
                to="/contact" 
                className="bg-black hover:bg-[#111111] text-[#C89B3C] border border-[#C89B3C]/30 text-center font-semibold text-xs uppercase tracking-widest py-3 rounded transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
