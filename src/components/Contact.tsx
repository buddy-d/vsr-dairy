import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Instagram, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    // Simulate API form post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto open WhatsApp with filled parameters as backup to guarantee delivery
      const text = `Hi VSR Dairy, my name is *${formData.name}* (${formData.phone}). I am interested in *${formData.product}*. Message: "${formData.message}"`;
      const encoded = encodeURIComponent(text);
      
      // Optional: Wait 2 seconds then open WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/919949207510?text=${encoded}`, '_blank');
      }, 2000);

    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: 'General Inquiry',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full inline-block border border-emerald-100 mb-4 shadow-sm">
            Connect With Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Have Questions? Let’s Talk Dairy
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            Whether you want a daily milk subscription at your house in Ieeja, require bulk curd for catering, or want pure ghee, our support is ready.
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Contact Details Column (5 cols) with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Direct Contact Information
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Our dairy dispatch operations run early morning and late evenings. Reach out via any channel and our local representative will assist you.
            </p>

            <div className="space-y-4">
              {/* Owner Card */}
              <div
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-emerald-50/70 to-teal-50/30 border border-emerald-100 rounded-[2rem] shadow-sm"
                id="contact-owner-card"
              >
                <div className="p-3 rounded-xl bg-emerald-650 text-emerald-600 bg-emerald-100">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-emerald-600 font-mono tracking-wider">Owner & Founder</span>
                  <span className="block text-base sm:text-lg font-extrabold text-slate-900 font-sans mt-0.5">
                    N. Brahmananda Reddy
                  </span>
                </div>
              </div>

              {/* Call Card */}
              <a
                href="tel:+919949207510"
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                id="contact-phone-card"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-slate-400 font-mono">Call Support Helpline</span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mt-0.5">
                    +91 99492 07510
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919949207510?text=Hi%20VSR%20Dairy%2C%20I%20would%20like%20to%20subscribe%20to%20your%20fresh%20milk."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
                id="contact-whatsapp-card"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-slate-400 font-mono">WhatsApp Fast Chat</span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mt-0.5">
                    +91 99492 07510
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:ndk8690@gmail.com"
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                id="contact-email-card"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-slate-400 font-mono">Email Inquiries</span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mt-0.5">
                    ndk8690@gmail.com
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/vsrmilkieeja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-pink-200 transition-all group"
                id="contact-instagram-card"
              >
                <div className="p-3 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-slate-400 font-mono">Instagram Connection</span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors mt-0.5 font-sans">
                    @vsrmilkieeja
                  </span>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-500 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-extrabold text-slate-400 font-mono">Physical Address</span>
                  <span className="block text-sm font-semibold text-slate-800 leading-relaxed mt-1">
                    VSR (Venkateshwara Milk Center), Near Main Bus Stand Road, Ieeja, Jogulamba Gadwal District, Telangana 509127, India.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Card Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-md border border-emerald-100/40 rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 text-left">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal mt-1.5 mb-8 text-left">
                      Complete the form below and we will automatically process your callback request and load direct WhatsApp delivery setup.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5 text-left">
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Reddy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-semibold text-slate-800 bg-white transition-all"
                        />
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                            Mobile / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 98480 22338"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-semibold text-slate-800 bg-white transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. anand@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-semibold text-slate-800 bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Product Selector */}
                      <div>
                        <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                          Interested Product
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-bold text-slate-700 bg-white transition-all"
                        >
                          <option value="General Inquiry">General Inquiry / Message</option>
                          <option value="Daily Milk Subscription">Daily Milk Doorstep Subscription</option>
                          <option value="Pure Ghee Bulk Order">Pure Ghee (Danedar) Order</option>
                          <option value="Thick Curd Catering Order">Thick Creamy Curd Order</option>
                        </select>
                      </div>

                      {/* Message body */}
                      <div>
                        <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                          Your Message / Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please let us know your location in Ieeja or any specific delivery notes..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-medium text-slate-800 bg-white transition-all resize-none"
                        />
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-sm shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 transition-all cursor-pointer"
                          id="submit-contact-form"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Processing Order...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 fill-current" />
                              Submit & Open WhatsApp
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                    id="contact-success-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-black text-2xl text-slate-900">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Your inquiry for <strong className="text-slate-800">{formData.product}</strong> has been processed successfully. We are now redirecting you to WhatsApp to connect directly with the VSR Center desk.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 max-w-sm mx-auto text-xs text-slate-500 leading-normal flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 animate-pulse" />
                      Our delivery manager will verify your Ieeja address and setup timing.
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-display font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
