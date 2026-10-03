import React from 'react';
import { ShieldCheck, Cloud, Container, GitBranch, ArrowRight, Github, Linkedin, Mail, MapPin, Award, CheckCircle2, Code2 } from 'lucide-react';

export default function Hero({ profile, stats }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-code text-cyan-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-slate-300">Seeking DevOps Engineer Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400">AWS & Kubernetes</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Khushi Gupta</span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-300 font-code flex items-center gap-2 flex-wrap">
                <span>DevOps Engineer</span>
                <span className="text-cyan-500">•</span>
                <span className="text-slate-400 text-lg">Cloud Infrastructure & CI/CD</span>
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              Final-year B.Tech CSE student (Cloud Computing) with hands-on expertise in AWS, Docker, Kubernetes, Terraform, and automated GitHub Actions CI/CD pipelines. Experienced in zero-downtime Blue-Green & Canary deployment strategies, container security, and CloudWatch monitoring.
            </p>

            {/* Location & Quick Contact */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-code text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Greater Noida, UP, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href="mailto:khushiguptafd@gmail.com" className="hover:text-cyan-300">khushiguptafd@gmail.com</a>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <span>Explore DevOps Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Khushigupta1112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-card text-slate-200 hover:text-cyan-400 text-sm font-medium border border-slate-700/80"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/khushigupta1112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-card text-slate-200 hover:text-cyan-400 text-sm font-medium border border-slate-700/80"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Tech Badges Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 flex-wrap">
              <span className="text-xs font-code text-slate-500">CORE TECH:</span>
              {['AWS EC2/S3/VPC', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Node.js', 'Linux'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-code">
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* Right Visual Card / Profile Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative border backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-lg opacity-40 animate-pulse"></div>

              <div className="relative glass-panel rounded-3xl p-6 border border-slate-700/80 shadow-2xl">
                
                {/* Header Terminal Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-code text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    AWS Certified Cloud Practitioner
                  </span>
                </div>

                {/* Photo & Badge Wrapper */}
                <div className="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 flex justify-center items-center">
                  <img
                    src="/image/mypicbg.png"
                    alt="Khushi Gupta"
                    className="w-full h-80 object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.onerror = null;
                      e.target.src = "/image/logomy.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-code text-slate-200">
                    <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                      <Cloud className="w-4 h-4 text-cyan-400" />
                      <span>B.Tech CSE (Cloud)</span>
                    </div>
                    <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>CGPA: 7.9/10</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-display text-cyan-400">250+</div>
                    <div className="text-[11px] text-slate-400 font-code">DSA Problems Solved</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-display text-blue-400">5 Certs</div>
                    <div className="text-[11px] text-slate-400 font-code">AWS & Oracle</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-display text-indigo-400">2 Projects</div>
                    <div className="text-[11px] text-slate-400 font-code">Cloud & CI/CD</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl font-bold font-display text-emerald-400">2 Internships</div>
                    <div className="text-[11px] text-slate-400 font-code">SystemaOps & Pixirain</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
