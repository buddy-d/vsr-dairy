import { motion } from 'motion/react';
import { Heart, ShieldCheck, Clock, Award, Leaf } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 animate-pulse" />,
      title: 'Purity Uncompromised',
      description: 'We run multi-level tests to guarantee zero preservatives, no synthetic thickeners, and absolutely 100% pure organic milk from grass-fed cattle.',
      bgColor: 'bg-emerald-50/60',
      borderColor: 'border-emerald-100/50',
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'Freshness within Hours',
      description: 'Sourced during early morning milking and rapidly chilled below 4°C, reaching households in Ieeja within mere hours of production.',
      bgColor: 'bg-sky-50/60',
      borderColor: 'border-sky-100/50',
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: 'Hygienic Processing',
      description: 'Strict hands-free container processes, stainless steel tanks, and high-standard sterilization protocols ensure pristine sanitization.',
      bgColor: 'bg-rose-50/60',
      borderColor: 'border-rose-100/50',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: 'Deep Local Trust',
      description: 'More than a milk center, we are a household pillar in the Jogulamba Gadwal region, powering healthy growth for children and families.',
      bgColor: 'bg-amber-50/60',
      borderColor: 'border-amber-100/50',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative shapes with soft blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-12 w-80 h-80 rounded-full bg-amber-50/50 blur-3xl pointer-events-none" />

      {/* Floating Leaves */}
      <div className="absolute top-1/3 right-10 opacity-20 pointer-events-none">
        <Leaf className="w-12 h-12 text-emerald-400 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full inline-block border border-emerald-100/50 mb-4 shadow-sm">
            Our Legacy of Purity
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            The Story of VSR <br className="sm:hidden" />
            <span className="text-emerald-600 relative inline-block">
              Venkateshwara Milk Center
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400/60 rounded-full" />
            </span>
          </h2>
          <p className="text-base text-slate-600 mt-6 leading-relaxed">
            Nestled in the historical hub of Ieeja, Telangana, VSR Dairy was founded on a simple, powerful promise: to provide our local community with genuine, pure, and wholesome dairy nourishment directly from the fields.
          </p>
        </motion.div>

        {/* Story Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Narrative description (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-left"
          >
            <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-snug">
              Nourishing Families with Honest, Freshly Sourced Dairy
            </h3>
            <p className="leading-relaxed">
              For years, commercialization has diluted the true quality of milk. At VSR Venkateshwara Milk Center, we actively preserve traditional values. We partner directly with organic local farmers in the Jogulamba Gadwal district who feed their cows nutrient-rich green grass, pure grain, and clean water.
            </p>
            <p className="leading-relaxed">
              Every drop of milk collected goes through a rigorous testing sequence at our collection center to measure density, fat composition, and solid-not-fat (SNF) metrics. By employing rapid cooling systems, we arrest bacterial activity naturally without adding harmful chemical agents, ensuring the dairy you drink is as fresh as drinking it straight from the farm.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/50 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <span className="text-3xl font-display font-black text-emerald-600">100%</span>
                <span className="text-xs text-slate-600 font-semibold leading-snug">Natural Feed & Free-Range Cattle</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100/50 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <span className="text-3xl font-display font-black text-amber-500">Zero</span>
                <span className="text-xs text-slate-600 font-semibold leading-snug">Adulteration or Added Water</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase (5 columns) with hover scaling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80"
                alt="Happy dairy cow grazing on green grass pasture in India"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-md border border-slate-100">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Our Location</p>
                <h4 className="font-display font-bold text-base text-slate-900">Ieeja, Telangana</h4>
                <p className="text-xs text-slate-500 leading-normal mt-0.5">Serving Jogulamba Gadwal families fresh daily milk</p>
                <div className="mt-2.5 pt-2 border-t border-slate-100 text-left">
                  <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider">Owner & Founder</span>
                  <span className="block text-xs font-bold text-slate-800 font-sans">N. Brahmananda Reddy</span>
                </div>
              </div>
            </div>
            {/* Playful background blobs */}
            <div className="absolute -bottom-6 -left-6 -z-10 w-24 h-24 rounded-full bg-amber-400/20 blur-sm animate-[bounce_5s_infinite]" />
            <div className="absolute -top-6 -right-6 -z-10 w-32 h-32 rounded-full bg-emerald-400/20 blur-sm animate-[bounce_7s_infinite]" />
          </motion.div>

        </div>

        {/* 4 Pillars Highlight Grid with Staggered Entrance */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-[2rem] border backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:shadow-emerald-100/20 hover:-translate-y-1.5 ${pillar.bgColor} ${pillar.borderColor} flex flex-col text-left`}
            >
              <div className="p-3 rounded-2xl bg-white w-fit shadow-sm mb-4">
                {pillar.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
