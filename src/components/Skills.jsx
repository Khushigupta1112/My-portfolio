import React from 'react';
import { Cloud, Container, GitBranch, Activity, Terminal, Users, Cpu, ShieldCheck } from 'lucide-react';

export default function Skills({ skills }) {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      items: ["AWS (EC2, S3, IAM, VPC, CloudWatch, SNS)", "Amazon ECR", "Security Groups & IAM Roles", "VPC Networking"],
      color: "border-cyan-500/30 text-cyan-300"
    },
    {
      title: "Containers & Orchestration",
      icon: <Container className="w-5 h-5 text-blue-400" />,
      items: ["Docker", "Docker Compose", "Kubernetes", "Container Management", "Kubernetes Manifests"],
      color: "border-blue-500/30 text-blue-300"
    },
    {
      title: "CI/CD & Deployment",
      icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
      items: ["GitHub Actions Pipelines", "Blue-Green Deployments", "Canary Releases", "Git & GitHub", "Terraform (IaC)"],
      color: "border-indigo-500/30 text-indigo-300"
    },
    {
      title: "Monitoring & Reliability",
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      items: ["CloudWatch Logs & Metrics", "Automated Rollback", "Health Checks & Probes", "Chart.js Dashboards", "Failure Testing"],
      color: "border-emerald-500/30 text-emerald-300"
    },
    {
      title: "OS & Programming",
      icon: <Terminal className="w-5 h-5 text-amber-400" />,
      items: ["Linux Administration & Shell", "JavaScript (Node.js)", "SQL & Relational DBs", "REST API Design"],
      color: "border-amber-500/30 text-amber-300"
    },
    {
      title: "Professional & Soft Skills",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      items: ["Technical Documentation", "Analytical Problem-Solving", "Team Leadership", "Cross-Functional Collaboration"],
      color: "border-purple-500/30 text-purple-300"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-code mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            DevOps & Cloud Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Core technical competencies across cloud architecture, container orchestration, automated release pipelines, and monitoring solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 relative group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs font-code text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
