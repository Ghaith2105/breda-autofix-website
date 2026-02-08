import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section id="pricing" ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase">{t.pricing.header}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            {t.pricing.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto font-light">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pricing.items.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
                <div 
                className={`relative h-full flex flex-col p-8 rounded-2xl border transition-transform hover:-translate-y-2 duration-300 ${index === 1 ? 'bg-slate-800 border-brand-500 shadow-2xl shadow-brand-500/20 z-10' : 'bg-slate-800/50 border-slate-700 backdrop-blur-sm'}`}
                >
                {index === 1 && (
                    <div className="absolute top-0 right-0 -mt-3 mr-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {t.pricing.popular}
                    </div>
                )}
                <h3 className="text-xl font-semibold text-white tracking-wide">{item.name}</h3>
                <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-extrabold tracking-tight">{item.price}</span>
                    <span className="ml-1 text-xl font-medium text-slate-400">{t.pricing.perVehicle}</span>
                </div>
                <ul className="mt-6 space-y-4 flex-1">
                    {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                        <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-brand-400" />
                        <span className="ml-3 text-sm text-slate-300 font-light tracking-wide">{feature}</span>
                    </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <a 
                    href="#booking" 
                    onClick={(e) => handleScroll(e, '#booking')}
                    className={`w-full block text-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-colors cursor-pointer uppercase tracking-wider ${index === 1 ? 'bg-brand-600 hover:bg-brand-700' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                    {t.pricing.book} {item.name}
                    </a>
                </div>
                </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center text-slate-400 text-sm font-light transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t.pricing.disclaimer}
        </div>
      </div>
    </section>
  );
};

export default Pricing;