import { motion } from 'motion/react';
import { Heart, UserPlus } from 'lucide-react';

const GALLERY_IMAGES = [
  "https://picsum.photos/seed/abt1/200/200",
  "https://picsum.photos/seed/abt2/200/200",
  "https://picsum.photos/seed/abt3/200/200",
  "https://picsum.photos/seed/abt4/200/200",
  "https://picsum.photos/seed/abt5/200/200",
  "https://picsum.photos/seed/abt6/200/200",
];

export default function AboutMeSection() {
  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-10 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[400px]">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[50%] flex flex-col items-start pr-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#e8192c]" />
            <span className="text-[#e8192c] font-black text-xs uppercase tracking-widest">Digital Agency</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-[900] text-gray-900 lowercase tracking-tighter mb-8 leading-[0.9]">
            about me
          </h2>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              I'm a Digital Marketing & <span className="text-[#e8192c]">Creative Agency</span> from Lucknow, India.
            </p>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
              We enjoy turning complex problems into simple, beautiful and intuitive solutions. BlazonMedia is built on one belief — <span className="font-bold text-gray-700 italic">smart strategy before every move.</span>
            </p>
            
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg opacity-80">
              Whether it's branding, SEO, or social media, we amplify your voice and grow your reach with data-driven creative solutions.
            </p>
          </div>
          
          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <div className="flex items-center">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-l-md font-bold text-xs shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Like
              </motion.a>
              <span className="px-3 py-2 border border-gray-200 border-l-0 bg-gray-50 text-gray-600 font-bold text-xs rounded-r-md">
                8.9K
              </span>
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-md font-bold text-xs shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              Follow @BlazonMedia
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[45%] relative flex items-center justify-center h-[500px]"
        >
          {/* The Square Box */}
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            {/* Decorative Thin Line Square (Patli Line) */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-gray-200 z-0" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#e8192c]/30 z-0" />
            
            {/* Main Content Box */}
            <div className="relative w-full h-full bg-gray-50 border border-gray-100 z-10 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Agency Office" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom Label inside box */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900/40 to-transparent flex justify-between items-end">
                <span className="text-white font-black text-4xl tracking-tighter leading-none lowercase">
                  01.
                </span>
                <div className="w-12 h-[1px] bg-white opacity-50" />
              </div>
            </div>
            
            {/* Floating Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#e8192c] flex items-center justify-center z-20 shadow-xl">
              <span className="text-white font-black text-xl">B</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GALLERY (Retaining the bottom gallery as it adds value) */}
      <div className="max-w-7xl mx-auto pt-16 border-t border-gray-100">
        <div className="no-scrollbar overflow-x-auto flex gap-6 pb-2 px-1">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-sm cursor-pointer bg-gray-50 border border-gray-100"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
