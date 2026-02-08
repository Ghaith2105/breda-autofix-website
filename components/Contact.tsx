import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
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

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">{t.contact.header}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.contact.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Contact Details */}
          <div className={`bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full flex flex-col justify-center transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
             <div className="space-y-8">
                <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 bg-brand-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-600" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t.contact.location}</h3>
                      <p className="text-slate-600 font-light text-lg">
                         Grote Markt 1<br/>
                         4811 XM Breda<br/>
                         The Netherlands
                      </p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 bg-brand-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-brand-600" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t.contact.phone}</h3>
                      <p className="text-slate-600 font-light text-lg">
                         <a href="tel:+31761234567" className="hover:text-brand-600 transition-colors">
                            +31 (0) 76 123 4567
                         </a>
                      </p>
                      <p className="text-sm text-slate-500 mt-1">{t.contact.hours}</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 bg-brand-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-brand-600" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t.contact.email}</h3>
                      <p className="text-slate-600 font-light text-lg">
                         <a href="mailto:info@bredaautofix.nl" className="hover:text-brand-600 transition-colors">
                            info@bredaautofix.nl
                         </a>
                      </p>
                      <p className="text-sm text-slate-500 mt-1">{t.contact.reply}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Map */}
          <div className={`bg-slate-200 rounded-2xl overflow-hidden h-[400px] lg:h-auto shadow-inner relative group transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             {/* Embed Google Maps */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.575235882582!2d4.773489315975308!3d51.58869767964893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c69f8892790d5f%3A0xc6443c683837920!2sGrote%20Markt%201%2C%204811%20XM%20Breda!5e0!3m2!1sen!2snl!4v1620000000000!5m2!1sen!2snl" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
             ></iframe>
             
             {/* Map Overlay for Style */}
             <div className="absolute inset-0 pointer-events-none border-4 border-slate-100/50 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;