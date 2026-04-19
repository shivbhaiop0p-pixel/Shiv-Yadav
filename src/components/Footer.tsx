import { motion } from 'motion/react';
import { Facebook, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f9f9f9] pt-20 pb-10">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto px-10 text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-[900] text-[#111] mb-6 tracking-tighter"
        >
          WANNA TALK?
        </motion.h2>
        
        <motion.a 
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-[#111] hover:text-[#555] transition-colors group cursor-pointer"
        >
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          <span>CONTACT US</span>
        </motion.a>
      </div>

      <div className="max-w-7xl mx-auto px-10">
        {/* Divider */}
        <div className="h-px bg-gray-200 w-full mb-16" />

        {/* Footer Parts */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          {/* Left Side: Navigation */}
          <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start order-2 md:order-1">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-semibold text-gray-600 hover:text-[#111] group transition-colors"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#111] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Center: Brand Info */}
          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="px-10 py-5 rounded-full border border-gray-200 bg-white shadow-sm flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center text-white font-black text-sm">
                  B
                </div>
                <span className="font-black text-xl tracking-tighter text-[#111]">BLAZON</span>
              </div>
              
              <div className="w-px h-8 bg-gray-200 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  © {currentYear} ALL RIGHTS RESERVED
                </p>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">
                  Digital Agency
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 order-3">
            {[
              { icon: Facebook, label: 'Facebook', href: '#' },
              { icon: Phone, label: 'Call', href: 'tel:+' },
              { icon: Mail, label: 'Mail Us', href: 'mailto:' },
            ].map((action) => (
              <motion.a
                key={action.label}
                href={action.href}
                whileHover={{ backgroundColor: '#111', color: '#fff' }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-600 font-bold text-xs transition-all duration-300"
              >
                <action.icon size={14} />
                <span>{action.label.toUpperCase()}</span>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Global Bottom detail */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex justify-center">
           <p className="text-[10px] text-gray-300 font-medium tracking-[0.2em]">BLAZON DIGITAL EXPERIENCE HUB</p>
        </div>
      </div>
    </footer>
  );
}
