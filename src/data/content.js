/**
 * ==============================================================================
 * PORTFOLIO CONTENT & CONFIGURATION
 * ==============================================================================
 * All editable text, projects, skills, achievements, and social links are centralized here.
 * You can easily update your details, add new projects, or swap links without touching components.
 */

export const personalData = {
  name: "Agaja",
  avatar: "./agaja-profile.jpg",
  role: "First-year B.Tech student, Computer Science & Engineering (AI)",
  college: "Thejus Engineering College, Thrissur, Kerala, India",
  tagline: "Aspiring AI Engineer & Full Stack Developer",
  status: "Available for internships & open-source collaborations",
  location: "Thrissur, Kerala, India",
  email: "agaja.dev@example.com", // [EDITABLE PLACEHOLDER] Replace with your actual email
  resumeUrl: "#", // [EDITABLE PLACEHOLDER] Replace with your Google Drive / PDF link
  bio: [
    "I am a passionate first-year B.Tech Computer Science student specializing in Artificial Intelligence at Thejus Engineering College in Thrissur, Kerala.",
    "Driven by curiosity at the intersection of deep learning, modern web technologies, and intelligent autonomous systems, I build scalable, high-performance web applications and explore neural network architectures.",
    "When I'm not writing code or experimenting with AI models, I enjoy solving algorithmic challenges, exploring open-source repositories, and designing futuristic user interfaces."
  ],
  typewriterWords: [
    "AI & ML Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
    "Future Tech Explorer"
  ]
};

export const statsData = [
  {
    id: 1,
    value: 12,
    suffix: "+",
    label: "Projects Completed",
    description: "AI experiments, web apps, and tools"
  },
  {
    id: 2,
    value: 15,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Languages, frameworks & libraries"
  },
  {
    id: 3,
    value: 120,
    suffix: "+",
    label: "Days Coding Streak",
    description: "Continuous learning & daily commits"
  },
  {
    id: 4,
    value: 350,
    suffix: "+",
    label: "GitHub Contributions",
    description: "Commits, PRs, and repositories"
  }
];

export const heroCodeSnippet = `// CODE_GENESIS.JS
// Agaja - AI Engineer & Full Stack Developer
import { NeuralEngine } from '@thejus/ai-core';

class FutureDeveloper {
  constructor() {
    this.name = "Agaja";
    this.institution = "Thejus Engg College, Kerala";
    this.specialization = "CSE (Artificial Intelligence)";
    this.focus = ["Deep Learning", "Full-Stack Web", "Modern UI/UX"];
  }

  async buildImpactfulSolutions() {
    const passion = Infinity;
    const learningRate = 0.01;
    return await NeuralEngine.optimize({ passion, learningRate });
  }
}

export default new FutureDeveloper();`;

export const pythonCodeSnippet = `# neural_core.py
# Deep Learning Architecture Pipeline
import torch
import torch.nn as nn

class NeuraVisionNetwork(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.SiLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.SiLU()
        )
        self.head = nn.Linear(128 * 16 * 16, num_classes)

    def forward(self, x):
        features = self.encoder(x)
        return self.head(torch.flatten(features, 1))

model = NeuraVisionNetwork()
print(f"Loaded params: {sum(p.numel() for p in model.parameters())}")`;


export const projectsData = [
  {
    id: "neura-ai",
    title: "Project Neura",
    subtitle: "AI/ML Neural Visualizer",
    category: "AI/ML",
    status: "Active Research",
    description: "An interactive deep neural network playground and real-time inference visualizer for convolutional filters, decision boundaries, and loss surfaces.",
    stats: {
      stars: 48,
      nodes: "2.4M params",
      accuracy: "98.4%"
    },
    technologies: ["Python", "PyTorch", "React", "Tailwind CSS", "Canvas API"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.4)",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/placeholder-user/project-neura", // [EDITABLE PLACEHOLDER]
    liveUrl: "https://project-neura-demo.example.com", // [EDITABLE PLACEHOLDER]
    featured: true
  },
  {
    id: "cybernet-web3",
    title: "Cybernet",
    subtitle: "Decentralized Portal",
    category: "Full Stack",
    status: "Beta v1.2",
    description: "A high-throughput decentralized dashboard offering real-time network telemetry, smart contract state monitors, and gas price predictions.",
    stats: {
      stars: 35,
      tps: "4,500 TPS",
      uptime: "99.9%"
    },
    technologies: ["React", "Node.js", "WebSockets", "Tailwind CSS", "Ethers.js"],
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    accentColor: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.4)",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/placeholder-user/cybernet-platform", // [EDITABLE PLACEHOLDER]
    liveUrl: "https://cybernet-demo.example.com", // [EDITABLE PLACEHOLDER]
    featured: true
  },
  {
    id: "quantum-ui",
    title: "Quantum UI",
    subtitle: "Glass Design System",
    category: "UI/UX",
    status: "Production Ready",
    description: "A futuristic cyber-space component library engineered with accessible contrast, fluid physics, glassmorphic sheen, and micro-interactions.",
    stats: {
      stars: 62,
      components: "45+ units",
      coverage: "100%"
    },
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    accentColor: "#d946ef",
    accentGlow: "rgba(217, 70, 239, 0.4)",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/placeholder-user/quantum-ui", // [EDITABLE PLACEHOLDER]
    liveUrl: "https://quantum-ui-demo.example.com", // [EDITABLE PLACEHOLDER]
    featured: true
  },
  {
    id: "astra-cloud",
    title: "Astra Cloud",
    subtitle: "Distributed Telemetry",
    category: "Systems",
    status: "Prototype",
    description: "Lightweight container monitoring agent delivering real-time CPU, RAM, and IOPS streaming telemetry over WebSockets with predictive spike alerts.",
    stats: {
      stars: 27,
      latency: "< 12ms",
      clusters: "12 nodes"
    },
    technologies: ["Python", "FastAPI", "React", "Chart.js", "Docker"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/placeholder-user/astra-cloud", // [EDITABLE PLACEHOLDER]
    liveUrl: "https://astra-cloud-demo.example.com", // [EDITABLE PLACEHOLDER]
    featured: true
  }
];

export const skillsData = {
  categories: [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      accent: "#22d3ee",
      description: "Neural network architectures, data processing, and predictive algorithms.",
      skills: [
        { name: "Python", level: 90, tag: "Core Language" },
        { name: "Machine Learning Basics", level: 80, tag: "Supervised & Unsupervised" },
        { name: "NumPy & Pandas", level: 85, tag: "Data Analysis" },
        { name: "PyTorch (Foundations)", level: 70, tag: "Deep Learning" },
        { name: "Computer Vision (OpenCV)", level: 65, tag: "Image Processing" },
        { name: "Scikit-Learn", level: 75, tag: "Predictive Models" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Development",
      accent: "#a855f7",
      description: "Building responsive, modern, cyber-aesthetic user interfaces.",
      skills: [
        { name: "React.js", level: 88, tag: "Component Architecture" },
        { name: "JavaScript (ES6+)", level: 90, tag: "Modern JavaScript" },
        { name: "Tailwind CSS", level: 92, tag: "Utility-First Styling" },
        { name: "HTML5 & Modern CSS3", level: 95, tag: "Semantic & Responsive" },
        { name: "Framer Motion", level: 82, tag: "Fluid Animations" },
        { name: "Canvas 2D / Three.js Basics", level: 70, tag: "Interactive Graphics" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Systems",
      accent: "#d946ef",
      description: "Server architecture, RESTful API design, and database operations.",
      skills: [
        { name: "Node.js & Express", level: 78, tag: "Runtime & Servers" },
        { name: "RESTful APIs", level: 85, tag: "Endpoint Architecture" },
        { name: "SQL & Relational Databases", level: 76, tag: "PostgreSQL / MySQL" },
        { name: "FastAPI / Python Backend", level: 72, tag: "High Performance APIs" },
        { name: "MongoDB", level: 70, tag: "Document Store" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Engineering Core",
      accent: "#3b82f6",
      description: "Development workflow, version control, and computer science foundations.",
      skills: [
        { name: "Git & GitHub", level: 88, tag: "Version Control & CI" },
        { name: "C & C++ Programming", level: 80, tag: "Systems Programming" },
        { name: "Data Structures & Algorithms", level: 78, tag: "Core CS Fundamentals" },
        { name: "Linux / Terminal CLI", level: 82, tag: "Dev Environment" },
        { name: "VS Code & Debugging", level: 92, tag: "IDE Mastery" }
      ]
    }
  ]
};

export const timelineData = [
  {
    year: "2026 - Present",
    title: "First-Year B.Tech in CSE (Artificial Intelligence)",
    organization: "Thejus Engineering College, Thrissur, Kerala",
    status: "Currently Pursuing",
    statusType: "active",
    description: "Enrolled in 4-year undergraduate degree diving deep into AI fundamentals, object-oriented programming, data structures, and discrete mathematics.",
    tags: ["Artificial Intelligence", "B.Tech CSE", "Kerala"]
  },
  {
    year: "2025 - 2026",
    title: "Self-Directed AI & Web Development Sprint",
    organization: "Independent Learning & Project Scaffolding",
    status: "Milestone Reached",
    statusType: "completed",
    description: "Built and deployed multiple responsive web applications, experimented with computer vision models, and completed certifications in Python and Web Development.",
    tags: ["React", "Python", "Full Stack", "Open Source"]
  },
  {
    year: "2024 - 2025",
    title: "Higher Secondary Education (Science & CS)",
    organization: "Kerala Board of Higher Secondary Education",
    status: "Completed with Distinction",
    statusType: "completed",
    description: "Built strong foundations in Mathematics, Physics, and Computer Science with introductory programming in C++ and Python.",
    tags: ["Computer Science", "Mathematics", "Foundations"]
  }
];

export const responsivePreviews = [
  {
    device: "Desktop Terminal",
    screen: "1920 × 1080 Full Display",
    icon: "Monitor",
    desc: "Unfolded HUD, 3D tilt perspective, dual-column IDE display and floating cards."
  },
  {
    device: "Tablet Matrix",
    screen: "1024 × 768 Adaptive Frame",
    icon: "Tablet",
    desc: "Streamlined glass grid, optimized touch targets, fluid card carousel."
  },
  {
    device: "Mobile Cyber-Node",
    screen: "390 × 844 Compact View",
    icon: "Smartphone",
    desc: "Thumb-friendly drawer navigation, stacked cards, hardware-accelerated canvas."
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/placeholder-agaja", // [EDITABLE PLACEHOLDER]
    handle: "@agaja",
    glowColor: "#22d3ee"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/placeholder-agaja", // [EDITABLE PLACEHOLDER]
    handle: "in/agaja",
    glowColor: "#3b82f6"
  },
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com/placeholder-agaja", // [EDITABLE PLACEHOLDER]
    handle: "@agaja.ai",
    glowColor: "#d946ef"
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:agaja.dev@example.com", // [EDITABLE PLACEHOLDER]
    handle: "agaja.dev@example.com",
    glowColor: "#a855f7"
  }
];

