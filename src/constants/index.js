import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    BCSRM,
    kzilla,
    xyz,
    ReportEase,
    mintvault,
    astrogpt,
    velocity,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Smart Contract Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Speculator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Smart Account and Module Team Intern",
      company_name: "Biconomy",
      icon: xyz, // Replace with the actual icon variable or path
      iconBg: "#383E56",
      date: "April 2024 - December 2024",
      points: [
        "Implemented Biconomy Smart Account V2 as the foundation for AutoTx, integrating session keys and permissions for seamless functionality.",
        "Developed a cross-chain donation feature using Biconomy Smart Account and session keys, enabling Gitcoin grants donations.",
        "Revamped FundPublicGoods.ai with Next.js, enhancing dynamic interactions with the deployed Smart Account contract.",
        "Collaborated remotely with a global team, delivering scalable blockchain solutions for real-world applications.",
        "Contributed to code optimization and testing, ensuring robust performance and reliability of smart account features."
      ]
    },
    {
      title: "Frontend Intern",
      company_name: "Corelytics AI",
      icon: tesla, // Replace with the actual icon variable or path
      iconBg: "#383E56",
      date: "September 2023 - December 2023",
      points: [
        "Created interactive web pages using Three.js for stunning visual elements and Tailwind CSS for responsive design.",
        "Enhanced user interfaces with smooth animations, improving engagement and website aesthetics.",
        "Collaborated with the development team to design and implement frontend features from wireframes to production.",
        "Participated in code reviews and debugging sessions, maintaining high-quality code and optimal performance.",
        "Contributed to the integration of modern design practices, elevating the overall user experience."
      ]
    },
    {
      title: "Crypto Domain Lead",
      company_name: "Blockchain Club SRM",
      icon: BCSRM,
      iconBg: "#383E56",
      date: "Oct 2022 - present",
      points: [
        "Played a key role in the development and revamp of the club's website.",
        "Represented the club in community-based events like ‘ETH India’ and ‘Solana HackerHouse’.",
        "Researched crypto using techniques like on-chain analysis.",
        "Engaged in collaborative coding projects, contributing to a variety of club initiatives and digital assets.",
        "Facilitated workshops and training sessions for new members on blockchain technology and development tools.",
    ],
    },
    
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ReportEase",
      description:
        "ReportEase is an Automated Legal Insight Project that uses Mistral AI, an open source Large Language Model (LLM) finetuned on IPC & CrPC Datasets, to analyze First Information Reports (FIRs) and generate insightful reports.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "RestAPI",
          color: "pink-text-gradient",
        },
      ],
      image: ReportEase,
      source_code_Link: "https://github.com/Varun-2538/ReportEase",
    },
    
    {
      name: "Mint Vault",
      description:
        "Mint Vault is a UPI-to-crypto onramp, enabling seamless INR-to-crypto conversion. It features ERC-4337 account abstracted for non-custodial smart wallets and gasless transactions via meta transaction relayers.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient"
        },
        {
          name: "React.js",
          color: "green-text-gradient"
        },
        {
          name: "Solidity",
          color: "pink-text-gradient"
        },
      ],
      image: mintvault, // Replace with actual image variable or path
      source_code_Link: "https://github.com/Varun-2538/Mint-Vault" // Update with actual link
    },
    {
      name: "Velocity",
      description:
        "velocity is a decentralized social platform built on Polygon, featuring NFT creation and a bounty system via smart contracts. It leverages IPFS for decentralized storage and won 'Most Optimized Use of Shardeum Testnet' .",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient"
          },
          {
            name: "Solidity",
            color: "green-text-gradient"
          },
          {
            name: "IPFS",
            color: "pink-text-gradient"
          },
          {
            name: "Tailwind",
            color: "orange-text-gradient"
          }
        ],
      image: velocity,
      source_code_Link: "https://github.com/Varun-2538/Velocity",
    },
    {
      name: "Astro GPT",
      description:
        "Astro GPT is an advanced astrology platform that combines Swiss Ephemeris for precise Kundali generation.it offers an interactive UI to explore planetary placements, house effects, and Vimshottari Dasha, alongside tailored remedies for life.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient"
        },
        {
          name: "Vite",
          color: "green-text-gradient"
        },
        {
          name: "Swiss Ephemeris",
          color: "pink-text-gradient"
        },
        {
          name: "AI",
          color: "orange-text-gradient"
        }
      ],
      image: astrogpt, // Replace with an appropriate image variable from your assets
      source_code_Link: "https://github.com/Varun-2538/AstroGpt",
    },
    {
      name: "Shadow",
      description:
        "A predictive crime analysis and deployment planner built with React.js, Node.js, and Mistral LLM. Features spatial, temporal, and beat-wise analysis views, predictive hotspot mapping, and demographic insights for actionable crime prevention strategies.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Chart.js",
          color: "yellow-text-gradient",
        },
        {
          name: "Mistral-LLM",
          color: "orange-text-gradient",
        }
      ],
      image: jobit, // Replace with actual image variable or path
      source_code_link: "https://github.com/imilindmishra/Shadow"
    },
    {
      name: "Network Usage Tracker",
      description:
        "The Network Usage Tracker is a Python application with a Tkinter GUI that allows users to monitor real-time network usage, store usage data in a MySQL database, and receive alerts when usage exceeds a limit.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "Pillow",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_Link: "https://github.com/Varun-2538/Network-Usage-Tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };