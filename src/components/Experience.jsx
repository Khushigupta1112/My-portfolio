import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-code mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Hands-on professional experience in technical process automation, AI compliance platforms, and UI/UX developer handoffs.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800">
          
          {experience?.map((exp, idx) => (
            <div key={idx} className="relative flex items-start group">
              
              {/* Timeline Dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-md shadow-cyan-500/50 group-hover:scale-125 transition-transform z-10"></div>

              {/* Card */}
              <div className={`w-full ml-12 sm:ml-0 ${idx % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'} sm:w-1/2`}>
                <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all text-left">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-code text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold text-sm mb-4 flex items-center gap-1">
                    <span>{exp.company}</span>
                  </p>

                  <ul className="space-y-2.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
