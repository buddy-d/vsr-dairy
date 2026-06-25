import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Layers, ClipboardCheck, Cpu, Truck, Check, Sparkles } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Nutritious Farm Feeding',
      subtitle: 'Healthy Grass-Fed Cattle',
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      description: 'Our journey starts on trusted partner farms in Jogulamba Gadwal. Cowherds raise healthy cattle on 100% organic green grass and oilcakes, generating high-quality A2-rich cream milk.',
      details: ['Zero chemical growth hormones used', 'Periodic veterinarian inspections', 'Pure spring water drinking sources'],
      color: 'emerald',
      bgColor: 'bg-emerald-50 border-emerald-200',
      tagColor: 'bg-emerald-500',
    },
    {
      id: 1,
      title: 'Rapid Cold Collection',
      subtitle: 'Insulated Local Gathering',
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      description: 'Fresh milk is gathered during early milking cycles (4:30 AM). It is instantly transported to the VSR Center collection station and cold-chilled under 4°C in insulated storage within 45 minutes.',
      details: ['Insulated temperature-controlled transit', 'Instant thermal cold shock (under 4°C)', 'Stops any bacterial propagation naturally'],
      color: 'emerald',
      bgColor: 'bg-emerald-50 border-emerald-200',
      tagColor: 'bg-emerald-500',
    },
    {
      id: 2,
      title: 'Lab Quality Testing',
      subtitle: 'Multi-Parameter Screening',
      icon: <ClipboardCheck className="w-6 h-6 text-amber-500" />,
      description: 'Our laboratory runs detailed tests on density, cream fat parameters, natural solid-not-fat (SNF) percentages, and adulteration levels. Any compromised batch is strictly discarded.',
      details: ['Zero tolerance for added water', 'Calibrated lactometer density testing', 'Strict microbial safety indicators'],
      color: 'amber',
      bgColor: 'bg-amber-50 border-amber-200',
      tagColor: 'bg-amber-500',
    },
    {
      id: 3,
      title: 'Sterile Processing',
      subtitle: 'Hands-Free Standardization',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      description: 'Using high-grade automated equipment, milk is pasteurized to eliminate pathogens while locking in vital proteins. Filled and sealed in sterilized food-grade pouches without human contact.',
      details: ['Indirect steam pasteurization', 'Automated packing and sealing', 'Pristine sanitary facility guidelines'],
      color: 'emerald',
      bgColor: 'bg-emerald-50 border-emerald-200',
      tagColor: 'bg-emerald-500',
    },
    {
      id: 4,
      title: 'Early Morning Delivery',
      subtitle: 'Direct to Ieeja Doorsteps',
      icon: <Truck className="w-6 h-6 text-emerald-600 animate-bounce" />,
      description: 'The dispatched batches are instantly routed inside our regional insulated trucks, reaching supermarkets, sweet stalls, tea vendors, and local home doorsteps by 7:00 AM sharp.',
      details: ['Guaranteed morning doorstep delivery', 'Serves Ieeja & surrounding villages', 'Flexible monthly sub models available'],
      color: 'emerald',
      bgColor: 'bg-emerald-50 border-emerald-200',
      tagColor: 'bg-emerald-500',
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-100 to-transparent -translate-y-12 hidden lg:block" />

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
            Our Flow of Goodness
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            How We Protect Dairy Freshness
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="text-base text-slate-600 mt-6">
            From green, sunny Indian cow pastures straight to your dining table, track our meticulous, hygienic 5-stage dairy supply process.
          </p>
        </motion.div>

        {/* Process Interactive Selector Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
          {steps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl border text-center transition-all duration-300 relative cursor-pointer ${
                activeStep === step.id
                  ? 'bg-white border-emerald-500 shadow-lg scale-105 z-10'
                  : 'bg-white/80 border-slate-100 text-slate-600 hover:border-emerald-200 hover:bg-white'
              }`}
              id={`process-step-tab-${step.id}`}
            >
              {/* Number Circle */}
              <span className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full text-[10px] font-black text-white flex items-center justify-center ${
                activeStep === step.id ? 'bg-emerald-600' : 'bg-slate-300'
              }`}>
                {step.id + 1}
              </span>

              {/* Icon badge */}
              <div className="mx-auto p-2.5 rounded-xl bg-slate-50 w-fit mb-3">
                {step.icon}
              </div>

              <h4 className="font-display font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                {step.title.split(' ').slice(1).join(' ')} {/* Short label */}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-none">{step.subtitle}</p>
            </motion.button>
          ))}
        </div>

        {/* Detailed Animated Display Panel */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-emerald-100/30 shadow-xl p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative faint milk splashes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Display Text Content (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Stage 0{steps[activeStep].id + 1}: {steps[activeStep].subtitle}
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {steps[activeStep].title}
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Check highlights list */}
                <div className="space-y-3 pt-4">
                  {steps[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-slate-700 font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Display Visual Illustration (5 cols) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="w-full max-w-[340px] aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-slate-50 group">
                  <img
                    src={
                      activeStep === 0
                        ? 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80' // cows pasture
                        : activeStep === 1
                        ? 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' // milk gather
                        : activeStep === 2
                        ? 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80' // quality testing
                        : activeStep === 3
                        ? 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80' // pasteurized bottle
                        : 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' // delicious table setting
                    }
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Circular numbers shadow decoration */}
                <span className="absolute -bottom-6 -right-6 text-[10rem] font-display font-black text-slate-100 leading-none select-none pointer-events-none -z-10">
                  0{activeStep + 1}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
