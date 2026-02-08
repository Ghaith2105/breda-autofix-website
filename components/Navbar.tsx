import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Adjust for sticky header
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Car className={`h-8 w-8 ${scrolled ? 'text-brand-600' : 'text-white'}`} />
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
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

            {/* Language Toggle - Desktop */}
            <button 
              className={`relative flex items-center p-1 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${scrolled ? 'bg-slate-100 hover:bg-slate-200' : 'bg-black/20 hover:bg-black/30'}`} 
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              aria-label="Toggle language"
            >
               {/* Sliding Pill */}
               <div 
                  className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
                    language === 'en' ? 'translate-x-[100%] ml-1' : 'translate-x-0'
                  }`} 
               />
               
               {/* Text Labels */}
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
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-full font-medium transition-transform transform hover:scale-105 cursor-pointer"
            >
              {t.nav.book}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Toggle */}
            <button 
              className={`relative flex items-center p-1 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${scrolled ? 'bg-slate-100' : 'bg-black/20'}`} 
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
            >
               <div 
                  className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
                    language === 'en' ? 'translate-x-[100%] ml-1' : 'translate-x-0'
                  }`} 
               />
               <div className={`relative z-10 w-8 text-center px-1 py-0.5 text-[10px] font-bold transition-colors duration-300 ${language === 'nl' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 NL
               </div>
               <div className={`relative z-10 w-8 text-center px-1 py-0.5 text-[10px] font-bold transition-colors duration-300 ${language === 'en' ? 'text-brand-600' : (scrolled ? 'text-slate-500' : 'text-white/80')}`}>
                 EN
               </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:opacity-80 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg absolute w-full top-full left-0 border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="block w-full text-center mt-4 bg-accent-500 text-white px-3 py-3 rounded-md font-bold cursor-pointer"
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