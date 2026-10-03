import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import DeploySimulator from './components/DeploySimulator.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [healthData, setHealthData] = useState({ status: 'HEALTHY' });
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fallback initial state matching latest resume details
  const defaultData = {
    profile: {
      name: "Khushi Gupta",
      role: "DevOps Engineer (Fresher)",
      tagline: "AWS, Docker, Kubernetes, CI/CD & Cloud Infrastructure Automation",
      location: "Greater Noida, Uttar Pradesh",
      email: "khushiguptafd@gmail.com",
      phone: "+91 85271 06672",
      linkedin: "https://linkedin.com/in/khushigupta1112",
      github: "https://github.com/Khushigupta1112",
      summary: "Final-year B.Tech CSE student with hands-on experience in AWS, Docker, Kubernetes, GitHub Actions, and CI/CD through cloud and DevOps projects. Seeking a DevOps Engineer role to contribute to cloud infrastructure and deployment operations."
    },
    stats: [
      { label: "DSA Problems Solved", value: "250+", subtext: "Arrays, Trees, Graphs" },
      { label: "AWS & Cloud Certs", value: "5", subtext: "Practitioner & Academy" },
      { label: "DevOps Projects", value: "2", subtext: "Production Ready Pipelines" },
      { label: "Internships", value: "2", subtext: "SystemaOps & Pixirain" }
    ],
    skills: {
      cloud: ["AWS (EC2, S3, IAM, VPC, CloudWatch, SNS)", "Amazon ECR"],
      containers: ["Docker", "Docker Compose", "Kubernetes"],
      cicd: ["GitHub Actions", "CI/CD Pipelines", "Git", "Blue-Green & Canary Deployments"],
      monitoring: ["CloudWatch", "Health Probes", "Dashboards", "Automated Rollback"],
      programming: ["JavaScript (Node.js)", "Linux", "SQL", "REST APIs"],
      professional: ["Written & Verbal Communication", "Team Leadership", "Documentation", "Analytical Problem-Solving"]
    },
    certifications: [
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2026",
        badge: "AWS Certified",
        highlight: true
      },
      {
        title: "AWS Academy: Cloud Architecting",
        issuer: "AWS Academy",
        year: "2025",
        badge: "Cloud Architect",
        highlight: false
      },
      {
        title: "AWS Academy: Cloud GenAI",
        issuer: "AWS Academy",
        year: "2026",
        badge: "GenAI",
        highlight: false
      },
      {
        title: "AWS Academy: Cloud Foundations",
        issuer: "AWS Academy",
        year: "2025",
        badge: "Foundations",
        highlight: false
      },
      {
        title: "Data Platform 2025 Certified Foundations Associate",
        issuer: "Oracle",
        year: "2026",
        badge: "Oracle Certified",
        highlight: true
      }
    ],
    projects: [
      {
        id: "blue-green-canary",
        title: "Blue-Green & Canary Deployment System",
        date: "Apr 2026",
        github: "https://github.com/Khushigupta1112/Blue-green-Deployment-model",
        tech: ["Docker", "Kubernetes", "GitHub Actions", "Node.js", "Chart.js"],
        highlights: [
          "Built a containerized Blue-Green and Canary deployment system with independent Node.js services and configurable traffic routing to simulate zero-downtime releases.",
          "Implemented health checks, automated rollback, and failure testing by simulating container failures, application errors, and latency.",
          "Created a GitHub Actions CI/CD pipeline to build and publish Docker images on code changes and packaged deployments using Docker Compose and Kubernetes manifests.",
          "Built a Chart.js dashboard to monitor traffic split and service health across versions."
        ]
      },
      {
        id: "aws-pipeline",
        title: "Automated AWS Deployment Pipeline",
        date: "2026",
        github: "https://github.com/Khushigupta1112/AWS-Deployment-Pipeline",
        tech: ["AWS (EC2, VPC, IAM, ECR, S3, CloudWatch, SNS)", "Docker", "GitHub Actions", "Terraform", "Linux"],
        highlights: [
          "Built and containerized a Node.js application and deployed it on AWS EC2 within a custom VPC using IAM roles, security groups, and Amazon ECR.",
          "Automated CI/CD with GitHub Actions to test, build, tag, and publish Docker images to ECR, deploy releases to EC2, and validate deployments using automated health checks.",
          "Implemented S3 deployment logging, CloudWatch monitoring, SNS email alerts, and health-based rollback to improve deployment reliability and operational visibility."
        ]
      }
    ],
    experience: [
      {
        role: "Automation & Technical Projects Intern",
        company: "SystemaOps",
        location: "Remote",
        period: "Aug 2026 – Present",
        points: [
          "Researched and developed automation workflows to streamline technical and operational processes.",
          "Contributed to the design of an AI compliance orchestration platform aligned with EU AI Act requirements.",
          "Evaluated tools and open-source technologies for integrating compliance checks, documentation, and workflow automation."
        ]
      },
      {
        role: "UI/UX Design Intern",
        company: "PIXIRAIN Design",
        location: "Remote",
        period: "Jan 2026 – Mar 2026",
        points: [
          "Designed wireframes and high-fidelity prototypes in Figma for web and mobile flows, reworking them after usability testing with target users.",
          "Partnered with developers through handoff – spacing, component states, and responsive breakpoints – and reviewed built screens for accessibility and consistency."
        ]
      }
    ],
    education: {
      degree: "B.Tech, Computer Science & Engineering (Cloud Computing)",
      institution: "IILM University, Greater Noida",
      period: "2023 – 2027 (Expected)",
      cgpa: "7.9 / 10"
    }
  };

  useEffect(() => {
    // Fetch data from Node.js Express API
    const fetchData = async () => {
      try {
        const [healthRes, dataRes] = await Promise.all([
          fetch('/api/health').catch(() => null),
          fetch('/api/data').catch(() => null)
        ]);

        if (healthRes && healthRes.ok) {
          const hJson = await healthRes.json();
          setHealthData(hJson);
        }

        if (dataRes && dataRes.ok) {
          const dJson = await dataRes.json();
          setPortfolioData(dJson);
        } else {
          setPortfolioData(defaultData);
        }
      } catch (err) {
        console.log('Using default portfolio data:', err);
        setPortfolioData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = portfolioData || defaultData;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar healthData={healthData} />
      <main>
        <Hero profile={data.profile} stats={data.stats} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Certifications certifications={data.certifications} education={data.education} />
        <DeploySimulator />
        <ContactForm />
      </main>
      <Footer profile={data.profile} />
    </div>
  );
}
