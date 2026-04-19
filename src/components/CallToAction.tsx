import { motion } from 'motion/react';

export default function CallToAction() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Workplace"
          className="w-full h-full object-cover grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-900/40 z-10" />
      
      {/* Glassmorphism Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[2px] z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.1]">
            Grow Your Business <br /> 
            <span className="text-blue-500">with Blazon</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Scale faster with AI tools, digital marketing, and powerful web solutions. 
            Join the digital evolution and lead your market.
          </p>

          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
              backgroundColor: "#f8fafc"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-4 bg-white text-black font-extrabold text-base rounded-full shadow-2xl transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            Get Started
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Light Rays */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[80%] h-full bg-blue-600/10 blur-[150px] rounded-full z-10 pointer-events-none" />
      <div className="absolute -top-1/2 -right-1/4 w-[60%] h-full bg-indigo-600/10 blur-[150px] rounded-full z-10 pointer-events-none" />
    </section>
  );
}
