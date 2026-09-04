// All site copy lives here so it can be edited without touching layout code.

export const person = {
  name: "Ryan Bar-Zion",
  location: "Los Angeles, CA",
  emails: ["ryan@barzion.net", "ryanbarzion@berkeley.edu"],
  linkedin: { label: "linkedin.com/in/ryanbarzion", href: "https://www.linkedin.com/in/ryanbarzion" },
  github: { label: "github.com/ryanbarzion", href: "https://github.com/ryanbarzion" },
};

export type Project = {
  index: string;
  title: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  details: string[];
  stats?: { value: string; label: string }[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "AutoArch",
    role: "Founder & Engineer",
    period: "Dec 2025 — Present",
    status: "Live product, paying customers",
    summary:
      "Orthodontic practices scan patients' teeth every day, but turning a scan into a printable study model used to mean training staff on mesh software. AutoArch does it automatically. Upload a raw intraoral scan and, in about ten seconds, get back a cleaned, oriented, trimmed, based, and labeled model that is ready to print.",
    details: [
      "Built the 3D geometry pipeline in Python and FastAPI. A gradient-boosted mesh segmentation model (scikit-learn) finds the gingival trim line; on a held-out cohort of 1,306 cases it reaches a median IoU of about 0.93 against clinician ground truth.",
      "Shipped an in-browser 3D editor on three.js and WebGL so practices can review and adjust a finished model without leaving the page.",
      "Built the full billing lifecycle on Stripe: 30-day trials, monthly and annual plans, webhooks, promo codes, and a self-serve portal.",
      "Operate the entire stack solo on a Linux server behind Cloudflare, with backups, monitoring, and a 280-check end-to-end suite that every release must pass before deploy.",
    ],
    stats: [
      { value: "1,000+", label: "models processed" },
      { value: "<10 s", label: "scan to finished model" },
      { value: "0.93", label: "median trim IoU" },
    ],
    stack: ["Python", "FastAPI", "scikit-learn", "three.js", "Stripe", "SQLite", "Linux", "Cloudflare"],
    links: [{ label: "autoarchlab.com", href: "https://autoarchlab.com" }],
  },
  {
    index: "02",
    title: "Catalyst Researcher",
    role: "Personal project",
    period: "2026",
    status: "Open source, live demo",
    summary:
      "A research tool that reads the last 72 hours of news, asks a language model for a handful of testable predictions about the next 2 to 12 months, then checks the model's work: arithmetic, citations, dates, and wording. Each prediction is mapped to the US-listed companies most directly affected, with verified tickers and quotes, and can be expanded into a source-grounded research note.",
    details: [
      "Every prediction carries a probability ledger (reference class, base rate, adjustments, estimate with a range) plus dated confirmation and invalidation signals.",
      "Every claim in a research note cites evidence ids that resolve to real articles. The system contains no buy or sell language anywhere by design.",
      "FastAPI backend with background jobs and step-level progress, a static single-page frontend with no build step, and a watchlist scoped per browser. Deployed as a Hugging Face Space.",
    ],
    stack: ["Python", "FastAPI", "OpenAI API", "SQLModel", "yfinance", "Hugging Face Spaces"],
    links: [
      { label: "Live demo", href: "https://huggingface.co/spaces/ryanbarzion/catalyst-dashboard" },
      { label: "GitHub", href: "https://github.com/ryanbarzion/catalyst-researcher" },
    ],
  },
];

export type Experience = {
  period: string;
  org: string;
  role: string;
  note: string;
};

export const experience: Experience[] = [
  {
    period: "2025 — Now",
    org: "AutoArch",
    role: "Founder & Engineer",
    note: "Founded and run a revenue-generating SaaS for automated orthodontic model preparation. Product, pipeline, ML, billing, and infrastructure.",
  },
  {
    period: "2024",
    org: "NASA Aerospace Scholars",
    role: "Surface Operations Lead",
    note: "Led landing-site selection at the rim of Shackleton Crater, rover deployment, and autonomous navigation planning for a simulated lunar mission. Built the navigation plan from LROC imagery, RIMFAX radar, and LiDAR to map subsurface ice in permanently shadowed regions, and authored contingency procedures for communication, power, and mobility failures.",
  },
  {
    period: "2024",
    org: "CK Technologies",
    role: "Mechanical Engineer Intern",
    note: "Modeled parts, assemblies, and technical drawings in SolidWorks across multiple active product projects. Optimized designs against manufacturing constraints, tolerances, and industry standards.",
  },
  {
    period: "2022 — 2026",
    org: "Bar-Zion Orthodontics",
    role: "Laboratory Technician",
    note: "Managed lab operations manufacturing retainers and aligners for an active practice. Owned the 3D printing and digital modeling workflow end to end, which is the domain expertise that seeded AutoArch.",
  },
  {
    period: "2023 — 2024",
    org: "Topstep & Apex Trader Funding",
    role: "Funded Futures Trader",
    note: "Traded $50K funded futures accounts across two evaluation firms using order-flow (cumulative delta) analysis under strict drawdown-based risk management.",
  },
];

export const education = {
  school: "University of California, Berkeley",
  degree: "B.S. Aerospace Engineering",
  graduation: "Expected December 2028",
  notes: ["Transfer GPA 3.93", "National Society of Leadership and Success"],
  coursework: [
    "Solid Mechanics",
    "Properties of Materials",
    "Multivariable Calculus",
    "Linear Algebra & Differential Equations",
    "Programming & Numerical Methods",
    "Dynamics",
    "Engineering Data Analysis",
    "Intro to Aerospace Design",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Software",
    items: ["Python", "FastAPI", "SQL", "JavaScript", "three.js / WebGL", "NumPy", "Pandas", "scikit-learn", "REST APIs", "Git", "Linux", "SolidWorks"],
  },
  {
    group: "Engineering & AI",
    items: ["Full-stack SaaS", "LLM applications", "Machine learning", "Data analysis", "3D geometry processing", "3D printing", "CAD"],
  },
  {
    group: "Markets",
    items: ["Order-flow analysis", "Backtesting", "Risk management"],
  },
];
