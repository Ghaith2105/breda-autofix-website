import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingSystem from './components/Booking/BookingSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [preSelectedService, setPreSelectedService] = useState<{id: string, ts: number} | null>(null);

  const handleBookService = (id: string) => {
    setPreSelectedService({ id, ts: Date.now() });
  };

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); // Ensure we start at the top
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <LanguageProvider>
      {/* Loading Screen Overlay */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Custom Cursor (Desktop Only) */}
      {!isLoading && <CustomCursor />}

      {/* 
        Scroll Trigger Sentinel 
        This is a invisible 1px div at the very top. 
        Navbar will observe this to know when to turn white.
      */}
      <div id="top-sentinel" className="absolute top-0 left-0 w-px h-px pointer-events-none z-[-1]" />

      <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-500 selection:text-white transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Services onBookService={handleBookService} />
        <Testimonials />
        <BookingSystem preSelectedService={preSelectedService} />
        <Contact />
        <Footer />
        
        <AiAssistant />
      </div>
    </LanguageProvider>
  );
};

export default App;