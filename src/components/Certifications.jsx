import React from 'react';
import { Award, ShieldCheck, GraduationCap, CheckCircle, Code, Star, ExternalLink } from 'lucide-react';

export default function Certifications({ certifications, education }) {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-code mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications & Academic Achievements
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Verified AWS & Oracle certifications, competitive programming accomplishments, and academic specialization in Cloud Computing.
          </p>
        </div>

        {/* Top Grid: Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications?.map((cert, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border ${cert.highlight ? 'border-cyan-500/40 bg-slate-900/90' : 'border-slate-800'} relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-code bg-slate-900 text-slate-400 border border-slate-800">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-code text-cyan-400 mb-4">
                  Issuer: {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-code">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px]">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Cards: DSA Achievements & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DSA Achievement */}
          <div className="glass-card rounded-3xl p-8 border border-slate-800 relative overflow-hidden flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-code text-cyan-400 mb-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Problem Solving Achievement</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Solved 250+ DSA Problems
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Demonstrated algorithmic efficiency, data structure optimization, and complex problem solving across arrays, strings, trees, and graph algorithms.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-code">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Arrays & Strings</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Binary Trees & BST</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Graphs & BFS/DFS</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="glass-card rounded-3xl p-8 border border-slate-800 relative overflow-hidden flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-code text-blue-400 mb-2">
                <span>Degree & Academic Honors</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                B.Tech in CSE (Cloud Computing)
              </h3>
              <p className="text-cyan-400 text-sm font-semibold mb-2">
                IILM University, Greater Noida
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-code text-slate-300">
                <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
                  {education?.period || '2023 – 2027 (Expected)'}
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold">
                  CGPA: {education?.cgpa || '7.9 / 10'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
