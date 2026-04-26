import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValueEvent } from 'motion/react';
import { Users, Briefcase, Globe, Award } from 'lucide-react';

const STATS = [
  {
    id: 1,
    value: 120,
    suffix: '+',
    label: 'Creators Partnered',
    icon: Users,
    color: '#e8192c'
  },
  {
    id: 2,
    value: 250,
    suffix: '+',
    label: 'Projects Completed',
    icon: Briefcase,
    color: '#1a1a1a'
  },
  {
    id: 3,
    value: 1,
    suffix: 'M+',
    label: 'Reach Generated',
    icon: Globe,
    color: '#e8192c'
  },
  {
    id: 4,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Award,
    color: '#1a1a1a'
  }
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="font-black text-gray-900">
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4"
          >
            Trusted by <span className="text-[#e8192c]">Creators & Brands</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-1 bg-[#e8192c] mx-auto rounded-full"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <stat.icon 
                  size={32} 
                  className="text-gray-200 group-hover:text-[#e8192c] transition-colors duration-500" 
                />
                <div className="absolute -inset-2 bg-gray-50 rounded-full -z-10 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>

              {/* Number */}
              <div className="text-5xl md:text-6xl mb-3 tracking-tighter">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest leading-relaxed max-w-[140px]">
                {stat.label}
              </p>

              {/* Decorative Divider for Desktop */}
              {idx < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
