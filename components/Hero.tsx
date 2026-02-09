import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80" 
            alt="Professional car mechanic workshop at Breda AutoFix featuring modern equipment and vehicle lifts" 
            className="w-full h-full object-cover object-center animate-[fadeIn_1.5s_ease-out]"
          />
          {/* Heavy dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
          {/* Gradient overlay for smooth transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900"></div>
      </div>
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900/50 to-slate-900 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 md:pt-0">
        
        {/* Glow behind text - Increased opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] bg-brand-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md mb-6 shadow-lg animate-[fadeIn_0.5s_ease-out_forwards]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">Premium Garage Services</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight mb-6 leading-tight animate-[slideUpFade_0.5s_ease-out_0.2s_both]">
          <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(110deg,#94a3b8,45%,#ffffff,55%,#94a3b8)] bg-[length:250%_100%] animate-shimmer pb-2">
            {t.hero.title1}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">
            {t.hero.title2}
          </span>
        </h1>
        
        <p className="mt-0 max-w-2xl text-lg sm:text-2xl text-slate-300 mb-10 leading-relaxed font-light animate-[slideUpFade_0.5s_ease-out_0.4s_both] drop-shadow-md px-4 sm:px-0">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-[slideUpFade_0.5s_ease-out_0.6s_both] px-6 sm:px-0">
          <a
            href="#booking"
            onClick={(e) => handleScroll(e, '#booking')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/25 w-full sm:w-auto cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#services"
             onClick={(e) => handleScroll(e, '#services')}
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-lg font-semibold rounded-lg text-slate-200 bg-slate-900/40 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm w-full sm:w-auto cursor-pointer"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;