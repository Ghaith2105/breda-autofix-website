import React, { useState, useEffect } from 'react';
import { Step, BookingState } from '../../types';
import ServiceSelection from './ServiceSelection';
import CalendarSelection from './CalendarSelection';
import ContactForm from './ContactForm';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  preSelectedService?: { id: string; ts: number } | null;
}

const BookingSystem: React.FC<Props> = ({ preSelectedService }) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>(Step.SERVICE);
  const [bookingData, setBookingData] = useState<BookingState>({
    serviceId: null,
    date: null,
    timeSlot: null,
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Watch for external service selection (e.g. from "Book Now" buttons)
  useEffect(() => {
    if (preSelectedService) {
      setBookingData(prev => ({ ...prev, serviceId: preSelectedService.id }));
      // Ensure we are on the service selection step to see the selection, 
      // or we could auto-advance. For now, just select it.
      if (step > Step.SERVICE) {
          // If we were on a later step, we might want to stay there but update service? 
          // Usually if clicking "Book This Service", user expects to start booking flow for THAT service.
          // Let's reset to first step to be safe and clear.
          setStep(Step.SERVICE);
      }
    }
  }, [preSelectedService]);

  const handleNext = () => {
    if (step === Step.SERVICE && !bookingData.serviceId) return;
    if (step === Step.DATE && (!bookingData.date || !bookingData.timeSlot)) return;
    if (step === Step.DETAILS && (!bookingData.name || !bookingData.email || !bookingData.phone)) return;
    
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const updateField = (field: keyof BookingState, value: any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateField(e.target.name as keyof BookingState, e.target.value);
  };

  if (step === Step.CONFIRMATION) {
     return (
        <div className="max-w-3xl mx-auto py-24 px-4 text-center animate-slideUpFade">
           <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
              <CheckCircle className="h-12 w-12 text-green-600" />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.booking.success.title}</h2>
           <p className="text-xl text-slate-600 mb-8">
              {t.booking.success.msg1} {bookingData.name}. {t.booking.success.msg2} {bookingData.date?.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB')} {t.booking.success.at} {bookingData.timeSlot}.
           </p>
           <p className="text-slate-500 mb-8">
              {t.booking.success.emailSent} {bookingData.email}.
           </p>
           <button 
             onClick={() => {
                setStep(Step.SERVICE);
                setBookingData({ serviceId: null, date: null, timeSlot: null, name: '', email: '', phone: '', notes: '' });
             }}
             className="px-8 py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors"
           >
              {t.booking.actions.bookAnother}
           </button>
        </div>
     )
  }

  return (
    <section id="booking" className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Header */}
          <div className="bg-slate-900 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">{t.booking.header}</h2>
            <p className="text-slate-400">{t.booking.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-8 py-4">
            <div className="flex items-center justify-between">
               {[Step.SERVICE, Step.DATE, Step.DETAILS].map((s) => {
                  const isActive = step === s;
                  const isCompleted = step > s;
                  const labels = [t.booking.steps.service, t.booking.steps.date, t.booking.steps.details];
                  
                  return (
                     <div key={s} className="flex items-center gap-2">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all duration-500 ease-out ${
                           isActive ? 'bg-brand-600 text-white scale-110 shadow-lg' : 
                           isCompleted ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'
                        }`}>
                           {isCompleted ? <CheckCircle className="w-5 h-5 animate-slideUpFade" /> : s + 1}
                        </div>
                        <span className={`text-sm font-medium hidden sm:inline transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                           {labels[s]}
                        </span>
                     </div>
                  )
               })}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 min-h-[400px]">
            <div key={step} className="animate-slideUpFade">
                {step === Step.SERVICE && (
                <ServiceSelection 
                    selectedServiceId={bookingData.serviceId} 
                    onSelect={(id) => updateField('serviceId', id)} 
                />
                )}
                
                {step === Step.DATE && (
                <CalendarSelection
                    selectedDate={bookingData.date}
                    selectedTime={bookingData.timeSlot}
                    onDateSelect={(d) => updateField('date', d)}
                    onTimeSelect={(t) => updateField('timeSlot', t)}
                />
                )}

                {step === Step.DETAILS && (
                <ContactForm 
                    formData={bookingData}
                    onChange={handleContactChange}
                />
                )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 border-t border-slate-200 px-8 py-6 flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === Step.SERVICE}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                step === Step.SERVICE 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.booking.actions.back}
            </button>

            <button
              onClick={handleNext}
              disabled={
                (step === Step.SERVICE && !bookingData.serviceId) ||
                (step === Step.DATE && (!bookingData.date || !bookingData.timeSlot)) ||
                (step === Step.DETAILS && (!bookingData.name || !bookingData.email))
              }
              className={`flex items-center px-8 py-3 rounded-lg font-bold text-white transition-all ${
                 (step === Step.SERVICE && !bookingData.serviceId) ||
                 (step === Step.DATE && (!bookingData.date || !bookingData.timeSlot)) ||
                 (step === Step.DETAILS && (!bookingData.name || !bookingData.email))
                 ? 'bg-slate-300 cursor-not-allowed'
                 : 'bg-brand-600 hover:bg-brand-700 hover:scale-105 shadow-lg'
              }`}
            >
              {step === Step.DETAILS ? t.booking.actions.confirm : t.booking.actions.next}
              {step !== Step.DETAILS && <ArrowRight className="w-5 h-5 ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;