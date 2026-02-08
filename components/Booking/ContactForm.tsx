import React from 'react';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  formData: BookingState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactForm: React.FC<Props> = ({ formData, onChange }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-xl font-bold text-slate-900">{t.booking.form.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.booking.form.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white text-slate-900"
            placeholder={t.booking.form.placeholderName}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.booking.form.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white text-slate-900"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{t.booking.form.phone}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white text-slate-900"
            placeholder="+31 6 12345678"
            required
          />
        </div>

        <div className="md:col-span-2">
           <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">{t.booking.form.notes}</label>
           <textarea
             id="notes"
             name="notes"
             value={formData.notes}
             onChange={onChange}
             rows={3}
             className="w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 border bg-white text-slate-900"
             placeholder={t.booking.form.placeholderNotes}
           />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;