import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
    >
      <div className="space-y-4">
        {/* Category & Status Row */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] font-medium">
            {project.categoryLabel}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{project.statusBadge}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs font-mono text-cyan-300/80 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Top 2 Key Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
          {project.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
              <span className="text-cyan-400 font-mono font-bold">›</span>
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Tech tags and Action button */}
      <div className="mt-5 pt-4 border-t border-slate-800/60 space-y-3">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSelect(project)}
          className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-mono font-medium transition-all"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Архитектурный разбор</span>
        </button>
      </div>
    </div>
  );
};
