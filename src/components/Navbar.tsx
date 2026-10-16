import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  Terminal as TerminalIcon, 
  Layers, 
  Briefcase, 
  Cpu, 
  Menu, 
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Проекты', href: '#projects', icon: Layers },
    { name: 'Архитектура', href: '#architecture', icon: Cpu },
    { name: 'Опыт работы', href: '#experience', icon: Briefcase },
    { name: 'Навыки', href: '#skills', icon: TerminalIcon },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Status */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 text-slate-100 font-mono font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 text-sm">
              NB
            </span>
            <span>nuras<span className="text-cyan-400">.space</span></span>
          </a>

          <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to Work (Full-Stack & AI)</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-xs font-mono"
            title="Открыть интерактивную консоль"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>CLI / AI</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium text-xs font-mono transition-all shadow-md shadow-cyan-500/20 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Резюме 2026</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="GitHub профиль"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            title="Написать в Telegram"
          >
            <Send className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-medium"
            title="Резюме"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Астана, Казахстан · Доступен к проектам</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-sm text-slate-300 hover:text-cyan-400"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex items-center space-x-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono"
            >
              <TerminalIcon className="w-4 h-4" />
              <span>Интерактивный Терминал</span>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
