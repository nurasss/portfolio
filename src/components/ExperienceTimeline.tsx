import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { COMMERCIAL_EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ПРАКТИЧЕСКИЙ БЭКГРАУНД</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Коммерческий опыт разработки
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Опыт создания продакшн-систем, интеграции с внешними сервисами, проектирования API и поддержки критических бизнес-процессов.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {COMMERCIAL_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all hover:bg-slate-900/90"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-mono text-cyan-400 font-medium">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Accomplishments */}
              <div className="mt-5 space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-500 mr-2">Стек:</span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
