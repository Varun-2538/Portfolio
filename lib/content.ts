export const hero = {
  eyebrow: "arb.service — running · SDE @ HyperVerge",
  headline: "Introducing Varun, the engineer who never idles.",
  sub: "I build systems that learn, remember, and act — MEV trading bots, fintech rails, and AI agents that keep working while everyone else sleeps.",
};

export const scatter = {
  kicker: "The scatter",
  heading: "Hackathons, bots, rails, agents — it all connects.",
  centerLine: "One person, wiring it all together.",
};

export const missionControl = {
  kicker: "Command line",
  heading: "Every system, one operator.",
  sub: "Seven shipped builds, one dashboard. Pick a project below.",
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
    desc: "AI-based FIR analysis tool using Mistral-AI and Tesseract-OCR to parse incident reports, plus a crime-analytics dashboard over CCTNS data with 96% correct AI suggestions from a fine-tuned model. 1st in problem statement, 2nd runner-up among 1,665 teams at Rajasthan Police Hackathon 1.0.",
    stack: ["Python", "Flask", "Mistral-LLM", "Tesseract-OCR", "Chart.js"],
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
    desc: "Autonomous agentic pipeline at HyperVerge: FastAPI + Slack Events/Actions API + Anthropic API with an MCP server and python-gitlab, automating the full flow from Notion/Google Docs PRD ingestion to code generation and GitLab Merge Request creation, plus in-chat codebase querying and automated comment resolution.",
    stack: ["FastAPI", "Slack API", "Anthropic API", "python-gitlab"],
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
    desc: "AI-powered trading platform with 3 specialized agents generating strategies in under 60 seconds. 6 MCP tools orchestrated via Docker, processing 240 candlesticks for real-time market analysis.",
    stack: ["Python", "FastAPI", "Docker", "Cerebras AI", "Meta Llama", "TimescaleDB", "Redis"],
  },
  {
    num: "07",
    badge: "No-code",
    title: "KOAN",
    desc: "No-code platform for on-the-go DeFi infra creation using a React Flow-based visual builder, backed by a TypeScript execution engine for component-level testing and workflow integration.",
    stack: ["React", "Solidity", "Firebase", "Tailwind", "IPFS"],
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
    stack: ["FastAPI", "Node.js", "Express.js", "PostgreSQL", "Firebase", "Redis", "OpenTelemetry"],
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
    stack: ["Solidity", "Flashbots", "FunC", "ZK proofs", "Biconomy", "ERC-4337"],
  },
  {
    icon: "🤖",
    name: "AI agents",
    desc: "Agentic systems with real guardrails — persistent memory, human-in-the-loop approvals, and tool use that ships work, not demos.",
    stack: ["Anthropic API", "MCP", "Slack API", "python-gitlab"],
  },
];

export const timeline = [
  {
    when: "Now",
    title: "SDE Intern · HyperVerge",
    desc: "Architected an autonomous agentic pipeline (FastAPI + Slack Events/Actions API + Anthropic API with an MCP server and python-gitlab) that turns Notion/Google Docs PRDs into generated code and GitLab merge requests. Also shipped OCR-based forgery detection and live face-match quality checks into production verification APIs.",
  },
  {
    when: "2025",
    title: "Data Engineering Intern · SRM Technologies",
    desc: "Designed a secure PII tokenization system using hashing and encryption, and built a dual-storage ETL pipeline fragmenting sensitive data across Firebase and IPFS — 100% data integrity with UUID-based reconstruction for authorized access.",
  },
  {
    when: "2024",
    title: "Fullstack Intern · Biconomy",
    desc: "Implemented Biconomy Smart Account V2 with session keys and permissions, and built a cross-chain Gitcoin Grants donation flow using ERC-4337 and a transaction bundler for gasless, multi-chain contributions.",
  },
  {
    when: "Earlier",
    title: "Catalystix · CorelytixAI",
    desc: "Built AI agents, A/B testing frameworks, and AWS-deployed APIs across two internships while shipping side projects at night.",
  },
  {
    when: "Campus",
    title: "Crypto Domain Lead · Blockchain Club, SRM IST",
    desc: "Used Dune Analytics to scrape and analyze large-scale crypto transactions and token flow patterns, and represented the club at industry events including ETH India and Solana HackerHouse.",
  },
  {
    when: "Origin",
    title: "First hackathon win",
    desc: "ReportEase placed 1st in its problem statement and 2nd runner-up among 1,665 teams at Rajasthan Police Hackathon 1.0 — the ship-fast habit never left.",
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
  resume: "https://drive.google.com/file/d/1WbG62j2j62LMX0UuM3iHF-U73dqHvrZE/view?usp=drivesdk",
};

