import React from 'react';
import { Send, Mail, Phone, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 relative no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Title */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white font-mono font-bold text-lg">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white text-xs">
                NB
              </span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs font-mono text-slate-500">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social / Direct Contacts */}
          <div className="flex items-center space-x-3 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              title="Отправить email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              title="Позвонить"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              title="Telegram @nurasss"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub профиль"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 transition-colors ml-2"
              title="Наверх"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="font-mono">
            © 2026 {PERSONAL_INFO.nameEn}. Built with React 19, TypeScript, Tailwind CSS & Vite.
          </p>
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>Idempotency-First</span>
            <span>•</span>
            <span>Multi-Agent LangGraph</span>
            <span>•</span>
            <span>1C / POS Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
