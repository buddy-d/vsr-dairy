import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import VSRLogo from './VSRLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'products', 'why-choose-us', 'process', 'testimonials', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#about', id: 'about' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Why VSR', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'Our Process', href: '#process', id: 'process' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-emerald-100/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 group cursor-pointer"
            id="brand-logo"
          >
            <VSRLogo size="sm" withText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 rounded-full font-display text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-emerald-700 bg-emerald-50 border border-emerald-100/50 shadow-sm font-bold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                    : 'text-slate-850 hover:text-emerald-650 hover:bg-white/20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919949207510"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-white/50 text-emerald-600 font-semibold text-sm hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300"
              id="call-us-nav"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">+91 99492 07510</span>
              <span className="md:hidden">Call Now</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-600 text-white font-display font-bold text-sm shadow-md shadow-emerald-200/50 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-0.5 transition-all duration-200"
              id="order-now-nav"
            >
              Order Online
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Side Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 z-50 w-4/5 max-w-sm bg-white shadow-2xl p-6 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <VSRLogo size="sm" withText={true} />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            id="close-mobile-drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1.5 py-6 text-left">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`px-4 py-3 rounded-xl font-display text-base font-semibold transition-all ${
                activeSection === link.id
                  ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-500'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="absolute bottom-6 left-6 right-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
          <a
            href="tel:+919949207510"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 font-bold text-sm shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Call: +91 99492 07510
          </a>
          <a
            href="https://wa.me/919949207510?text=Hi%20VSR%20Dairy%2C%20I%20would%20like%20to%20inquire%20about%20your%20dairy%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3.15 5.419.156 5.489 0 9.954-4.43 9.958-9.875.002-2.639-1.018-5.12-2.87-6.977C17.29 2.15 14.814 1.13 12.186 1.13c-5.498 0-9.967 4.43-9.971 9.874-.002 2.029.531 4.01 1.545 5.768L2.73 21.284l4.636-1.21c1.23.67 2.112.93 3.281.93z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
