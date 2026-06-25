import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VSRLogo from './components/VSRLogo';
import { Sparkles, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically set premium SVG Favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'shortcut icon';
    link.href = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%2322c55e"/><text x="50" y="58" fill="white" font-size="22" font-weight="900" font-family="sans-serif" text-anchor="middle">VSR</text></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Document title upgrade
    document.title = 'VSR Venkateshwara Milk Center | Premium Dairy Purity';

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Smooth initial loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 antialiased font-sans flex flex-col selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      {/* 0. Premium Initial Loader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="vsr-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center p-6 text-center"
            id="premium-loader-screen"
          >
            <div className="relative flex flex-col items-center gap-6 max-w-sm">
              {/* Spinning / Glowing Outer Aura */}
              <div className="absolute -inset-10 bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />
              
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, type: 'spring' } }}
                className="relative"
              >
                <VSRLogo size="xl" />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
                className="space-y-2 z-10"
              >
                <h1 className="font-display font-black text-2xl tracking-tight text-white">
                  VSR <span className="text-emerald-400">DAIRY</span>
                </h1>
                <p className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest">
                  Venkateshwara Milk Center
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  Delivering 100% Pure Dairy Goodness...
                </p>
              </motion.div>

              {/* Progress Bar Indicator */}
              <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%', transition: { duration: 1.2, ease: 'easeIn' } }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-sky-400"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Single Page Web App sections */}
      <main className="flex-grow">
        
        {/* 1. Hero banner */}
        <Hero />

        {/* 2. About Us story */}
        <AboutUs />

        {/* 3. Products Catalog */}
        <Products />

        {/* 4. Why Choose Us pillars */}
        <WhyChooseUs />

        {/* 5. Process flowchart */}
        <Process />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Gallery Grid */}
        <Gallery />

        {/* 8. Regional Location Map Coordinates */}
        <LocationMap />

        {/* 9. Contact Desk form */}
        <Contact />

      </main>

      {/* 10. Footnote layout */}
      <Footer />

      {/* Persistent floating action widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Floating WhatsApp Quick-Chat trigger */}
        <a
          href="https://wa.me/919949207510?text=Hi%20VSR%20Dairy%2C%20I%20visited%20your%20website%20and%20want%20to%20subscribe%20to%20fresh%20milk%20delivery."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-emerald-200 transition-all hover:-translate-y-1 relative"
          title="Chat with us on WhatsApp"
          id="floating-whatsapp-widget"
        >
          {/* Pulsating glow circle */}
          <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30 group-hover:hidden" />
          
          <MessageCircle className="w-6 h-6 fill-current" />
          
          {/* Hover tool tip reveal */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold font-display pr-1">
            Chat with VSR Dairy
          </span>
        </a>

        {/* Back to top scroll button */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="p-3 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 rounded-full shadow-lg hover:shadow-sky-100 transition-all duration-300 cursor-pointer flex items-center justify-center hover:-translate-y-0.5"
            title="Scroll back to top"
            id="back-to-top-trigger"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>

    </div>
  );
}
