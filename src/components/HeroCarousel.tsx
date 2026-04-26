import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bot, 
  PenTool, 
  BarChart3, 
  Layout, 
  Code2, 
  TrendingUp,
  Cpu,
  Mail,
  Search,
  Camera,
  Layers,
  Smartphone,
  Trophy,
  Activity
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Powerful AI Tools",
    subtitle: "Supercharge your business with powerful AI tools, marketing, and automation",
    gradient: "from-[#e0f7fa] to-[#b2ebf2]",
    iconColor: "text-[--color-teal-accent]",
    bgColor: "bg-white",
    icons: [
      { component: Bot, label: "Chatbot" },
      { component: Cpu, label: "Neural Net" },
      { component: Mail, label: "AI Writer" },
      { component: Search, label: "Insights" },
      { component: Activity, label: "Automation" }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Solutions",
    subtitle: "Strategic campaigns designed to amplify your brand voice and reach",
    gradient: "from-[#e0f2f1] to-[#b2dfdb]",
    iconColor: "text-[--color-teal-accent]",
    bgColor: "bg-white",
    icons: [
      { component: BarChart3, label: "SEO" },
      { component: Search, label: "Ads" },
      { component: TrendingUp, label: "Analytics" },
      { component: Smartphone, label: "Social" },
      { component: Mail, label: "Email" }
    ]
  },
  {
    id: 3,
    title: "Creative Design Services",
    subtitle: "Stunning visuals that capture attention and convert visitors into customers",
    gradient: "from-[#f3e5f5] to-[#e1bee7]",
    iconColor: "text-[--color-teal-accent]",
    bgColor: "bg-white",
    icons: [
      { component: PenTool, label: "Branding" },
      { component: Layout, label: "UI/UX" },
      { component: Camera, label: "Visuals" },
      { component: Layers, label: "Graphics" },
      { component: Trophy, label: "Innovation" }
    ]
  },
  {
    id: 4,
    title: "Web Development",
    subtitle: "High-performance websites and applications built with modern frameworks",
    gradient: "from-[#fff3e0] to-[#ffe0b2]",
    iconColor: "text-[--color-teal-accent]",
    bgColor: "bg-white",
    icons: [
      { component: Code2, label: "Frontend" },
      { component: Layers, label: "Backend" },
      { component: Smartphone, label: "Mobile" },
      { component: Cpu, label: "Database" },
      { component: Activity, label: "Performance" }
    ]
  },
  {
    id: 5,
    title: "Grow Your Business",
    subtitle: "Data-driven strategies to scale your operations and increase revenue",
    gradient: "from-[#e8eaf6] to-[#c5cae9]",
    iconColor: "text-[--color-teal-accent]",
    bgColor: "bg-white",
    icons: [
      { component: TrendingUp, label: "Growth" },
      { component: Trophy, label: "Success" },
      { component: BarChart3, label: "ROI" },
      { component: Activity, label: "Scaling" },
      { component: Smartphone, label: "Market" }
    ]
  }
];

export default function HeroCarousel({ onSlideChange }: { onSlideChange?: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section id="home" className="flex-1 px-4 py-6 md:px-10 md:py-10 max-w-7xl mx-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className={`relative w-full h-full max-h-[700px] aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[--radius-vibrant-lg] shadow-[0_20px_50px_rgba(0,130,130,0.1)] border border-white/50 bg-gradient-to-br ${currentSlide.gradient} overflow-hidden transition-all duration-700`}>
        {/* Abstract Shapes */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] md:top-[-100px] md:right-[-50px] md:w-[300px] md:h-[300px] bg-white/20 rounded-full z-1" />
        <div className="absolute bottom-[50px] left-[-30px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-white/20 rounded-full z-1" />

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 z-10"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[28px] sm:text-[36px] md:text-[56px] font-[800] text-[--color-text-vibrant-dark] mb-4 md:mb-5 leading-[1.2] md:leading-[1.1]"
            >
              {currentSlide.title}
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[14px] md:text-[18px] text-[--color-text-vibrant-muted] max-w-[700px] mb-6 md:mb-10 leading-[1.6]"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Service Icons */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex flex-wrap justify-center gap-4 md:gap-10 mb-8 md:mb-12"
            >
              {currentSlide.icons.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className={`w-12 h-12 md:w-[72px] md:h-[72px] ${currentSlide.bgColor} ${currentSlide.iconColor} rounded-[16px] md:rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <icon.component className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 md:px-12 py-2.5 md:py-[18px] bg-transparent text-[--color-teal-accent] font-bold rounded-[50px] border-2 border-[--color-teal-accent] hover:bg-[--color-teal-accent] hover:text-white hover:shadow-[0_10px_20px_rgba(0,130,130,0.2)] transition-all duration-300 cursor-pointer text-xs md:text-base"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 md:inset-x-[30px] top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-white/70 backdrop-blur-[5px] border border-black/5 shadow-sm flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all pointer-events-auto cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-white/70 backdrop-blur-[5px] border border-black/5 shadow-sm flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all pointer-events-auto cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Indicator */}
        <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-md px-[18px] py-[6px] rounded-[20px] shadow-sm z-30">
          <span className="text-[13px] font-bold text-[--color-text-vibrant-dark]">
            {currentIndex + 1} / {SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
