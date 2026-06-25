import { motion } from 'motion/react';

interface VSRLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
}

export default function VSRLogo({ className = '', size = 'md', withText = false }: VSRLogoProps) {
  const dimensions = {
    sm: { box: 'w-10 h-10', svg: 40, text: 'text-lg', subtext: 'text-[7px]' },
    md: { box: 'w-14 h-14', svg: 56, text: 'text-xl', subtext: 'text-[9px]' },
    lg: { box: 'w-24 h-24', svg: 96, text: 'text-3xl', subtext: 'text-xs' },
    xl: { box: 'w-32 h-32', svg: 128, text: 'text-4xl', subtext: 'text-sm' },
  };

  const selected = dimensions[size];

  return (
    <div className={`flex items-center gap-3 ${className}`} id="vsr-brand-logo-container">
      {/* Premium Circular Logo Badge */}
      <div className={`relative flex items-center justify-center ${selected.box} rounded-full shadow-lg hover:shadow-emerald-100 transition-all duration-500`} id="vsr-logo-badge">
        <svg
          width={selected.svg}
          height={selected.svg}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full select-none"
        >
          <defs>
            {/* Soft Light Green Gradient */}
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" /> {/* Emerald 400 */}
              <stop offset="50%" stopColor="#22c55e" /> {/* Emerald 500 */}
              <stop offset="100%" stopColor="#15803d" /> {/* Emerald 700 */}
            </linearGradient>

            {/* Glowing inner shadow or drop gradient */}
            <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.5" />
            </linearGradient>
            
            {/* Golden organic leaf gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fef08a" /> {/* Yellow 200 */}
              <stop offset="100%" stopColor="#eab308" /> {/* Yellow 500 */}
            </linearGradient>

            <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#15803d" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background Circle with Premium Light Green Gradient */}
          <circle cx="50" cy="50" r="48" fill="url(#greenGrad)" />
          
          {/* Subtle Outer Golden Ring */}
          <circle cx="50" cy="50" r="45" stroke="#fef08a" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="3 3" />
          
          {/* Subtle Outer Thin White Ring */}
          <circle cx="50" cy="50" r="43" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />

          {/* Leaf Element (Top Left / Right arching) */}
          <path
            d="M 22 30 C 26 22, 38 22, 42 28 C 36 34, 26 34, 22 30 Z"
            fill="url(#leafGrad)"
            opacity="0.85"
            transform="rotate(-15 32 26)"
          />

          <path
            d="M 78 30 C 74 22, 62 22, 58 28 C 64 34, 74 34, 78 30 Z"
            fill="url(#leafGrad)"
            opacity="0.85"
            transform="rotate(15 68 26)"
          />

          {/* Milk Drop Element at bottom-center center */}
          <path
            d="M 50 68 C 42 68, 38 62, 38 56 C 38 50, 50 36, 50 36 C 50 36, 62 50, 62 56 C 62 62, 58 68, 50 68 Z"
            fill="url(#dropGrad)"
            filter="url(#softGlow)"
          />

          {/* White 'VSR' Brand text block in bold, modern font */}
          <text
            x="50"
            y="54"
            fill="#ffffff"
            fontSize="18"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            letterSpacing="-0.5"
            style={{ textShadow: '0px 2px 4px rgba(15,76,37,0.45)' }}
          >
            VSR
          </text>

          {/* Subtle milk splash arc at the bottom */}
          <path
            d="M 24 74 C 36 82, 64 82, 76 74"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          {/* Small decorative splash droplets */}
          <circle cx="21" cy="68" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="79" cy="68" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="50" cy="80" r="1.5" fill="#fef08a" opacity="0.9" />
        </svg>

        {/* Outer pulsing ring for aesthetic glow */}
        <span className="absolute -inset-1.5 rounded-full border border-emerald-400/20 animate-pulse pointer-events-none" />
      </div>

      {withText && (
        <div className="flex flex-col">
          <span className={`font-display font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors ${selected.text} leading-none`}>
            VSR <span className="text-emerald-500">DAIRY</span>
          </span>
          <span className={`font-mono font-bold uppercase tracking-widest text-emerald-600 mt-1 leading-none ${selected.subtext}`}>
            Venkateshwara Milk Center
          </span>
        </div>
      )}
    </div>
  );
}
