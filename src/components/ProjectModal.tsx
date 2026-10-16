import React, { useEffect } from 'react';
import { X, Cpu, CheckCircle2, Shield, Wrench } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              {project.categoryLabel}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              {project.statusBadge}
            </span>
            {project.metrics && (
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
                {project.metrics}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-cyan-400 text-sm font-mono font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </div>

        {/* Problem & Solution Engineering Breakdown */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/20 space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-mono text-red-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>ИНЖЕНЕРНЫЙ ВЫЗОВ (PROBLEM)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.architectureDetails.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 font-semibold">
              <Cpu className="w-4 h-4" />
              <span>РЕШЕНИЕ И АРХИТЕКТУРА (SOLUTION)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.architectureDetails.solution}
            </p>
          </div>
        </div>

        {/* Key Architectural Patterns */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Примененные архитектурные паттерны:</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.architectureDetails.keyPatterns.map((pat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
              >
                {pat}
              </span>
            ))}
          </div>
        </div>

        {/* Key Implementation Highlights */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ключевые результаты и техническая реализация:</span>
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-5 border-t border-slate-800 space-y-2">
          <div className="text-xs font-mono text-slate-400">Стек технологий:</div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-cyan-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
          >
            Закрыть окно
          </button>
        </div>
      </div>
    </div>
  );
};
