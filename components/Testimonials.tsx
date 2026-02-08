import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Resize listener to determine how many items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index remains valid on resize
  useEffect(() => {
    const maxIndex = Math.max(0, t.testimonials.reviews.length - itemsPerPage);
    if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, t.testimonials.reviews.length, currentIndex]);

  // Intersection Observer for animation on scroll
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

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage, isPaused]);

  const totalSlides = t.testimonials.reviews.length;
  const maxIndex = Math.max(0, totalSlides - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-slate-900 text-white relative">
        {/* Abstract Background Shapes - contained in overflow-hidden div so buttons can pop out of section if needed */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-full mb-4 border border-slate-700">
              <MessageSquare className="w-6 h-6 text-brand-400" />
          </div>
          <h2 className="text-base text-brand-400 font-semibold tracking-wide uppercase">{t.testimonials.header}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {t.testimonials.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto font-light">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            
            {/* Nav Buttons - Responsive Positioning */}
            {/* Mobile: Anchored to edges. Desktop: Pulled outside content */}
            <button 
                onClick={handlePrev}
                className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/90 border border-slate-600 shadow-xl text-slate-200 hover:text-brand-400 hover:bg-slate-700 hover:scale-110 transition-all focus:outline-none backdrop-blur-sm -ml-2 lg:ml-0"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                onClick={handleNext}
                className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/90 border border-slate-600 shadow-xl text-slate-200 hover:text-brand-400 hover:bg-slate-700 hover:scale-110 transition-all focus:outline-none backdrop-blur-sm -mr-2 lg:mr-0"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Track */}
            <div className="overflow-hidden px-1 -mx-1 py-8 -my-8"> 
                <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {t.testimonials.reviews.map((review, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 px-4"
                            style={{ width: `${100 / itemsPerPage}%` }}
                        >
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm h-full flex flex-col relative group hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-2 transition-all duration-300">
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700 group-hover:text-slate-600 transition-colors" />
                                
                                <div className="flex space-x-1 mb-6">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-lg sm:text-xl text-slate-300 italic mb-8 flex-grow leading-relaxed font-light">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-700 flex items-center">
                                    <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-md">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base">{review.name}</h4>
                                        <p className="text-sm text-brand-400 font-medium">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.max(1, totalSlides - itemsPerPage + 1) }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                            idx === currentIndex 
                                ? 'w-8 h-2.5 bg-brand-500' 
                                : 'w-2.5 h-2.5 bg-slate-600 hover:bg-brand-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;