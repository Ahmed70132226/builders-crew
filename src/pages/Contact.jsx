import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Construction Inquiry',
    message: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        message: 'Your inquiry was delivered successfully! We will connect within 24 hours.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Construction Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        message: 'Failed to send message. Please try calling directly or emailing us.'
      });
    }
  };

  return (
    <div className="bg-black text-white pt-24 min-height-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-black to-[#111111] border-b border-[#C89B3C]/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">// Connect With Us</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Initiate Your Development
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Contact our CEO Asif Shahzad and our project management team to establish construction milestones.
          </p>
        </div>
      </section>

      {/* Grid details */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C] mb-2 block">// Headquarters</span>
              <h2 className="font-heading font-bold text-3xl text-white tracking-tight mb-4">Corporate Office</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our main consulting group is located in Bahria Town, Lahore. Visit our offices for structural material examinations and blueprints audits.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-lg text-[#C89B3C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Office Address</h4>
                  <p className="text-xs text-gray-500 mt-1">Bahria Town, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-lg text-[#C89B3C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Direct Contacts</h4>
                  <p className="text-xs text-gray-500 mt-1">0321-4858075 (Asif Shahzad)</p>
                  <p className="text-xs text-gray-500 mt-0.5">0301-6361951 (Ahmed Ijaz)</p>
                  <p className="text-xs text-gray-500 mt-0.5">0300-4232175 (Muhammad Musab)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-lg text-[#C89B3C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Corporate Email</h4>
                  <p className="text-xs text-gray-500 mt-1">shahzadaasif2023@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-lg text-[#C89B3C]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Office Hours</h4>
                  <p className="text-xs text-gray-500 mt-1">Mon - Sat: 09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 p-8 md:p-10 rounded-xl shadow-xl">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">Send An Inquiry</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-black border border-white/10 rounded p-3 text-sm text-white focus:border-[#C89B3C] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-black border border-white/10 rounded p-3 text-sm text-white focus:border-[#C89B3C] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-black border border-white/10 rounded p-3 text-sm text-white focus:border-[#C89B3C] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black border border-white/10 rounded p-3 text-sm text-white focus:border-[#C89B3C] outline-none"
                  >
                    <option value="General Construction Inquiry">General Construction Inquiry</option>
                    <option value="Residential Villa Package">Residential Villa Package</option>
                    <option value="Commercial Development Proposal">Commercial Development Proposal</option>
                    <option value="Structural Consultancy">Structural Consultancy</option>
                    <option value="Interior Styling Request">Interior Styling Request</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Detailed Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="bg-black border border-white/10 rounded p-3 text-sm text-white focus:border-[#C89B3C] outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="bg-[#C89B3C] hover:bg-[#A67D2A] text-black font-semibold text-xs uppercase tracking-widest py-3.5 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-55"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Inquiry'} <Send className="w-4 h-4" />
              </button>

              {formStatus.message && (
                <div className={`p-4 rounded text-xs text-white text-center mt-4 border ${formStatus.success ? 'bg-[#C89B3C]/10 border-[#C89B3C]' : 'bg-red-950/40 border-red-500'
                  }`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
