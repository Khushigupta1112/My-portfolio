import React from 'react';
import { GitBranch, ExternalLink, Github, Layers, Server, Activity, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-code mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Featured DevOps Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Cloud & Deployment Projects
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Production-grade deployment architectures featuring containerization, automated rollbacks, zero-downtime release strategies, and infrastructure as code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 flex flex-col justify-between relative group"
            >
              
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-code text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/60 mb-2 inline-block">
                      {project.date}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 shrink-0 transition-all hover:scale-105"
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-code text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>View Source & Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#simulator"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-code text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Sim</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
