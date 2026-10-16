import React, { useState } from 'react';
import { Cpu, Workflow, CheckCircle, Code2 } from 'lucide-react';
import { ARCHITECTURE_CASE_STUDIES } from '../data/portfolioData';

export const ArchitectureDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = ARCHITECTURE_CASE_STUDIES[activeTab];

  return (
    <section id="architecture" className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>СИСТЕМНЫЙ ДИЗАЙН И АРХИТЕКТУРА</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Инженерные разборы и паттерны
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            Как решаются критические задачи надежности: предотвращение двойных списаний, оркестрация распределенных AI-агентов по протоколу MCP и обмен с 1С без просадки производительности касс.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {ARCHITECTURE_CASE_STUDIES.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-[11px] font-mono text-cyan-400 mb-1">{item.category}</div>
                <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Details */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="space-y-6">
            
            {/* Header info */}
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {currentCase.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {currentCase.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                {currentCase.summary}
              </p>
            </div>

            {/* Workflow steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Пошаговый конвейер выполнения (Step-by-step Execution):</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCase.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-start space-x-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code / Architecture Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Архитектурный пример реализации:</span>
                </span>
                <span className="text-cyan-400/80">clean architecture</span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-200 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                <code>{currentCase.codePreview}</code>
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
