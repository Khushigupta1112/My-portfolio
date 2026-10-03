import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ profile }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 font-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-display font-bold text-sm">KHUSHI GUPTA</span>
              <p className="text-[11px] text-slate-500">DevOps & Cloud Infrastructure Portfolio v2.0</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#simulator" className="hover:text-cyan-400 transition-colors">Simulator</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Khushigupta1112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/khushigupta1112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:khushiguptafd@gmail.com"
              className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Khushi Gupta. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Node.js & AWS DevOps Principles</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
