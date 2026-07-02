export const hero = {
  eyebrow: "6 shipped builds · SDE @ HyperVerge",
  headline: "Introducing Varun, the engineer who plans six moves ahead.",
  sub: "Before a line of code gets written, I map the architecture, the data flow, and the failure points. That's how one person ships fintech rails, trading systems, and AI agents that actually hold up in production.",
};

export const scatter = {
  kicker: "The scatter",
  heading: "Hackathons, bots, rails, agents — it all connects.",
  centerLine: "One person, wiring it all together.",
};

export const missionControl = {
  kicker: "Command line",
  heading: "Every system, one operator.",
  sub: "Six shipped builds, one dashboard. Pick a project below.",
};

export const alwaysOn = {
  kicker: "Always on",
  heading: "I sleep. The bot keeps trading.",
  sub: "A Rust service on a DigitalOcean droplet scans liquidity pools, simulates trades in REVM, and fires Flashbots bundles — around the clock, in a tmux session that doesn't care whether I'm awake.",
};

export const stackSection = {
  kicker: "Surfaces",
  heading: "One engineer, every layer.",
};

export const marquee = [
  "Ideas start scattered across repos, chains, and terminals.",
  "Shipped code doesn't stay that way.",
  "Rust · React · Solidity · FastAPI · and everything in between.",
];

export const projects = [
  {
    num: "01",
    badge: "Live · 24/7",
    title: "MEV Arbitrage Engine",
    desc: "Rust-based on-chain arbitrage bot running against a self-hosted Reth node. Bellman-Ford + DFS pathfinding across DEX liquidity graphs, REVM simulation for pre-flight validation, and Flashbots bundle submission with multi-builder fan-out.",
    stack: ["Rust", "Reth", "REVM", "Flashbots", "DigitalOcean"],
    wide: true,
  },
  {
    num: "02",
    badge: "🏆 Winner",
    title: "ReportEase",
    desc: "OCR-driven FIR analysis for law enforcement at 98% accuracy. Took 1st place at Rajasthan Police Hackathon 1.0.",
    stack: ["Python", "OCR", "NLP"],
  },
  {
    num: "03",
    badge: "Fintech",
    title: "Remittance Platform",
    desc: "End-to-end US–India remittance product: web app, backend, and React Native mobile app with UPI, KYC, and on/off-ramp integration.",
    stack: ["React Native", "Node.js", "UPI"],
  },
  {
    num: "04",
    badge: "Agentic",
    title: "Enterprise Intern-Bot",
    desc: "Production-grade AI agent wired into Slack and GitLab — HMAC webhook auth, JWT-gated human approval, and persistent markdown memory.",
    stack: ["FastAPI", "PostgreSQL", "Claude API"],
  },
  {
    num: "05",
    badge: "pSEO",
    title: "RemitIndex",
    desc: "Programmatic SEO platform for NRI remittance comparison — an LLM-powered pipeline generating 100+ niche pages with schema-validated content.",
    stack: ["Next.js", "Gemini", "Zod"],
  },
  {
    num: "06",
    badge: "Trading",
    title: "TradeSmart.AI",
    desc: "AI trading platform with MCP tools, time-series storage, and containerized deployment for strategy research and execution.",
    stack: ["MCP", "TimescaleDB", "Redis", "Docker"],
  },
];

export const surfaces = [
  {
    icon: "⚛️",
    name: "Frontend",
    desc: "Interfaces people actually enjoy using — from node-based visual editors to consumer fintech apps.",
    stack: ["React", "Next.js", "React Native", "TypeScript"],
  },
  {
    icon: "🛠️",
    name: "Backend",
    desc: "APIs built for production from day one — auth, webhooks, observability, and distributed tracing included.",
    stack: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "OpenTelemetry"],
  },
  {
    icon: "⚡",
    name: "Systems",
    desc: "When milliseconds are money: low-latency Rust services, EVM simulation, and self-hosted node infrastructure.",
    stack: ["Rust", "REVM", "Reth", "tmux + systemd"],
  },
  {
    icon: "⛓️",
    name: "On-chain",
    desc: "Smart contracts, MEV strategy, DeFi integrations, and tokenization builds across EVM chains and TON.",
    stack: ["Solidity", "Flashbots", "FunC", "ZK proofs"],
  },
  {
    icon: "🤖",
    name: "AI agents",
    desc: "Agentic systems with real guardrails — persistent memory, human-in-the-loop approvals, and tool use that ships work, not demos.",
    stack: ["Claude API", "MCP", "Slack Bolt", "LLM pipelines"],
  },
];

export const timeline = [
  {
    when: "Now",
    title: "SDE Intern · HyperVerge",
    desc: "Data engineering and distributed tracing — KYC pipeline observability with AWS X-Ray and OpenTelemetry across services.",
  },
  {
    when: "Earlier",
    title: "Catalystix · CorelytixAI · SRM Technologies",
    desc: "Built AI agents, A/B testing frameworks, and AWS-deployed APIs across three internships while shipping side projects at night.",
  },
  {
    when: "Campus",
    title: "Crypto Domain Lead · Blockchain Club, SRM IST",
    desc: "CS undergrad at SRM Institute of Science and Technology. Led the crypto domain, ran workshops, and dragged teams to hackathon podiums.",
  },
  {
    when: "Origin",
    title: "First hackathon win",
    desc: "ReportEase took 1st at Rajasthan Police Hackathon — and the ship-fast habit never left.",
  },
];

export const faqs = [
  {
    q: "What do you actually do?",
    a: "I'm a full-stack engineer with a systems edge — I take products from idea to production: frontend, backend, mobile, smart contracts, and the infrastructure underneath. My sweet spot is fintech, trading systems, and agentic AI.",
    open: true,
  },
  {
    q: "What are you working on right now?",
    a: "Interning as an SDE at HyperVerge, running a Rust MEV arbitrage engine in production, and building AI agent tooling on the side.",
  },
  {
    q: "Do you freelance or take contract work?",
    a: "Yes — I've shipped complete products for clients end to end, including a full US–India remittance platform. If you have a build in mind, reach out.",
  },
  {
    q: 'Why "never idles"?',
    a: "Because my proudest builds are the ones that run without me — bots that trade at 3 AM, agents that file tickets on their own, pipelines that publish while I sleep. I build things that keep working.",
  },
  {
    q: "How do I reach you?",
    a: "Email is fastest. Links to GitHub, LinkedIn, and X are in the footer.",
  },
];

export const finalCta = {
  kicker: "Let's build",
  heading: "C'mon in — the code's hot.",
  sub: "Have a product to ship, a system to scale, or a wild idea worth a hackathon weekend? I'm in.",
};

export const links = {
  email: "varunsingh2538@gmail.com",
  github: "https://github.com/Varun-2538",
  linkedin: "https://www.linkedin.com/",
  x: "https://x.com/",
};

