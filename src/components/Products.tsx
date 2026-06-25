import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Milk, Sparkles, CheckCircle2, ChevronRight, X, Phone, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryQty, setInquiryQty] = useState('1');

  const products: Product[] = [
    {
      id: 'vsr-buffalo-milk',
      name: 'Direct Pure Buffalo Milk',
      category: 'milk',
      description: 'Thick, rich, and naturally high-fat buffalo milk sourced directly from healthy local buffaloes. Perfect for traditional tea, rich curd, and home-churned butter.',
      highlight: 'Sourced daily & direct, full cream with 6.5% - 7.5% natural fat.',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
      benefits: ['High fat & solid-not-fat (SNF)', 'No chemical preservatives added', 'Thick and satisfying texture', 'Ideal for home-style curd & desserts'],
      nutrients: {
        fat: '6.5g - 7.5g',
        protein: '3.6g',
        calcium: '150mg',
        energy: '95 kcal',
      },
      packaging: ['500ml Pouch', '1 Liter Bottle', 'Bulk Can delivery'],
    },
    {
      id: 'vsr-cow-milk',
      name: 'Direct Fresh Cow Milk',
      category: 'milk',
      description: 'Direct, fresh, and sweet cow milk collected from grass-fed cows. Light, highly digestible, and rich in natural nutrients—the absolute best daily fuel for kids.',
      highlight: '100% natural, high in calcium & native A2-beta-casein proteins.',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80',
      benefits: ['Rich in A2-beta-casein proteins', 'Easily digestible for children', 'Naturally sweet farm taste', 'Strengthens bones and muscle immunity'],
      nutrients: {
        fat: '3.5g - 4.5g',
        protein: '3.2g',
        calcium: '120mg',
        energy: '65 kcal',
      },
      packaging: ['500ml Pouch', '1 Liter Bottle', 'Bulk Can delivery'],
    },
    {
      id: 'vsr-fresh-curd',
      name: 'Thick Creamy Curd',
      category: 'curd',
      description: 'Set naturally using our traditional starter culture, giving it an authentic home-style sourness and ultra-thick velvety structure.',
      highlight: 'Rich in active probiotics for optimal gut digestion.',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
      benefits: ['Thick, rich set structure', 'No gelatin or starch thickener', 'Natural probiotics count', 'Soothing for hot Telangana summers'],
      nutrients: {
        fat: '4.0g',
        protein: '3.5g',
        calcium: '150mg',
        energy: '70 kcal',
      },
      packaging: ['250g Cup', '500g Cup', '1kg Bucket'],
    },
    {
      id: 'vsr-buffalo-ghee',
      name: 'Pure Buffalo Ghee',
      category: 'ghee',
      description: 'Slow-simmered, aromatic white Buffalo Ghee hand-churned from pure country buffalo butter. Brings unmatched flavor, richness, and energy to daily dishes.',
      highlight: 'Hand-churned using classic processes, perfect rich white texture.',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
      benefits: ['Prepared from country buffalo butter', 'Rich, smooth texture & pleasant aroma', 'Improves digestion & physical stamina', 'High smoke point for cooking & deep frying'],
      nutrients: {
        fat: '99.8g',
        protein: '0.1g',
        calcium: '5mg',
        energy: '897 kcal',
      },
      packaging: ['250ml Jar', '500ml Glass Jar', '1 Liter Tin', '5 Liter Tin'],
    },
    {
      id: 'vsr-cow-ghee',
      name: 'Pure Cow Ghee',
      category: 'ghee',
      description: 'Aromatic, golden granulated (danedar) Cow Ghee prepared from grass-fed cow butter. A superfood that enhances brain power, immunity, and meal tastes.',
      highlight: 'Ancient hand-churned Vedic practice, loaded with healthy fatty acids.',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
      benefits: ['Vedic hand-churned (Bilona method)', 'Granulated (Danedar) rich golden color', 'Boosts memory, immunity & joint health', 'Packed with healthy fat-soluble vitamins'],
      nutrients: {
        fat: '99.7g',
        protein: '0.1g',
        calcium: '10mg',
        energy: '897 kcal',
      },
      packaging: ['250ml Jar', '500ml Glass Jar', '1 Liter Tin', '5 Liter Tin'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'milk', label: 'Pure Milk' },
    { id: 'curd', label: 'Fresh Curd' },
    { id: 'ghee', label: 'Pure Ghee' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    
    // Simulate inquiry submission
    setInquirySubmitted(true);
    setTimeout(() => {
      // Create WhatsApp message string
      const message = `Hi VSR Dairy, I am *${inquiryName}* (${inquiryPhone}). I want to order *${selectedProduct?.name}* (Quantity: ${inquiryQty}). Please confirm.`;
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/919949207510?text=${encodedMsg}`, '_blank');
      
      // Reset state
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setSelectedProduct(null);
    }, 1200);
  };

  return (
    <section id="products" className="py-24 bg-slate-50 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-100/80 px-4 py-1.5 rounded-full inline-block border border-emerald-100/50 mb-4">
            Freshness Catalog
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Our Premium Dairy Selection
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            Explore pure, hygienic, and locally processed milk products from VSR Venkateshwara Milk Center. Zero preservatives, authentic taste, delivered fresh.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-display font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200/50 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600'
              }`}
              id={`cat-filter-${cat.id}`}
            >
              {cat.id === 'milk' && <Milk className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />}
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-white/80 backdrop-blur-md rounded-[2rem] overflow-hidden border border-emerald-100/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 hover:border-emerald-200/80 transition-all duration-500 group flex flex-col h-full"
                id={`product-card-${product.id}`}
              >
                {/* Product Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-emerald-600 shadow-sm uppercase tracking-wider">
                    {product.category}
                  </span>

                  {/* Highlights Banner overlay at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white bg-slate-900/40 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 animate-pulse" />
                    <span className="text-[11px] font-medium tracking-wide truncate">{product.highlight}</span>
                  </div>
                </div>

                {/* Card details body */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Quick Benefits list */}
                  <div className="mt-5 space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Nutrient table - premium Amul look */}
                  <div className="mt-6 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/30">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 mb-2.5">
                      Approx. Nutritional Value (per 100g)
                    </p>
                    <div className="grid grid-cols-4 gap-2 text-center text-slate-800">
                      <div className="border-r border-emerald-100/30 pr-1">
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Fat</span>
                        <span className="block text-xs font-black font-mono text-slate-800 mt-0.5">{product.nutrients.fat}</span>
                      </div>
                      <div className="border-r border-emerald-100/30 px-1">
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Protein</span>
                        <span className="block text-xs font-black font-mono text-slate-800 mt-0.5">{product.nutrients.protein}</span>
                      </div>
                      <div className="border-r border-emerald-100/30 px-1">
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Calcium</span>
                        <span className="block text-xs font-black font-mono text-slate-800 mt-0.5">{product.nutrients.calcium}</span>
                      </div>
                      <div className="pl-1">
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Energy</span>
                        <span className="block text-xs font-black font-mono text-slate-800 mt-0.5">{product.nutrients.energy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card bottom buttons */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 font-mono">Available Packagings</span>
                      <span className="block text-xs font-extrabold text-slate-700 truncate mt-0.5">
                        {product.packaging.join(' / ')}
                      </span>
                    </div>

                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-emerald-600 text-white font-display font-extrabold text-xs shadow-md shadow-emerald-100 hover:bg-emerald-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      Order Now
                      <ChevronRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick order helpline alert banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-[2rem] bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-xl shadow-emerald-200/40 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle splash background graphic inside banner */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
          <div className="flex items-center gap-4 text-center md:text-left relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 shadow">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-lg text-white">Looking for Daily Doorstep Milk Delivery in Ieeja?</h4>
              <p className="text-sm text-emerald-50 mt-1 leading-normal">Subscribe to VSR Venkateshwara Milk delivery. Pure milk, delivered early morning every single day.</p>
            </div>
          </div>
          <motion.a
            href="tel:+919949207510"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3.5 rounded-full bg-white text-emerald-600 font-display font-black text-sm shadow-md hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 w-full md:w-auto text-center relative z-10"
          >
            Call Subscription: +91 99492 07510
          </motion.a>
        </div>

      </div>

      {/* Product Inquiry Popup Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 z-10"
              id="product-inquiry-modal"
            >
              {/* Modal close icon */}
              <motion.button
                onClick={() => setSelectedProduct(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-sky-50 hover:text-sky-600 transition-colors z-20"
                id="close-product-modal"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Modal Header details with Product visual */}
              <div className="relative h-44 bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500 text-[10px] font-black text-white uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                    Order {selectedProduct.name}
                  </h3>
                </div>
              </div>

              {/* Inquiry form body */}
              <div className="p-6 sm:p-8">
                <p className="text-xs text-slate-500 leading-normal mb-6">
                  Deliveries are handled locally inside Ieeja town and surrounding region. Fill out this brief callback request, and we will automatically open WhatsApp to coordinate.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {/* Customer name */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Customer phone */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        WhatsApp/Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Quantity Selector */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Required Quantity
                      </label>
                      <select
                        value={inquiryQty}
                        onChange={(e) => setInquiryQty(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-semibold text-slate-700 bg-white transition-all"
                      >
                        <option value="1">1 Unit</option>
                        <option value="2">2 Units</option>
                        <option value="3">3 Units</option>
                        <option value="5">5 Units</option>
                        <option value="10">10+ (Catering/Bulk)</option>
                        <option value="daily">Daily Subscription</option>
                      </select>
                    </div>
                  </div>

                  {/* Packagings available reminder */}
                  <div className="py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Packaging choices</span>
                    <span className="text-xs text-slate-700 font-extrabold truncate max-w-[240px]">
                      {selectedProduct.packaging.join(' / ')}
                    </span>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-4 flex gap-3">
                    <motion.button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-display font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={inquirySubmitted}
                      whileHover={inquirySubmitted ? {} : { scale: 1.04, y: -1.5 }}
                      whileTap={inquirySubmitted ? {} : { scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-sm shadow-md shadow-emerald-100 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      id="submit-inquiry-btn"
                    >
                      {inquirySubmitted ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Redirecting...
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Order via WhatsApp
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
