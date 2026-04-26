import { motion } from 'motion/react';
import { Code2, PenTool, BarChart3, Palette, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Modern, fast, and responsive websites built with the latest technologies.',
    icon: Code2,
    iconColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'UI/UX Design',
    description: 'Clean and user-friendly interfaces designed for optimal player experiences.',
    icon: PenTool,
    iconColor: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, targeted ads, and growth strategies to amplify your brand presence.',
    icon: BarChart3,
    iconColor: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Branding',
    description: 'Logo, visual identity, and strategic brand design for unique recognition.',
    icon: Palette,
    iconColor: 'bg-green-100 text-green-600',
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#f5f5f5] px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-white py-16 rounded-xl shadow-sm px-8 md:px-16 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50/30 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-gray-100 pb-10">
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tighter"
              >
                Our <span className="text-[#e8192c]">Services</span>
              </motion.h2>
              <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Innovation & Growth</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[2px] bg-[#e8192c]" />
              <div className="text-[#e8192c] font-black text-sm uppercase tracking-widest">
                Solutions
              </div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#e8192c]/10"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-[#e8192c] flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:bg-[#e8192c] group-hover:text-white transition-all duration-300">
                  <service.icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Learn More */}
                <button className="flex items-center gap-2 text-[#e8192c] font-black text-xs uppercase tracking-widest group/btn">
                  Explore
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center border-t border-gray-100 pt-12">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e8192c] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 transition-all hover:bg-[#c41525]"
            >
              Start Your Project
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
