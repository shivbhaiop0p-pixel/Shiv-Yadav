import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home', active: true },
  { name: 'About Us', href: '#about' },
  { 
    name: 'Services', 
    href: '#services', 
    dropdown: ['SEO Optimization', 'Content Marketing', 'Social Media', 'AI Automation'] 
  },
  { 
    name: 'Packages', 
    href: '#packages', 
    dropdown: ['Starter', 'Professional', 'Enterprise'] 
  },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 border-b border-[#eee] ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)]' : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Left Side: Logo & Brand */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[--color-teal-accent] rounded-lg mr-3 flex items-center justify-center text-white font-bold text-2xl">
            B
          </div>
          <div>
            <h1 className="text-[22px] font-[800] tracking-[2px] text-[--color-text-vibrant-dark] leading-none uppercase">BLAZON</h1>
            <p className="text-[9px] font-[600] tracking-[1px] text-[--color-text-vibrant-muted] mt-[2px] uppercase">
              Think smart before you start
            </p>
          </div>
        </div>

        {/* Right Side: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.name} 
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                    item.active ? 'text-[--color-teal-accent]' : 'text-[--color-text-vibrant-dark] hover:text-[--color-teal-accent]'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </a>
                
                {/* Active/Hover Underline */}
                <div 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[--color-teal-accent] transition-all duration-300 ${
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden"
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          
          <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors cursor-pointer">
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="p-2 text-gray-600">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white">
                      <Rocket size={18} />
                    </div>
                    <span className="font-bold text-lg">BLAZON</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                
                <nav>
                  <ul className="space-y-6">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.name}>
                        <div className="flex flex-col gap-2">
                          <a 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-lg font-bold ${item.active ? 'text-teal-600' : 'text-gray-800'}`}
                          >
                            {item.name}
                          </a>
                          {item.dropdown && (
                            <ul className="ml-4 space-y-3 mt-1 border-l-2 border-teal-100 pl-4">
                              {item.dropdown.map((subItem) => (
                                <li key={subItem}>
                                  <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <button className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-200">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
