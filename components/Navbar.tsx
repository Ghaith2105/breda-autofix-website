import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    // Use IntersectionObserver on the sentinel in App.tsx
    // This is much more reliable than 'scroll' events on mobile
    const sentinel = document.getElementById('top-sentinel');
    
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel is NOT intersecting, it means we've scrolled down
        setScrolled(!entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    observer.observe(sentinel);
    
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.reviews, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      style={{ willChange: 'background-color, padding, box-shadow' }}
      className={`fixed w-full top-0 left-0 z-50 transform-gpu transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white shadow-lg py-2 md:py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Car className={`h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-300 ${scrolled ? 'text-brand-600' : 'text-white'}`} />
            <span className={`font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Breda<span className="text-accent-500">AutoFix</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors cursor-pointer ${
                  scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button 
              className={`relative flex items-center p-1 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${scrolled ? 'bg-slate-100 hover:bg-slate-200' : 'bg-black/20 hover:bg-black/30'}`} 
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              aria-label="Toggle language"
            >
               <div 
                  className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
                    language === 'en' ? 'translate-x-[100%] ml-1' : 'translate-x-0'
                  }`} 
               />
               <div className={`relative z-10 w-9 text-center px-2 py-1 text-xs font-bold transition-colors duration-300 ${language === 'nl' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 NL
               </div>
               <div className={`relative z-10 w-9 text-center px-2 py-1 text-xs font-bold transition-colors duration-300 ${language === 'en' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 EN
               </div>
            </button>

            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
            >
              {t.nav.book}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <button 
              className={`relative flex items-center p-0.5 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${scrolled ? 'bg-slate-100' : 'bg-black/20'}`} 
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
            >
               <div 
                  className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
                    language === 'en' ? 'translate-x-[100%] ml-0.5' : 'translate-x-0'
                  }`} 
               />
               <div className={`relative z-10 w-7 text-center px-1 py-0.5 text-[9px] font-extrabold transition-colors duration-300 ${language === 'nl' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 NL
               </div>
               <div className={`relative z-10 w-7 text-center px-1 py-0.5 text-[9px] font-extrabold transition-colors duration-300 ${language === 'en' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 EN
               </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'} hover:bg-white/10 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full top-full left-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 border-b border-slate-50 last:border-0 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="block w-full text-center mt-4 bg-accent-500 text-white px-3 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform cursor-pointer"
            >
              {t.nav.bookAppt}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;