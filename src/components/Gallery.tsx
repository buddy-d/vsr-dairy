import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Image, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'farm' | 'products' | 'hygiene'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Holstein Cows Grazing',
      category: 'farm',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
      description: 'Lush pastures in Ieeja region where cows enjoy organic feeding in the open morning air.',
    },
    {
      id: 'gal-2',
      title: 'Pristine Milk Chilling',
      category: 'hygiene',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80',
      description: 'Our automated, stainless steel cold cooling tanks keeping temperature under 4°C.',
    },
    {
      id: 'gal-3',
      title: 'Creamy Yogurt Curd',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
      description: 'Rich, thick curd packed naturally in food-grade cups with traditional active cultures.',
    },
    {
      id: 'gal-4',
      title: 'Golden Cow Ghee',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
      description: 'Aromatic, hand-simmered, danedar Ghee poured into glass jars.',
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrevPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      selectedPhotoIndex === 0 ? filteredItems.length - 1 : selectedPhotoIndex - 1
    );
  };

  const handleNextPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      selectedPhotoIndex === filteredItems.length - 1 ? 0 : selectedPhotoIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full inline-block border border-emerald-100 mb-4 shadow-sm">
            Visual Gallery
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Our Farm & Product Gallery
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            Take a visual tour of our lush partner grasslands, pristine laboratory chilling facilities, and delicious fresh dairy offerings.
          </p>
        </motion.div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'farm', 'products', 'hygiene'] as const).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedPhotoIndex(null);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200/50 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600 shadow-sm'
              }`}
              id={`gal-filter-${filter}`}
            >
              {filter === 'all' ? 'Show All' : filter}
            </motion.button>
          ))}
        </div>

        {/* Grid Container with Staggered animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative rounded-[2rem] overflow-hidden shadow-sm border border-emerald-100/40 bg-white aspect-[4/3] cursor-pointer"
                id={`gal-item-${item.id}`}
              >
                {/* Media Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Glassmorphic Overlay caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-[9px] font-black text-white uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-display font-extrabold text-lg text-white mt-2 flex items-center justify-between">
                      {item.title}
                      <Eye className="w-5 h-5 text-emerald-300 bg-white/10 p-1 rounded-full border border-white/20" />
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action zoom icon overlay in center */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-emerald-600 shadow-sm opacity-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200">
                  <Image className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Lightbox Overlay Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark opaque backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute inset-0 bg-slate-950"
            />

            {/* Immersive Photo Card with Slide Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col justify-between z-10 p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
              id="lightbox-container"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Slider Image Viewer */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[65vh] w-full overflow-hidden rounded-xl bg-slate-900/50 flex items-center justify-center">
                <img
                  src={filteredItems[selectedPhotoIndex].image}
                  alt={filteredItems[selectedPhotoIndex].title}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left arrow trigger */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right arrow trigger */}
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Meta details */}
              <div className="p-6 text-white bg-slate-900/80 rounded-b-xl border-t border-white/10 text-left">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500 text-[10px] font-black uppercase tracking-wider">
                    {filteredItems[selectedPhotoIndex].category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Photo {selectedPhotoIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mt-2">
                  {filteredItems[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal">
                  {filteredItems[selectedPhotoIndex].description}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
