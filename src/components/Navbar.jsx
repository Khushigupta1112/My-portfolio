import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Server, Menu, X, Download, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ healthData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Deploy Simulator', href: '#simulator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-lg shadow-cyan-950/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-extrabold text-white tracking-tight">KHUSHI GUPTA</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                v2.0 DevOps
              </span>
            </div>
            <p className="text-xs text-slate-400 font-code flex items-center gap-1.5">
              <span>Cloud & Infrastructure</span>
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & System Health Badge */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-code text-slate-300">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>AWS Status:</span>
            <span className="text-emerald-400 font-semibold">{healthData?.status || 'HEALTHY'}</span>
          </div>

          <a
            href="mailto:khushiguptafd@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="https://github.com/Khushigupta1112" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/khushigupta1112" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:khushiguptafd@gmail.com"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20"
            >
              Contact Khushi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
