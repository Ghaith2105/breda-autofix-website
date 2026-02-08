import React from 'react';
import { SERVICES } from '../../constants';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedServiceId: string | null;
  onSelect: (id: string) => void;
}

const ServiceSelection: React.FC<Props> = ({ selectedServiceId, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-xl font-bold text-slate-900 mb-6">{t.booking.serviceSel.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((baseService) => {
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           const IconComponent = (Icons as any)[baseService.icon] || Icons.Wrench;
           const isSelected = selectedServiceId === baseService.id;

           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           const translated = (t.services.items as any)[baseService.id];
           const title = translated ? translated.title : baseService.title;

           return (
            <button
              key={baseService.id}
              onClick={() => onSelect(baseService.id)}
              className={clsx(
                "flex items-center p-4 rounded-xl border-2 text-left transition-all",
                isSelected 
                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-200" 
                  : "border-slate-200 hover:border-brand-300 hover:bg-slate-50"
              )}
            >
              <div className={clsx(
                "p-3 rounded-lg mr-4",
                isSelected ? "bg-brand-500 text-white" : "bg-slate-200 text-slate-600"
              )}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">{title}</div>
                <div className="text-sm text-slate-500">{t.services.from} €{baseService.priceStart} • {baseService.durationMin} {t.services.mins}</div>
              </div>
            </button>
           );
        })}
      </div>
    </div>
  );
};

export default ServiceSelection;