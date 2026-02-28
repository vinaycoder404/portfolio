export const personalInfo = {
  name: "Vinay Pawar",
  title: "Full Stack Developer",
  subtitle: "6+ Years of Experience",
  email: "Pawarvinay77@gmail.com",
  phone: "+91 9167277446",
  linkedin: "https://www.linkedin.com/in/vinay-pawar-5a4ab1192",
  github: "https://github.com/",
  location: "Mumbai, India",
  about: `I'm a passionate Full Stack Developer with 6+ years of experience building scalable web applications. I specialize in JavaScript technologies — React, Next.js, and Node.js — and have deep expertise in designing automation-driven systems and integrating AI/LLM capabilities into production workflows. I've built enterprise solutions for top fintech and banking clients including Axis Bank, Angel Broking (Angel One), and IndusInd Bank at ACC, and currently drive full-stack product development at Cimpress.`,
  highlights: [
    "6+ years of full-stack JavaScript development",
    "Led AI/LLM integrations reducing manual workload by 60–70%",
    "Delivered enterprise-grade solutions for banking & fintech clients",
    "Led teams of 3–4 developers, owning end-to-end feature delivery",
    "Experience with microservices, Redis queues, and AWS (EC2, S3)",
  ],
};

export const skills = {
  proficient: [
    { name: "AI / LLM Integration", category: "AI" },
    { name: "OpenAI", category: "AI" },
    { name: "React JS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "Thunk", category: "Frontend" },
    { name: "Node JS", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "Sequelize ORM", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Mongoose", category: "Database" },
    { name: "Redis", category: "DevOps" },
    { name: "AWS EC2", category: "DevOps" },
    { name: "AWS S3", category: "DevOps" },
    { name: "PM2", category: "DevOps" },
    { name: "GIT", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Joi", category: "Tools" },
    { name: "Unit Testing", category: "Tools" },
    { name: "Cron Jobs", category: "Tools" },
  ],
  familiar: [
    { name: "AWS Lambda", category: "DevOps" },
    { name: "Next JS", category: "Frontend" },
    { name: "Microservices", category: "Backend" },
    { name: "Docker (basic)", category: "DevOps" },
  ],
  soft: ["Leadership", "Problem Solving", "Decision Making", "Team Management"],
};

// Two actual employers. ACC had multiple client engagements shown as separate entries.
export const companies = [
  {
    id: "cimpress",
    name: "Cimpress",
    duration: "June 2023 – Present",
    color: "#06b6d4",
  },
  {
    id: "acc",
    name: "ACC — Applied Cloud Computing",
    duration: "Jan 2020 – June 2023",
    color: "#8b5cf6",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Cimpress",
    companyId: "cimpress",
    project: "National Pens (pens.com)",
    duration: "June 2023 – Present",
    link: "https://www.pens.com/us/",
    description: [
      "Led development of automated ART (Artwork Review & Approval) system for customized orders, reducing Care Agent dependency by ~60–70% and improving turnaround time by ~30%.",
      "Integrated LLM-based AI refinement to transform artist comments into professional, customer-ready communication, reducing revision cycles.",
      "Owned end-to-end implementation of Wishlist feature, enhancing personalization capabilities.",
      "Implemented Redis-based queue optimization, improving processing efficiency and system reliability.",
    ],
    tech: ["React JS", "Node JS", "Redis", "LLM/AI", "AWS"],
  },
  {
    id: 2,
    role: "Node.js Developer",
    company: "ACC — Applied Cloud Computing",
    companyId: "acc",
    project: "Developer Portal Phase 2 — Axis Bank",
    duration: "June 2022 – June 2023",
    link: "https://apiportal.axisbank.com/portal/",
    description: [
      "Created Wrapper APIs in Node.js (Express) with microservice architecture and MySQL for database.",
      "Set up OnPrem server and created Logger Middleware for request logging.",
      "Implemented Security Features to make APIs secure from attackers.",
    ],
    tech: ["Node JS", "Express", "MySQL", "Microservices", "Security"],
  },
  {
    id: 3,
    role: "React Developer",
    company: "ACC — Applied Cloud Computing",
    companyId: "acc",
    project: "SmartAPI — Angel Broking (Angel One)",
    duration: "Nov 2021 – June 2022",
    link: "https://smartapi.angelbroking.com",
    description: [
      "Built a platform to expose Angel One's Trading APIs and SDKs to Fintech users for their trading initiatives.",
      "Developed interactive API documentation, code samples, and SDK integration guides.",
    ],
    tech: ["React JS", "JavaScript", "Redux", "REST APIs"],
  },
  {
    id: 4,
    role: "React Developer",
    company: "ACC — Applied Cloud Computing",
    companyId: "acc",
    project: "Developer Portal — IndusInd Bank (Open Banking)",
    duration: "Sep 2020 – Nov 2021",
    link: "https://indusqode.indusind.com",
    description: [
      "Created Frontend UI and implemented analytics Graphs using Recharts npm library.",
      "Created Responsive UI and implemented Multi-step form for API Onboarding using Redux for state management.",
    ],
    tech: ["React JS", "Redux", "Recharts", "CSS"],
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "ACC — Applied Cloud Computing",
    companyId: "acc",
    project: "Cloud Lifecycle Management (Internal Product)",
    duration: "Jun 2020 – Sep 2020",
    link: "",
    description: [
      "Created front-end UI using ReactJS and backend APIs using Node.js (Express) in microservice architecture.",
      "Application gives business owners and DevOps leads a holistic view of cloud infrastructure.",
    ],
    tech: ["React JS", "Node JS", "Express", "Microservices"],
  },
  {
    id: 6,
    role: "Full Stack Developer",
    company: "ACC — Applied Cloud Computing",
    companyId: "acc",
    project: "Ticketing Tool (Internal Product)",
    duration: "Jan 2020 – Jun 2020",
    link: "http://itsm.acc.ltd/",
    description: [
      "Implemented API body validation using Joi.",
      "Integrated AWS S3 with Multer for file storage.",
    ],
    tech: ["React JS", "Node JS", "Joi", "AWS S3", "Multer"],
  },
];

export const projects = [
  {
    id: 1,
    name: "ART — Artwork Review & Approval System",
    description:
      "Automated artwork review pipeline using AI/LLM integration that reduced manual Care Agent dependency by 60–70% for customized product orders at Cimpress/National Pens.",
    tech: ["React JS", "Node JS", "Redis", "LLM", "AWS"],
    live: "https://www.pens.com/us/",
    highlights: ["60-70% reduction in manual workload", "30% faster turnaround", "AI-powered communication"],
  },
  {
    id: 2,
    name: "SmartAPI — Angel Broking Developer Platform",
    description:
      "Developer portal exposing Angel One Trading APIs and SDKs to Fintech users, with interactive documentation, code samples, and SDK guides.",
    tech: ["React JS", "Redux", "JavaScript", "REST APIs"],
    live: "https://smartapi.angelbroking.com",
    highlights: ["Fintech API ecosystem", "Interactive docs", "SDK integration guides"],
  },
  {
    id: 3,
    name: "Developer Portal — Axis Bank",
    description:
      "Secure microservice-based API gateway for Axis Bank's developer portal with robust logging, request validation, and security middleware.",
    tech: ["Node JS", "Express", "MySQL", "Microservices"],
    live: "https://apiportal.axisbank.com/portal/",
    highlights: ["OnPrem server setup", "Security hardening", "Logger middleware"],
  },
  {
    id: 4,
    name: "IndusQode — IndusInd Open Banking Portal",
    description:
      "Open banking developer portal with analytics dashboards and a multi-step API onboarding flow, enabling Fintech companies to integrate with IndusInd Bank.",
    tech: ["React JS", "Redux", "Recharts", "CSS"],
    live: "https://indusqode.indusind.com",
    highlights: ["Analytics dashboards", "Multi-step onboarding", "Responsive UI"],
  },
];

export const education = [
  {
    degree: "MCA — Master of Computer Applications",
    institution: "VESIT — Vivekanand Education Society's Institute of Technology",
    university: "University of Mumbai",
    year: "2020",
    icon: "🎓",
  },
  {
    degree: "BScIT — Bachelor of Science in Information Technology",
    institution: "VPM's B. N. Bandodkar College of Science",
    university: "University of Mumbai",
    year: "2017",
    icon: "🎓",
  },
];
