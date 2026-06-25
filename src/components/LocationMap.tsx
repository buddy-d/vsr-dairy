import { motion } from 'motion/react';
import { MapPin, Clock, Truck, ShieldAlert, Navigation } from 'lucide-react';

export default function LocationMap() {
  const landmarks = [
    { name: 'Ieeja Bus Stand', distance: '2 Mins Walk' },
    { name: 'Jogulamba Gadwal Town', distance: '32 km' },
    { name: 'Kurnool Road Hub', distance: '20 km' },
  ];

  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
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
            Our Hub Coordinates
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Our Center in Ieeja, Telangana
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            We are centrally located in Ieeja, enabling ultra-fast distribution of farm-fresh milk throughout the Jogulamba Gadwal district.
          </p>
        </motion.div>

        {/* Location Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Location details card column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[4rem] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Venkateshwara Milk Center
              </h3>
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider font-mono mt-1">
                Regional Hub • VSR Dairy
              </p>

              {/* Specific Address list */}
              <div className="space-y-5 mt-8">
                {/* Address block */}
                <div className="flex gap-4">
                  <div className="p-2 w-fit h-fit rounded-xl bg-white border border-emerald-100/50 shadow-sm text-emerald-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Main Office & Dispatch</h4>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed mt-1">
                      VSR (Venkateshwara Milk Center), Near Main Bus Stand Road, Ieeja, Jogulamba Gadwal District, Telangana 509127, India.
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex gap-4">
                  <div className="p-2 w-fit h-fit rounded-xl bg-white border border-amber-100/50 shadow-sm text-amber-500 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Working Hours</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-1">
                      Morning Collection: <span className="text-emerald-600">4:30 AM – 1:00 PM</span>
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      Evening Dispatch: <span className="text-emerald-600">4:00 PM – 8:30 PM</span>
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-2 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Open 7 Days a Week
                    </span>
                  </div>
                </div>

                {/* Logistics Delivery Radius */}
                <div className="flex gap-4">
                  <div className="p-2 w-fit h-fit rounded-xl bg-white border border-emerald-100/50 shadow-sm text-emerald-500 flex-shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Delivery Radius</h4>
                    <p className="text-sm font-semibold text-slate-800 leading-normal mt-1">
                      Early morning household subscriptions & bulk wholesale dispatch inside 15+ km radius.
                    </p>
                  </div>
                </div>
              </div>

              {/* Local Landmarks links inside the card */}
              <div className="mt-8 pt-6 border-t border-slate-150">
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3">Nearby Landmark Proximities</h4>
                <div className="flex flex-wrap gap-2">
                  {landmarks.map((mark, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-100 shadow-sm text-xs text-slate-600 font-medium">
                      {mark.name} • <span className="text-emerald-600 font-bold">{mark.distance}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Google Map Mock panel (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-100 aspect-video lg:aspect-square lg:max-h-[500px] bg-slate-100 group">
              {/* Mock premium vector roadmap style backdrop */}
              <div className="absolute inset-0 bg-emerald-50/40 flex items-center justify-center p-12 overflow-hidden">
                {/* SVG vector road networks representing Ieeja district grids */}
                <svg className="absolute inset-0 w-full h-full text-emerald-100/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                  <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="6" />
                  <line x1="120" y1="0" x2="120" y2="400" stroke="currentColor" strokeWidth="6" />
                  <line x1="0" y1="280" x2="400" y2="280" stroke="currentColor" strokeWidth="4" />
                  <line x1="280" y1="0" x2="280" y2="400" stroke="currentColor" strokeWidth="4" />
                  <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="120" cy="120" r="12" fill="#a7f3d0" stroke="#059669" strokeWidth="3" />
                </svg>
                
                {/* Absolute center marker pins with high glowing effects */}
                <div className="absolute top-[30%] left-[30%] z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 bg-emerald-500/20 rounded-full animate-ping" />
                    <span className="absolute w-6 h-6 bg-emerald-500/40 rounded-full animate-pulse" />
                    <div className="relative w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <span className="mt-1 px-2.5 py-1 rounded-lg bg-emerald-900 text-white text-[9px] font-extrabold uppercase shadow-md leading-none">
                    VSR Center
                  </span>
                </div>

                {/* Sub regional villages markers */}
                <div className="absolute top-[65%] left-[20%] text-slate-400 font-display font-bold text-xs">Gattu</div>
                <div className="absolute top-[20%] left-[70%] text-slate-400 font-display font-bold text-xs">Uppal</div>
                <div className="absolute top-[75%] left-[65%] text-slate-400 font-display font-bold text-xs">Gadwal Town</div>

                {/* Glassmorphic card overview on map */}
                <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/55 shadow-md flex items-center justify-between text-left">
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-slate-900">VSR Venkateshwara Milk</h4>
                    <p className="text-[11px] text-slate-500 leading-none mt-1">Ieeja, Jogulamba Gadwal, Telangana</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-100 py-1.5 px-3 rounded-xl border border-emerald-250">
                    Map Hub
                  </span>
                </div>

                {/* Bottom directions CTA trigger */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <motion.a
                    href="https://maps.google.com/?q=Ieeja+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-black text-sm shadow-lg shadow-emerald-100 transition-all cursor-pointer"
                    id="open-maps-btn"
                  >
                    <Navigation className="w-4 h-4 fill-current" />
                    Open in Google Maps
                  </motion.a>
                </div>
              </div>

              {/* Overlay warning on map */}
              <div className="absolute top-4 right-4 bg-slate-900/60 text-white text-[9px] font-bold px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
                <ShieldAlert className="w-3 h-3 text-amber-300 animate-pulse" />
                Live Map Enabled
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
