import { motion } from 'motion/react';
import { Star, Quote, Heart, Award, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'review-1',
      name: 'Raghavender Goud',
      role: 'Local Resident & Teacher',
      location: 'Ieeja, Jogulamba Gadwal',
      rating: 5,
      comment: 'We have been subscribing to VSR Venkateshwara Milk for over two years now. The thickness of the milk is consistently perfect. There is no synthetic smell or watery residue. My children drink it happily every morning. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'review-2',
      name: 'Kavitha Reddy',
      role: 'Homemaker',
      location: 'Subhash Nagar, Ieeja',
      rating: 5,
      comment: 'Their pure ghee is an absolute masterpiece! The moment I heat it, the entire house is filled with a rich traditional aroma, just like my grandmother used to make. The danedar granulated texture is proof of its genuine quality.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'review-3',
      name: 'Mahesh Kurva',
      role: 'Sweet Stall Owner',
      location: 'Main Road Circle, Ieeja',
      rating: 5,
      comment: 'I use VSR fresh milk and unsalted butter in bulk for cooking our local festival sweets and khoya. The high fat content makes the sweets exceptionally creamy and authentic. Their punctuality is top-tier!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'review-4',
      name: 'Anitha J.',
      role: 'Software Engineer (WFH)',
      location: 'Ieeja, Telangana',
      rating: 5,
      comment: 'VSR Curd is thick, sweet, and sets so beautifully. It\'s a lifesaver during our hot summer lunches. Sourced locally in Ieeja, the curd feels pure, fresh, and is an essential part of our daily meals.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Visual rings decoration with emerald/golden touches */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full border border-emerald-100 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full border border-emerald-100 pointer-events-none" />

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
            Voice of Families
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Loved & Trusted by Our Community
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            Hear directly from households, cooks, and local business owners in Ieeja, Jogulamba Gadwal district, who experience VSR Dairy every day.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout with Staggered Scroll Animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-md border border-emerald-100/30 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-emerald-100/30 hover:border-emerald-200/60 transition-all duration-500 relative group flex flex-col justify-between"
              id={`rev-card-${rev.id}`}
            >
              {/* Quote visual element */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-emerald-100/50 group-hover:text-emerald-200/40 group-hover:scale-110 transition-all duration-300 pointer-events-none" />

              <div>
                {/* Star rating container */}
                <div className="flex gap-1 mb-5">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic relative z-10 text-left">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author bio details bottom section */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4 text-left">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-emerald-600 font-bold mt-0.5">
                    {rev.role}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wide leading-none mt-1">
                    {rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Dairy Impact Metric banner upgraded to premium glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-50/50 to-sky-50/50 backdrop-blur-md border border-emerald-100/50 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-xl bg-white shadow-sm text-emerald-600 w-fit mb-2">
              <Award className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="block font-display font-black text-3xl text-slate-900">5,000+</span>
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Liters Delivered Daily</span>
          </div>
          <div className="hidden sm:block w-px h-16 bg-emerald-100" />
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-xl bg-white shadow-sm text-emerald-600 w-fit mb-2">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
            </div>
            <span className="block font-display font-black text-3xl text-slate-900">3,500+</span>
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Healthy Happy Families</span>
          </div>
          <div className="hidden sm:block w-px h-16 bg-emerald-100" />
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-xl bg-white shadow-sm text-emerald-600 w-fit mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="block font-display font-black text-3xl text-slate-900">100%</span>
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Pure Customer Trust</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
