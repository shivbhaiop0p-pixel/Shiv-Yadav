import { motion } from 'motion/react';
import { Twitter, Facebook, Linkedin, Instagram, Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#fafafa] font-sans border-t border-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-black text-gray-900 tracking-[-2px] leading-tight mb-6"
          >
            Let's <span className="text-[#e8192c]">Work Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Have a project in mind or just want to say hi? Reach out through the form below or via any of my direct contact points.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Direct Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-black text-[#e8192c] uppercase tracking-widest mb-8">Direct Contact</h3>
              
              <div className="space-y-6">
                <a href="mailto:contact@blazonmedia.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#e8192c] group-hover:shadow-md transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</span>
                    <span className="text-gray-900 font-bold">contact@blazonmedia.com</span>
                  </div>
                </a>

                <a href="https://wa.me/yournumber" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 shadow-sm border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp</span>
                    <span className="text-gray-900 font-bold">+1 (555) 000-0000</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Socials</h3>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-[#e8192c] hover:shadow-md transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
            
            <div className="pt-10">
               {/* BlazonMedia Small Logo Decoration */}
               <div className="flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                  <div className="w-8 h-8 bg-[#e8192c] rounded-lg flex items-center justify-center text-white font-black">B</div>
                  <span className="font-black tracking-tighter text-gray-900">BLAZON MEDIA</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl text-gray-900 focus:bg-white focus:border-[#e8192c]/30 focus:shadow-[0_0_0_4px_rgba(232,25,44,0.05)] outline-none transition-all placeholder:text-gray-300 font-medium"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl text-gray-900 focus:bg-white focus:border-[#e8192c]/30 focus:shadow-[0_0_0_4px_rgba(232,25,44,0.05)] outline-none transition-all placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Tell me about your project</label>
                <textarea 
                  placeholder="I'm looking for..." 
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl text-gray-900 focus:bg-white focus:border-[#e8192c]/30 focus:shadow-[0_0_0_4px_rgba(232,25,44,0.05)] outline-none transition-all placeholder:text-gray-300 font-medium h-[180px] resize-none"
                />
              </div>

              <div className="flex justify-end">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#c41525' }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-10 py-5 bg-[#e8192c] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 transition-all"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
