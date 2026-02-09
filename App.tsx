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
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <LanguageProvider>
      {/* 1. Loading Screen (Highest Layer) */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* 2. Cursor (Desktop Only) */}
      {!isLoading && <CustomCursor />}

      {/* 3. Scroll Sentinel (Always Present at Top) */}
      <div id="top-sentinel" className="absolute top-0 left-0 w-px h-px pointer-events-none z-[-1]" />

      {/* 
        4. Navbar - Decoupled from the main content fade.
        It appears immediately when isLoading is false.
      */}
      {!isLoading && <Navbar />}

      {/* 5. Main Content Wrapper - Handles its own slow fade-in */}
      <div className={`min-h-screen bg-white font-sans text-slate-900 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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