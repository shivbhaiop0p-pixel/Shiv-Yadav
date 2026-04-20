import { motion } from 'motion/react';
import { Search, Share2, Target, Layout, Smartphone, Gamepad2 } from 'lucide-react';

const SERVICES = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'We provide professional SEO services to improve your website visibility and rankings.',
    icon: Search,
    color: 'bg-gradient-to-br from-orange-400 to-red-500'
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow your brand and audience through powerful social media marketing strategies.',
    icon: Share2,
    color: 'bg-gradient-to-br from-red-400 to-rose-500'
  },
  {
    title: 'Paid Advertising',
    description: 'Run high-converting ads to quickly generate leads and sales.',
    icon: Target,
    color: 'bg-gradient-to-br from-orange-500 to-red-600'
  },
  {
    title: 'Web Design & Development',
    description: 'We create modern, responsive, and high-performing websites.',
    icon: Layout,
    color: 'bg-gradient-to-br from-rose-400 to-orange-500'
  },
  {
    title: 'Mobile Application Development',
    description: 'Build user-friendly Android and iOS applications for your business.',
    icon: Smartphone,
    color: 'bg-gradient-to-br from-orange-600 to-red-500'
  },
  {
    title: 'Game Development',
    description: 'We develop engaging and high-quality games for multiple platforms.',
    icon: Gamepad2,
    color: 'bg-gradient-to-br from-red-500 to-orange-400'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[--color-text-vibrant-dark] mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[--color-teal-accent] mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-start gap-6 group"
            >
              {/* Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-red-100 ${service.color}`}
              >
                <service.icon className="text-white w-8 h-8" />
              </motion.div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[--color-text-vibrant-dark] leading-tight group-hover:text-[--color-teal-accent] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[--color-text-vibrant-muted] text-sm leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
