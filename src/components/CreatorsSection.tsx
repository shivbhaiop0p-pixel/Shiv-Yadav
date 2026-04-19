import { motion } from 'motion/react';

const CREATORS = [
  { name: "Alex Morgan", image: "https://picsum.photos/seed/man1/400/500" },
  { name: "Chloe Bennett", image: "https://picsum.photos/seed/woman1/400/500" },
  { name: "Ryan Parker", image: "https://picsum.photos/seed/man2/400/500" },
  { name: "Taylor Swift", image: "https://picsum.photos/seed/woman2/400/500" },
  { name: "Jordan Reed", image: "https://picsum.photos/seed/man3/400/500" },
  { name: "Sarah Logan", image: "https://picsum.photos/seed/woman3/400/500" },
  { name: "Kevin Hart", image: "https://picsum.photos/seed/man4/400/500" },
  { name: "Jessica Alba", image: "https://picsum.photos/seed/woman4/400/500" },
];

export default function CreatorsSection({ activeSlideIndex = 0 }: { activeSlideIndex?: number }) {
  const gradients = [
    "from-[#e0f7fa] to-[#b2ebf2]", // AI Tools
    "from-[#e0f2f1] to-[#b2dfdb]", // Marketing
    "from-[#f3e5f5] to-[#e1bee7]", // Creative
    "from-[#fff3e0] to-[#ffe0b2]", // Web Dev
    "from-[#e8eaf6] to-[#c5cae9]"  // Grow Business
  ];

  const currentGradient = gradients[activeSlideIndex] || gradients[0];

  return (
    <section className={`py-24 bg-gradient-to-br ${currentGradient} overflow-hidden transition-colors duration-1000`}>
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[900] text-[--color-text-vibrant-dark] inline-flex items-center gap-1">
            Creators We Partner W<span>i</span>
            <span className="relative inline-block">
              t
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </span>
            h
          </h2>
        </div>

        {/* Creators Sliding Row */}
        <div className="relative w-full overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 w-fit"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
          {/* Seamless loop by repeating the list */}
          {[...CREATORS, ...CREATORS, ...CREATORS].map((creator, idx) => (
            <motion.div
              key={`${creator.name}-${idx}`}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/40 backdrop-blur-md border border-white/50"
            >
              {/* Image */}
              <img 
                src={creator.image} 
                alt={creator.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Simple Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                 <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/30 text-center">
                    <span className="text-white font-bold text-sm uppercase tracking-widest">{creator.name}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
}
