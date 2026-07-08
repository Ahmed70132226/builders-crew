import { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, FileCheck, Landmark } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'residential',
    area: 3000,
    materials: 'premium'
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMaterialsChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      materials: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, message: '' });

    // Calculate quote inside handler for emailing
    let baseRate = 120;
    if (formData.projectType === 'commercial') {
      baseRate = formData.materials === 'luxury' ? 350 : 200;
    } else if (formData.projectType === 'interior') {
      baseRate = formData.materials === 'luxury' ? 180 : 90;
    } else {
      baseRate = formData.materials === 'luxury' ? 290 : 150;
    }

    const structureCost = formData.area * baseRate;
    const mechanicalFee = structureCost * 0.12;
    const legalApprovals = structureCost * 0.04;
    const grandTotal = structureCost + mechanicalFee + legalApprovals;

    const emailContent = `
      Client Request Details:
      -----------------------
      Name: ${formData.name}
      Phone: ${formData.phone}
      Project Type: ${formData.projectType}
      Area: ${formData.area} sq ft
      Material Grade: ${formData.materials}

      Calculated Estimations:
      -----------------------
      Concrete & Structure: $${structureCost.toLocaleString()}
      MEP & Supervision (12%): $${mechanicalFee.toLocaleString()}
      Approvals & Permits (4%): $${legalApprovals.toLocaleString()}
      Total Estimated Valuation: $${grandTotal.toLocaleString()}
    `;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: 'quote-inquiry@builderscrew.com', // dummy routing
          message: emailContent
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        message: 'Your project parameters have been successfully submitted! Our senior structural consultants will contact you shortly with an official blueprint estimate.'
      });

      setFormData({
        name: '',
        phone: '',
        projectType: 'residential',
        area: 3000,
        materials: 'premium'
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        message: 'Failed to process request. Please try calling our direct office at 0321-4858075.'
      });
    }
  };

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Title */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Design Consultations</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Consultation & Estimator
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Provide your building coordinates and space parameters. We will evaluate material logistics and deliver a legal layout estimate directly to you.
          </p>
        </div>
      </section>

      {/* Grid container */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 p-8 rounded-xl shadow-xl">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">Estimate Scope & Material Settings</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Project Class</label>
                  <select 
                    name="projectType"
                    value={formData.projectType} 
                    onChange={handleInputChange}
                    className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none"
                  >
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial High-Rise</option>
                    <option value="interior">Luxury Interior Design</option>
                    <option value="renovation">Villa Restoration / Renovation</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Project Area (sq ft)</label>
                  <input 
                    type="number" 
                    name="area"
                    required 
                    value={formData.area} 
                    onChange={handleInputChange}
                    className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold">Materials Grade</label>
                <div className="grid grid-cols-3 gap-4">
                  {['standard', 'premium', 'luxury'].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => handleMaterialsChange(lvl)}
                      className={`text-xs uppercase font-bold tracking-widest py-3 border rounded transition-colors cursor-pointer ${
                        formData.materials === lvl 
                          ? 'bg-[#C89B3C] text-black border-[#C89B3C]' 
                          : 'border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold font-sans">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold font-sans">Phone Contact *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    className="bg-black border border-white/10 text-white rounded p-3 text-sm focus:border-[#C89B3C] outline-none" 
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={formStatus.submitting}
                className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest py-3.5 rounded transition-all mt-4 cursor-pointer disabled:opacity-55 flex items-center justify-center gap-2"
              >
                {formStatus.submitting ? 'Sending Request...' : 'Submit Consultation Request'} <Send className="w-4 h-4" />
              </button>

              {formStatus.message && (
                <div className={`p-4 rounded text-xs text-white text-center mt-4 border ${
                  formStatus.success ? 'bg-[#C89B3C]/10 border-[#C89B3C]' : 'bg-red-950/40 border-red-500'
                }`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#111111] border border-[#C89B3C]/20 rounded-xl p-8 flex flex-col gap-6">
              <h3 className="font-heading font-bold text-xl text-white border-b border-white/10 pb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#C89B3C]" /> Consultation Policy
              </h3>
              
              <div className="flex flex-col gap-6 text-xs text-gray-400">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Structural Code Auditing</h4>
                    <p className="leading-relaxed">All evaluations are processed directly by LSE/PEC-certified project engineers to ensure strict building code compliance.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <FileCheck className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Pricing Integrity Logsheets</h4>
                    <p className="leading-relaxed">We maintain a 100% transparent materials manifest log, showing real-time market steel, concrete, and finishing costs.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">24-Hour Feedback Window</h4>
                    <p className="leading-relaxed">Once submitted, our estimating coordinators will review layout options and connect with you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
