import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "ETHAN WALKER",
    text: "Blazon completely transformed our online presence. The results were beyond expectations and delivered on time with exceptional quality. Really impressed with their dedication.",
    image: "https://i.pravatar.cc/150?u=ethan",
    rating: 5
  },
  {
    id: 2,
    name: "OLIVIA BENNETT",
    text: "The team is incredibly professional and easy to work with. Our website performance improved drastically within weeks. Their strategic approach is truly world-class.",
    image: "https://i.pravatar.cc/150?u=olivia",
    rating: 4
  },
  {
    id: 3,
    name: "DANIEL CARTER",
    text: "Highly recommended! Blazon helped scale our business with smart strategies and great execution. They really listen to your needs and provide tailored solutions.",
    image: "https://i.pravatar.cc/150?u=daniel",
    rating: 3
  },
  {
    id: 4,
    name: "SOPHIA MITCHELL",
    text: "Top-notch service and excellent support. They truly understand modern digital marketing and how to achieve real growth in today's competitive landscape.",
    image: "https://i.pravatar.cc/150?u=sophia",
    rating: 5
  },
  {
    id: 5,
    name: "JAMES WILSON",
    text: "Exceptional results from a dedicated team. Their attention to detail and ability to execute complex strategies is what sets them apart from other agencies.",
    image: "https://i.pravatar.cc/150?u=james",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const next = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // For simplicity since we only have 5 items and want 3 side-by-side
  // We'll just show the first 3 or last 3 for now, or cycle properly if there were more
  const visibleItems = TESTIMONIALS.slice(currentPage * 1, currentPage * 1 + 3);
  
  // If we reach the end and have fewer than 3, wrap around to show enough items
  if (visibleItems.length < 3) {
    visibleItems.push(...TESTIMONIALS.slice(0, 3 - visibleItems.length));
  }

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 bg-white py-16 rounded-xl shadow-sm">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#e8192c] uppercase tracking-tight"
          >
            Testimonials
          </motion.h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {visibleItems.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group h-full flex flex-col items-center"
              >
                {/* Red Brackets Accents */}
                {/* Top-Right */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#e8192c] opacity-60 transition-all duration-300 group-hover:scale-110" />
                {/* Bottom-Left */}
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#e8192c] opacity-60 transition-all duration-300 group-hover:scale-110" />

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 shadow-md mb-6 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Name */}
                <h4 className="text-[#e8192c] font-black text-lg mb-4 text-center tracking-wide">
                  {testimonial.name}
                </h4>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 justify-center mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < testimonial.rating ? "#eab308" : "none"} 
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-[#e8192c] flex items-center justify-center text-[#e8192c] hover:bg-[#e8192c] hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 rounded-full bg-[#e8192c] flex items-center justify-center text-white hover:bg-[#c41525] transition-all shadow-md"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
