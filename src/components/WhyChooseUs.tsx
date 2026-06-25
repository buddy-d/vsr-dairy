import { motion } from 'motion/react';
import { ShieldCheck, Award, TrendingUp, Users, Heart, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '100% Pure Dairy Products',
      subtitle: 'Zero dilution, zero synthetics.',
      description: 'We strictly prohibit water adulteration, synthetic milk powders, starch thickeners, and antibiotic additives. What you receive is pure, wholesome dairy exactly as nature designed it.',
      badge: 'Zero Adulteration',
      colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: 'Fresh Daily Supply',
      subtitle: 'Direct from farm within hours.',
      description: 'Milked at 4:30 AM early morning, instantly pasteurized and chilled, arriving at local stores and subscriber doorsteps by 7:00 AM. Unmatched freshness.',
      badge: '4-Hour Delivery Chain',
      colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      title: 'Hygienic Processing',
      description: 'Maintained entirely hands-free. We use sterile stainless-steel containers, clean pipelines, and automatic filling equipment to keep harmful external microbes at zero.',
      badge: 'Hands-Free Sanitized',
      colorClass: 'bg-rose-50 border-rose-100 text-rose-700',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: 'Trusted Local Business',
      description: 'Deeply embedded in the heart of Ieeja, Telangana. We support native cowherds with fair wages and are proud to nourish thousands of local homes daily with honest nutrition.',
      badge: 'Ieeja Community Pillar',
      colorClass: 'bg-amber-50 border-amber-100 text-amber-700',
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: 'Quality Guaranteed',
      description: 'Every collection batch is tested for standard density, fat content, solid-not-fat parameters, and temperature controls before packing.',
      badge: 'Scientifically Tested',
      colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-emerald-50/40 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-amber-50/30 blur-3xl pointer-events-none" />

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
            The VSR Promise
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Why Discerning Families <br className="sm:inline" />
            Choose VSR Venkateshwara
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            We operate at a national dairy standard to protect the flavor and safety of your milk. Compare our quality pillars and see the difference.
          </p>
        </motion.div>

        {/* Bento Grid Styling with Scroll Reveals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Main Large Callout (Bento Hero) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[350px] text-left"
          >
            {/* Visual sparkle */}
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

            <div>
              <div className="p-3.5 rounded-2xl bg-white/10 w-fit mb-6 border border-white/20">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="font-display font-extrabold text-3xl leading-snug">
                Purity Checked on 25+ Parameters
              </h3>
              <p className="text-emerald-100 text-sm mt-4 leading-relaxed">
                We believe in complete transparency. Every batch from VSR (Venkateshwara Milk Center) goes through rigorous checks to measure lactose consistency, solid ratios, natural minerals, and sanitization benchmarks. 
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">ISO Standards Applied</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white text-emerald-700 text-xs font-black shadow-sm uppercase tracking-wide">
                Premium Grade
              </span>
            </div>
          </motion.div>

          {/* Dynamic Grid Points with Staggered Entrance */}
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md border border-emerald-100/30 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between text-left"
              id={`why-card-${index}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
                    {point.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${point.colorClass}`}>
                    {point.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 leading-tight">
                  {point.title}
                </h3>
                {point.subtitle && (
                  <p className="text-xs font-semibold text-emerald-600 mt-1">{point.subtitle}</p>
                )}
                <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                <span>VSR Venkateshwara</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                <span>Ieeja</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
