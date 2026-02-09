import React, { useEffect, useState } from 'react';
import { Car, Wrench } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const LoadingScreen: React.FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'repair' | 'exit'>('enter');
  const [showWrench, setShowWrench] = useState(false);

  useEffect(() => {
    // Sped up timeline for better UX
    // 0ms: Car drives in
    // 800ms: Repair starts
    // 1800ms: Repair ends, car drives out
    // 2500ms: Screen disappears

    const timer1 = setTimeout(() => {
        setPhase('repair');
        setShowWrench(true);
    }, 800);

    const timer2 = setTimeout(() => {
        setShowWrench(false);
        setPhase('exit');
    }, 1800);

    const timer3 = setTimeout(() => {
        onComplete();
    }, 2500);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Car Icon with animations based on phase */}
        <div className={`
            relative z-10 text-brand-500
            ${phase === 'enter' ? 'animate-drive-in' : ''}
            ${phase === 'exit' ? 'animate-drive-out' : ''}
        `}>
          <Car className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1.5} />
          
          <div className={`
            absolute -top-4 -right-4 text-accent-500 z-20
            transition-opacity duration-300
            ${showWrench ? 'opacity-100' : 'opacity-0'}
          `}>
            <Wrench className={`w-16 h-16 md:w-20 md:h-20 ${showWrench ? 'animate-repair-spin' : ''}`} strokeWidth={2} />
          </div>
        </div>
        
        <div className={`
            mt-4 h-2 bg-slate-800 rounded-full blur-sm mx-auto transition-all duration-500
            ${phase === 'enter' ? 'w-full animate-[fadeIn_0.5s_ease-out]' : ''}
            ${phase === 'repair' ? 'w-32 md:w-48 bg-brand-900/50' : ''}
            ${phase === 'exit' ? 'w-full opacity-0 translate-x-full duration-700' : ''}
        `}></div>
      </div>

      <div className={`
        mt-12 text-center transition-all duration-700
        ${phase === 'enter' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        ${phase === 'exit' ? 'opacity-0 scale-90' : ''}
      `}>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
            BREDA<span className="text-accent-500">AUTOFIX</span>
          </h1>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-300"></div>
          </div>
      </div>
    </div>
  );
};

export default LoadingScreen;