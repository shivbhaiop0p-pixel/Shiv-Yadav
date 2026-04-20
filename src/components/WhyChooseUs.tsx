import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Headphones } from 'lucide-react';

const FEATURES = [
  {
    title: 'SATISFACTION',
    description: 'We focus on quality and client satisfaction, delivering results that exceed expectations.',
    icon: ShieldCheck,
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    title: 'QUICK DELIVERY',
    description: 'We ensure timely delivery so your business never misses opportunities.',
    icon: Zap,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    title: 'WE ARE PARTNERS',
    description: 'We work closely with you as partners, not just service providers.',
    icon: Users,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'ONGOING SUPPORT',
    description: 'We provide continuous support even after project completion.',
    icon: Headphones,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-[800] text-[--color-text-vibrant-dark] mb-4">
            Why Choose Blazon?
          </h2>
          <div className="w-16 h-1 bg-[--color-teal-accent] mx-auto rounded-full" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="relative mb-8 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 ${feature.bgColor} rounded-[2rem] flex items-center justify-center relative z-10 transition-transform duration-300`}
                >
                  <feature.icon className={`${feature.iconColor} w-10 h-10`} />
                </motion.div>
                {/* Decorative Dotted Border/Background */}
                <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-dashed border-gray-200 rounded-[2rem] transform rotate-12 -z-0 opacity-50 transition-transform group-hover:rotate-0" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-[800] text-[--color-text-vibrant-dark] tracking-widest mb-4 uppercase">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[--color-text-vibrant-muted] text-sm leading-relaxed max-w-[220px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#1a1a1a] text-white font-bold rounded-full shadow-lg hover:bg-black transition-colors min-w-[180px] cursor-pointer"
          >
            MORE INFO
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#c0bbbb] text-white font-bold rounded-full shadow-lg transition-all min-w-[180px] cursor-pointer"
          >
            GET STARTED!
          </motion.button>
        </div>
      </div>
    </section>
  );
}
