import React, { useMemo } from 'react';
import { MOCK_TIME_SLOTS } from '../../constants';
import { clsx } from 'clsx';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

const CalendarSelection: React.FC<Props> = ({ selectedDate, selectedTime, onDateSelect, onTimeSelect }) => {
  const { t, language } = useLanguage();
  
  // Generate next 14 days
  const dates = useMemo(() => {
    const tempDates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays (0)
      if (d.getDay() !== 0) {
        tempDates.push(d);
      }
    }
    return tempDates;
  }, []);

  const formatDateWeekday = (date: Date) => {
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB', { weekday: 'short' });
  };
  
  const formatDateMonth = (date: Date) => {
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB', { month: 'short' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Date Scroller */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{t.booking.calendar.selectDate}</h3>
        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-thin">
          {dates.map((date) => {
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            return (
              <button
                key={date.toISOString()}
                onClick={() => onDateSelect(date)}
                className={clsx(
                  "flex-shrink-0 w-24 p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center",
                  isSelected
                    ? "border-brand-500 bg-brand-500 text-white shadow-md"
                    : "border-slate-200 hover:border-brand-300 text-slate-600 hover:bg-slate-50"
                )}
              >
                <span className={clsx("text-xs font-medium uppercase mb-1", isSelected ? "text-brand-100" : "text-slate-400")}>
                  {formatDateWeekday(date)}
                </span>
                <span className="text-xl font-bold">
                  {date.getDate()}
                </span>
                <span className="text-xs">
                  {formatDateMonth(date)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Grid (Only show if date selected) */}
      <div className={clsx("transition-opacity duration-300", selectedDate ? "opacity-100" : "opacity-30 pointer-events-none")}>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{t.booking.calendar.availTimes}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {MOCK_TIME_SLOTS.map((time) => {
            const isSelected = selectedTime === time;
            // Mock randomness for unavailable slots
            const isTaken = selectedDate && (selectedDate.getDate() + parseInt(time)) % 5 === 0;

            if (isTaken) {
               return (
                  <div key={time} className="p-3 rounded-lg border border-slate-100 bg-slate-50 text-slate-300 text-center cursor-not-allowed text-sm decoration-slate-400">
                     {time}
                  </div>
               )
            }

            return (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={clsx(
                  "p-3 rounded-lg border text-sm font-semibold transition-all",
                  isSelected
                    ? "border-brand-500 bg-brand-500 text-white shadow-md transform scale-105"
                    : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50"
                )}
              >
                {time}
              </button>
            );
          })}
        </div>
        {!selectedDate && <p className="text-sm text-red-500 mt-2">{t.booking.calendar.selectDateFirst}</p>}
      </div>
    </div>
  );
};

export default CalendarSelection;