import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ethan Walker",
    role: "Marketing Manager, Canada",
    text: "Blazon completely transformed our online presence. The results were beyond expectations and delivered on time.",
    image: "https://picsum.photos/seed/ethan/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Olivia Bennett",
    role: "Startup Founder, Toronto",
    text: "The team is incredibly professional and easy to work with. Our website performance improved drastically.",
    image: "https://picsum.photos/seed/olivia/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Daniel Carter",
    role: "E-commerce Owner, Vancouver",
    text: "Highly recommended! Blazon helped scale our business with smart strategies and great execution.",
    image: "https://picsum.photos/seed/daniel/100/100",
    rating: 5
  },
  {
    id: 4,
    name: "Sophia Mitchell",
    role: "Brand Strategist, Canada",
    text: "Top-notch service and excellent support. They truly understand modern digital marketing.",
    image: "https://picsum.photos/seed/sophia/100/100",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSlides = isMobile ? TESTIMONIALS.length : TESTIMONIALS.length - 1;

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#0f172a] to-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            Testimonials
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-16 h-1 bg-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: isMobile ? `-${index * 100}%` : `-${index * 50}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full md:w-1/2 px-3 flex-shrink-0">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#1a1a1a] border border-white/5 p-5 md:p-6 rounded-[20px] shadow-2xl h-full flex flex-col justify-between transition-all duration-300 relative group"
                  >
                    {/* Glossy Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[20px] pointer-events-none" />
                    
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-500/10 p-2 rounded-xl">
                          <Quote className="text-blue-500 w-5 h-5" />
                        </div>
                        <div className="flex gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={10} fill="#3b82f6" className="text-blue-500" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6 relative z-10">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-auto relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 flex-shrink-0 shadow-lg">
                        <img 
                          src={t.image} 
                          alt={t.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-bold text-base">{t.name}</h4>
                        <p className="text-gray-500 text-xs font-medium tracking-wide">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl transition-all z-20 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl transition-all z-20 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700 hover:bg-gray-600'}`}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
