import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ServiceItem } from '../types';
import { X, Check, Clock, Euro, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onBookService?: (id: string) => void;
}

const Services: React.FC<Props> = ({ onBookService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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

  const openModal = (id: string) => {
    setSelectedServiceId(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedServiceId(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onBookService) {
      onBookService(id);
    }
    
    closeModal();
    const element = document.getElementById('booking');
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

  // Helper to merge constant data (id, icon, etc) with translated text
  const getServiceData = (id: string) => {
    const base = SERVICES.find(s => s.id === id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translated = (t.services.items as any)[id];
    return base && translated ? { ...base, ...translated } : null;
  };

  const selectedService = selectedServiceId ? getServiceData(selectedServiceId) : null;

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">{t.services.header}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.services.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((baseService, index) => {
            const service = getServiceData(baseService.id);
            if (!service) return null;

            // Dynamically get icon component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;

            return (
              <div 
                key={service.id}
                className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                  <div 
                    className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full"
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-50 rounded-full opacity-50 blur-2xl group-hover:bg-brand-100 transition-colors"></div>
                    
                    <div className="inline-flex items-center justify-center p-3 bg-brand-600 rounded-xl shadow-lg shadow-brand-500/30 mb-6 w-fit group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <span className="text-sm font-medium text-slate-500">
                          {t.services.est} {service.durationMin} {t.services.mins}
                        </span>
                        <span className="text-lg font-bold text-brand-600">
                          {t.services.from} €{service.priceStart}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => openModal(service.id)}
                            className="py-2 px-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-brand-600 transition-colors text-sm"
                        >
                            {t.services.learnMore}
                        </button>
                        <button
                            onClick={(e) => handleBookNow(e, service.id)}
                            className="py-2 px-3 bg-brand-600 border border-transparent text-white font-medium rounded-lg hover:bg-brand-700 transition-colors text-sm flex items-center justify-center gap-2"
                        >
                            <CalendarCheck className="w-4 h-4" />
                            {t.services.bookNow}
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>

          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg animate-in fade-in zoom-in duration-300">
              
              {/* Modal Header */}
              <div className="bg-brand-600 px-4 py-6 sm:px-6 relative">
                 <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 rounded-full p-1 bg-brand-700 text-brand-100 hover:text-white hover:bg-brand-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {React.createElement((Icons as any)[selectedService.icon] || Icons.Wrench, { className: "h-8 w-8 text-white" })}
                     </div>
                     <h3 className="text-2xl font-bold leading-6 text-white" id="modal-title">
                        {selectedService.title}
                     </h3>
                  </div>
              </div>

              {/* Modal Body */}
              <div className="px-4 py-6 sm:px-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">{t.services.modal.desc}</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedService.desc}
                    </p>
                  </div>

                  {selectedService.features && (
                     <div>
                        <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">{t.services.modal.included}</h4>
                        <ul className="space-y-2">
                           {selectedService.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-start text-slate-700">
                                 <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                 <span className="text-sm">{feature}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                     <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Clock className="h-5 w-5 text-brand-500" />
                        <div>
                           <p className="text-xs text-slate-500 font-medium uppercase">{t.services.modal.duration}</p>
                           <p className="font-bold text-slate-900">~{selectedService.durationMin} {t.services.mins}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Euro className="h-5 w-5 text-brand-500" />
                        <div>
                           <p className="text-xs text-slate-500 font-medium uppercase">{t.services.modal.startsFrom}</p>
                           <p className="font-bold text-slate-900">€{selectedService.priceStart}</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                <button
                  type="button"
                  onClick={(e) => handleBookNow(e, selectedService.id)}
                  className="inline-flex w-full justify-center rounded-lg bg-accent-500 px-3 py-3 text-sm font-bold text-white shadow-sm hover:bg-accent-600 sm:w-auto transition-colors cursor-pointer"
                >
                  {t.services.modal.bookBtn}
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors"
                  onClick={closeModal}
                >
                  {t.services.modal.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;