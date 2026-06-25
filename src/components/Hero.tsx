import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Milk, ArrowRight, ShieldCheck, Sparkles, Award, Star, Leaf } from 'lucide-react';

// Premium Animated Counter Component
function AnimatedCounter({ value, label, suffix = '', delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / (value / 20)), 20);
    
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += Math.ceil(value / 35);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + delay }}
      className="flex flex-col items-center p-4 sm:p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg hover:border-emerald-200/80 transition-all duration-300 group"
    >
      <div className="flex items-baseline text-emerald-600 font-display font-black text-3xl sm:text-4xl tracking-tight group-hover:scale-105 transition-transform duration-300">
        <span>{count.toLocaleString()}</span>
        <span className="text-amber-500 ml-0.5">{suffix}</span>
      </div>
      <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1.5 text-center leading-normal">
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-sky-50/20 to-white"
    >
      {/* Background Graphic & Real Sunrise Indian Farm Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500595046783-cd2118934852?auto=format&fit=crop&w=1920&q=85"
          alt="Lush green dairy farm at sunrise"
          className="w-full h-full object-cover opacity-20 scale-105 motion-safe:animate-[pulse_12s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Colorful Gradients Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-sky-500/5 to-white/95 mix-blend-multiply" />
        
        {/* Elegant layered milk waves at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg
            className="relative block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            {/* Wave 1 (Soft Emerald tinted splash) */}
            <path
              d="M0,0 C150,90 350,10 500,60 C650,110 850,10 1000,70 C1150,130 1200,30 1200,30 L1200,120 L0,120 Z"
              className="fill-emerald-50/30"
            />
            {/* Wave 2 (Pure White front wave) */}
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,16.63,78.71,23.44,149.33,42.15,225.59,65.34,321.39,56.44Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>

      {/* Floating Interactive 3D Milk Drops, Leaves and Sparkles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Pulsating green leaves */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[8%] text-emerald-400 opacity-60"
        >
          <Leaf className="w-6 h-6 fill-current" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[60%] right-[8%] text-emerald-500 opacity-40"
        >
          <Leaf className="w-8 h-8 fill-current" />
        </motion.div>

        {/* Top-left milk drop */}
        <div className="absolute top-1/3 left-[14%] w-6 h-8 bg-white rounded-full opacity-65 filter blur-[0.5px] border-b-2 border-r-2 border-emerald-100 rounded-tr-[50%] rounded-tl-[50%] rounded-bl-[50%] rounded-br-[100%] rotate-45 animate-[bounce_4s_ease-in-out_infinite]" />
        
        {/* Mid-right milk drop */}
        <div className="absolute top-[45%] right-[15%] w-8 h-11 bg-white rounded-full opacity-55 filter blur-[1px] border-b-2 border-r-2 border-sky-100 rounded-tr-[50%] rounded-tl-[50%] rounded-bl-[50%] rounded-br-[100%] rotate-45 animate-[bounce_6s_ease-in-out_infinite]" />
        
        {/* Floating Golden sparkle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] right-[22%] text-amber-400"
        >
          <Sparkles className="w-7 h-7" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[25%] left-[20%] text-amber-400"
        >
          <Star className="w-5 h-5 fill-current" />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
          
          {/* Text content (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-6">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/80 shadow-sm"
              id="hero-badge"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span className="font-display font-bold text-xs uppercase tracking-wider text-emerald-700">
                100% Pure & Hygienic Dairy Heritage
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight"
              id="hero-title"
            >
              Freshness in{' '}
              <span className="text-emerald-600 relative inline-block">
                Every Drop
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400/80 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,7 C30,2 70,2 100,7 L100,10 L0,10 Z" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl lg:max-w-none font-normal leading-relaxed"
              id="hero-desc"
            >
              <strong className="text-emerald-700">VSR (Venkateshwara Milk Center)</strong> delivers rich, premium, farm-fresh dairy products straight from nutritious local fields of Ieeja to your family’s breakfast table. Nourishing lives with pure goodness since day one.
            </motion.p>

            {/* Call To Action Buttons with Custom Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
              id="hero-ctas"
            >
              <motion.button
                onClick={() => handleScrollTo('products')}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px -5px rgba(16,185,129,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-display font-extrabold text-base shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 transition-all duration-300 cursor-pointer"
                id="hero-explore-btn"
              >
                <Milk className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                Explore Products
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>
              
              <motion.button
                onClick={() => handleScrollTo('contact')}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px rgba(14,165,233,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-emerald-100 text-slate-800 font-display font-bold text-base hover:bg-emerald-50/50 hover:border-emerald-200 shadow-sm transition-all duration-300 cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Simple Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-100/60 w-full mt-4"
              id="hero-trust-badges"
            >
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-900 font-display font-extrabold text-sm sm:text-base">100% Pure</span>
                </div>
                <span className="text-xs text-slate-500">Zero Preservatives</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-900 font-display font-extrabold text-sm sm:text-base">Fresh Daily</span>
                </div>
                <span className="text-xs text-slate-500">Ieeja Local Supply</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-900 font-display font-extrabold text-sm sm:text-base">Tested Cold</span>
                </div>
                <span className="text-xs text-slate-500">Strict Quality Checks</span>
              </div>
            </motion.div>

          </div>

          {/* Graphical Premium Splash Card with Glassmorphism touches */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square rounded-[2rem] bg-gradient-to-tr from-emerald-500 to-emerald-400 p-1 shadow-2xl shadow-emerald-200/50 overflow-hidden group"
              id="hero-creative-image"
            >
              {/* Product background glow */}
              <div className="absolute inset-0 bg-radial-gradient from-white/30 to-transparent pointer-events-none" />

              {/* White Milk splash element image container */}
              <div className="absolute inset-0.5 rounded-[1.9rem] bg-emerald-900/10 overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
                  alt="Premium fresh milk splash"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating glassmorphic overlay inside card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow">
                      <Milk className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                        Fresh Milk Daily
                      </h4>
                      <p className="text-xs text-slate-600 leading-none mt-1">
                        Sourced & delivered in 4 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sparkling vector tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-slate-900 animate-spin" style={{ animationDuration: '4s' }} />
                  Premium Class
                </div>
              </div>
            </motion.div>

            {/* Background glowing rings */}
            <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 rounded-full bg-emerald-300/15 blur-2xl pointer-events-none" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 rounded-full bg-amber-200/10 blur-2xl pointer-events-none" />
          </div>

        </div>

        {/* Counter Section Below */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto" id="animated-counters-grid">
          <AnimatedCounter value={1200} label="Happy Families Subscribed" suffix="+" delay={0.1} />
          <AnimatedCounter value={3500} label="Liters Freshly Supplied Daily" suffix="+" delay={0.25} />
          <AnimatedCounter value={100} label="Tested Pure & Organic Guarantee" suffix="%" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
