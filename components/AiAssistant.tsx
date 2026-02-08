import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { getAiRecommendation } from '../services/geminiService';
import { useLanguage } from '../context/LanguageContext';

const MAX_CHARS = 500;

const AiAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reset messages when language changes to show correct welcome message
  useEffect(() => {
     setMessages([{ role: 'bot', text: t.ai.intro }]);
  }, [t.ai.intro]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to correctly calculate scrollHeight for shrinking
      textareaRef.current.style.height = 'auto';
      // Set new height capped at 120px
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    // Reset height immediately
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
    }

    const reply = await getAiRecommendation(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] sm:w-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-10 flex flex-col h-[600px] max-h-[80vh]">
          <div className="bg-brand-600 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
               <Sparkles className="w-6 h-6 text-yellow-300" />
               <h3 className="font-bold text-lg">{t.ai.title}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700 p-2 rounded transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 p-5 overflow-y-auto space-y-6 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-xl text-base leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-white p-4 rounded-xl rounded-bl-none border border-slate-200 shadow-sm">
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce"></div>
                       <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                       <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{t.ai.loading}</span>
                 </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2 items-end">
              <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.ai.placeholder}
                    maxLength={MAX_CHARS}
                    rows={1}
                    className="w-full border-slate-300 rounded-2xl px-4 py-3 text-base focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none bg-white text-slate-900 shadow-sm resize-none overflow-hidden min-h-[48px] max-h-[120px]"
                  />
                  <div className={`text-[10px] text-right px-2 mt-1 font-medium transition-colors ${input.length > MAX_CHARS * 0.9 ? 'text-red-500' : 'text-slate-400'}`}>
                    {input.length}/{MAX_CHARS}
                  </div>
              </div>
              
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-brand-600 text-white p-3 rounded-full hover:bg-brand-700 disabled:opacity-50 transition-colors shadow-sm hover:shadow-md mb-6 shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 bg-brand-600 text-white rounded-full shadow-xl hover:scale-105 hover:bg-brand-700 transition-all flex items-center justify-center relative group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        {!isOpen && (
            <span className="absolute top-0 right-0 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            </span>
        )}
      </button>
    </div>
  );
};

export default AiAssistant;