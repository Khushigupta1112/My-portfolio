import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory contact message store
const contactMessages = [];

// Portfolio Data API
const portfolioData = {
  profile: {
    name: "Khushi Gupta",
    role: "DevOps Engineer (Fresher)",
    tagline: "Specializing in AWS, Docker, Kubernetes, CI/CD, & Infrastructure Automation",
    location: "Greater Noida, Uttar Pradesh",
    email: "khushiguptafd@gmail.com",
    phone: "+91 85271 06672",
    linkedin: "https://linkedin.com/in/khushigupta1112",
    github: "https://github.com/Khushigupta1112",
    summary: "Final-year B.Tech CSE student with hands-on experience in AWS, Docker, Kubernetes, GitHub Actions, and CI/CD through cloud and DevOps projects. Familiar with EC2, S3, IAM, VPC, CloudWatch, Linux, containerized deployments, monitoring, and troubleshooting. Seeking a DevOps Engineer role to contribute to cloud infrastructure and deployment operations while growing in AWS and DevOps."
  },
  stats: [
    { label: "DSA Problems Solved", value: "250+", subtext: "Arrays, Trees, Graphs" },
    { label: "AWS & Cloud Certs", value: "5", subtext: "Practitioner & Academy" },
    { label: "DevOps Projects", value: "2", subtext: "Production Ready Pipelines" },
    { label: "Internships", value: "2", subtext: "Automation & UI/UX" }
  ],
  skills: {
    cloud: ["AWS (EC2, S3, IAM, VPC, CloudWatch, SNS)", "AWS ECR", "Cloud Architecture"],
    containers: ["Docker", "Docker Compose", "Kubernetes", "Container Security"],
    cicd: ["GitHub Actions", "CI/CD Pipelines", "Git & GitHub", "Blue-Green & Canary Deployments", "Terraform (IaC)"],
    monitoring: ["CloudWatch Monitoring", "Health Probes", "Custom Dashboards", "Automated Rollback"],
    programming: ["JavaScript (Node.js)", "Linux Fundamentals & Shell", "SQL", "REST APIs"],
    professional: ["Written & Verbal Communication", "Team Leadership", "Technical Documentation", "Analytical Problem-Solving"]
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
        "Built a Chart.js dashboard to monitor traffic split and service health across active deployment versions."
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

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    uptimeSeconds: process.uptime(),
    timestamp: new Date().toISOString(),
    services: {
      api: 'ONLINE',
      database: 'CONNECTED',
      cluster: 'us-east-1a (Active)',
      deploymentModel: 'Canary (90% / 10%)'
    }
  });
});

app.get('/api/data', (req, res) => {
  res.json(portfolioData);
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Email, Message).'
    });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    receivedAt: new Date().toISOString()
  };

  contactMessages.push(newMessage);
  console.log('📩 New Portfolio Contact Message:', newMessage);

  res.status(200).json({
    success: true,
    message: 'Thank you for your message! Khushi will get back to you soon.'
  });
});

// Serve frontend build in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Express Server running on port ${PORT}`);
});
