import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function PromotionalSection({ activeSlideIndex = 0 }: { activeSlideIndex?: number }) {
  // Exact gradients from HeroCarousel.tsx
  const gradients = [
    "from-[#e0f7fa] to-[#b2ebf2]", // AI Tools
    "from-[#e0f2f1] to-[#b2dfdb]", // Marketing
    "from-[#f3e5f5] to-[#e1bee7]", // Creative
    "from-[#fff3e0] to-[#ffe0b2]", // Web Dev
    "from-[#e8eaf6] to-[#c5cae9]"  // Grow Business
  ];

  const currentGradient = gradients[activeSlideIndex] || gradients[0];

  const cards = [
    {
      title: "Our Mission",
      subtitle: "We are a modern digital agency at the intersection of AI and creativity. We build high-performance tools and strategies that help scale businesses worldwide.",
      extraText: "Learn our story",
      gradient: currentGradient,
      glow: "shadow-teal-500/10"
    },
    {
      title: "Content Monetization",
      subtitle: "Turn your content into income with smart monetization strategies, ads, and automation tools.",
      extraText: "Start earning now",
      gradient: currentGradient,
      glow: "shadow-indigo-500/10"
    }
  ];

  const HUMAN_IMAGES = [
    "https://picsum.photos/seed/person1/100/100",
    "https://picsum.photos/seed/person2/100/100",
    "https://picsum.photos/seed/person3/100/100",
    "https://picsum.photos/seed/person4/100/100",
    "https://picsum.photos/seed/person5/100/100",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative group h-full rounded-[24px] overflow-hidden p-8 md:p-10 text-[--color-text-vibrant-dark] shadow-xl hover:${card.glow} transition-all duration-300 border border-black/5`}
            >
              {/* Background Gradient matching Hero exactly */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Glassmorphism / Glossy Overlay - Adjusted for light background */}
              <div className="absolute inset-0 bg-white/20 opacity-50 group-hover:opacity-70 transition-opacity pointer-events-none" />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[--color-text-vibrant-dark] opacity-50">About Us</span>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {card.title}
                      </h3>
                    </div>
                    <div className="p-2 bg-black/5 backdrop-blur-md rounded-full border border-black/10 group-hover:bg-black/10 transition-colors">
                      <ArrowUpRight size={20} className="text-[--color-text-vibrant-dark]" />
                    </div>
                  </div>

                  <p className="text-lg text-[--color-text-vibrant-dark]/80 font-medium leading-relaxed mb-8 max-w-[90%]">
                    {card.subtitle}
                  </p>

                  {/* Auto-scrolling Slider of Humans - Only for Content Monetization box */}
                  {card.title === "Content Monetization" && (
                    <div className="relative overflow-hidden w-full h-12 mb-10">
                      <motion.div 
                        className="flex gap-4 w-max"
                        animate={{ x: [0, -100] }}
                        transition={{ 
                          duration: 10, 
                          repeat: Infinity, 
                          ease: "linear"
                        }}
                      >
                        {[...HUMAN_IMAGES, ...HUMAN_IMAGES, ...HUMAN_IMAGES].map((img, i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden bg-white/30 shadow-sm flex-shrink-0">
                            <img 
                              src={img} 
                              alt="Human" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </motion.div>
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/30 to-transparent z-10" />
                      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/30 to-transparent z-10" />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 group/btn">
                  <span className="text-sm font-bold tracking-wider uppercase opacity-90 group-hover:opacity-100 transition-opacity">
                    {card.extraText}
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUpRight size={14} className="opacity-70" />
                  </motion.div>
                </div>
              </div>

              {/* Light Reflection Stroke */}
              <div className="absolute inset-0 rounded-[24px] border border-white/50 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
