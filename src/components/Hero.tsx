import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Database,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-30">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Tagline / Meta badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
              <span className="text-cyan-400 font-semibold">2026</span>
              <span className="text-slate-600">•</span>
              <span>Full-Stack & Distributed AI Systems</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-cyan-400 font-medium">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Profile summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Contact Pills / Quick Actions */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="ml-1 text-slate-500 hover:text-white transition-colors"
                  title="Скопировать телефон"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="ml-1 text-slate-500 hover:text-white transition-colors"
                  title="Скопировать email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <span>{PERSONAL_INFO.websiteDisplay}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                <span>Изучить проекты</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Открыть резюме (PDF)</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-cyan-400 text-sm font-mono transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>Интерактивный CLI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Metrics & Architectural Principles Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Architecture Bento Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">architecture-manifest.json</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Production Focus</span>
              </div>

              {/* Engineering Focus Points */}
              <div className="space-y-3.5 py-4 text-xs font-mono">
                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Идемпотентность & Отказоустойчивость:</span>
                    <span className="text-slate-400">Idempotency-Key в Redis/Postgres, защита от повторных списаний и дублей.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Мультиагентные системы & MCP:</span>
                    <span className="text-slate-400">LangGraph оркестрация, 7 специализированных ролей, RAG долгосрочная память.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60">
                  <Database className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Связка с 1С:Предприятие & POS:</span>
                    <span className="text-slate-400">Шлюз обмена CommerceML 2.x, V83.COMConnector, Z-отчёты и выгрузка каталогов.</span>
                  </div>
                </div>
              </div>

              {/* Education & Language bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div>
                  <span className="text-slate-300 font-semibold">{PERSONAL_INFO.education.institution}</span>
                  <span className="block text-[11px] text-slate-500">{PERSONAL_INFO.education.degree}</span>
                </div>
                <div className="text-right font-mono text-[11px] text-cyan-400">
                  KZ (Native) • RU (C1) • EN (B1)
                </div>
              </div>
            </div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
