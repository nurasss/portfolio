import React from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  Cpu, 
  Database, 
  Workflow, 
  GraduationCap, 
  Languages 
} from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export const SkillsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-amber-400" />;
      default: return <Terminal className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>ТЕХНИЧЕСКИЙ СТЕК И КОМПЕТЕНЦИИ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ключевые компетенции
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Стек инструментов, проверенный в реальных B2B, FinTech и GovTech проектах полного цикла.
          </p>
        </div>

        {/* 6 Category Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium'
                          : 'bg-slate-950/70 text-slate-300 border border-slate-800/80'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Languages Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Образование
              </span>
              <h4 className="text-base font-bold text-white">
                {PERSONAL_INFO.education.institution}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {PERSONAL_INFO.education.degree}
              </p>
              <p className="text-xs font-mono text-slate-400 pt-1">
                {PERSONAL_INFO.education.graduation}
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
              <Languages className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Языки
              </span>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {PERSONAL_INFO.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-bold text-white">{lang.name}</div>
                    <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
