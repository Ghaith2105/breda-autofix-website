import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Breda<span className="text-brand-500">AutoFix</span></h3>
            <p className="mb-6 leading-relaxed font-light">
              {t.footer.about}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.contactHeader}</h4>
            <ul className="space-y-4 font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-500 mr-3 mt-1" />
                <span>
                  Grote Markt 1,<br />
                  4811 XM Breda,<br />
                  The Netherlands
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-500 mr-3" />
                <span>+31 (0) 76 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-500 mr-3" />
                <span>info@bredaautofix.nl</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.hoursHeader}</h4>
            <ul className="space-y-2 font-light">
              <li className="flex justify-between">
                <span>{t.footer.days.monfri}</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.days.sat}</span>
                <span className="text-white">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.days.sun}</span>
                <span className="text-brand-500">{t.footer.closed}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.navHeader}</h4>
            <ul className="space-y-2 font-light">
              <li>
                  <a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-white transition-colors">
                      {t.nav.home}
                  </a>
              </li>
              <li>
                  <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-white transition-colors">
                      {t.nav.services}
                  </a>
              </li>
              <li>
                  <a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="hover:text-white transition-colors">
                      {t.testimonials.header}
                  </a>
              </li>
              <li>
                  <a href="#booking" onClick={(e) => handleScroll(e, '#booking')} className="hover:text-white transition-colors">
                      {t.nav.bookAppt}
                  </a>
              </li>
              <li>
                  <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-white transition-colors">
                      {t.nav.contact}
                  </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;