import { Phone, Mail, MapPin, Heart, ChevronRight, Instagram } from 'lucide-react';
import VSRLogo from './VSRLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#about' },
    { label: 'Products Catalog', href: '#products' },
    { label: 'Why VSR Dairy', href: '#why-choose-us' },
    { label: 'Quality Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location Hub', href: '#location' },
  ];

  const categories = [
    { label: 'Pure Farm Milk', href: '#products' },
    { label: 'Thick Creamy Curd', href: '#products' },
    { label: 'Granulated Ghee', href: '#products' },
    { label: 'Daily Doorstep Subscription', href: '#products' },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-10 border-t border-emerald-900/40">
      {/* Subtle glowing graphics */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-900 text-left">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2.5 cursor-pointer w-fit group"
              id="footer-logo"
            >
              <VSRLogo size="sm" withText={true} className="text-white" />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              VSR (Venkateshwara Milk Center) is committed to restoring absolute purity and hygiene in daily dairy nutrition. Sourced from native organic farms around Ieeja, Telangana, we deliver freshness you can taste.
            </p>

            {/* Helpline details */}
            <div className="space-y-3">
              <a href="tel:+919949207510" className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 text-sm font-semibold transition-colors">
                <Phone className="w-4 h-4 text-emerald-500" />
                +91 99492 07510
              </a>
              <a href="mailto:ndk8690@gmail.com" className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 text-sm font-semibold transition-colors">
                <Mail className="w-4 h-4 text-emerald-500" />
                ndk8690@gmail.com
              </a>
              <a href="https://instagram.com/vsrmilkieeja" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 text-sm font-semibold transition-colors">
                <Instagram className="w-4 h-4 text-pink-500" />
                @vsrmilkieeja
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200 border-l-2 border-emerald-500 pl-3">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-left">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 py-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500/80" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200 border-l-2 border-emerald-500 pl-3">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm text-left">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <a
                    href={cat.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(cat.href);
                    }}
                    className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 block py-0.5"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location details (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200 border-l-2 border-emerald-500 pl-3">
              Our Center Location
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400 text-left">
              <div className="flex gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <p className="leading-relaxed text-xs">
                  Near Main Bus Stand Road, Ieeja, Jogulamba Gadwal District, Telangana 509127, India.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] leading-relaxed">
                <strong className="text-white block mb-1">Morning Dispatch Hours:</strong>
                Fresh distribution begins from <span className="text-amber-400 font-bold">4:30 AM</span> onwards every day.
              </div>
            </div>
          </div>

        </div>

        {/* Copyright and Trademark bottom bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-start">
            <span>&copy; {currentYear} VSR Dairy. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>Venkateshwara Milk Center, Ieeja.</span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="text-slate-400 font-medium">Owner: N. Brahmananda Reddy</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for healthy Indian families in Telangana.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
