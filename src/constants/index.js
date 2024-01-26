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
      title: "Associate Tech lead ",
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
    {
      title: "UI/UX Designer",
      company_name: "Kzilla",
      icon: kzilla,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - April 2023",
      points: [
        "Designed the homepage of the website and social media posts on Instagram, significantly improving user engagement.",
        "Worked extensively with tools like Figma, Git, Github, Framer, and Javascript to create visually appealing designs.",
        "Learned about open-source contribution, actively participating in various community-driven design projects.",
        "Collaborated with the development team to ensure design consistency and user-friendly interfaces across platforms.",
        "Conducted user experience research to better understand audience needs and preferences, informing design decisions.",
    ],
    },
    {
      title: "Tech Intern",
      company_name: "Bharat Intern",
      icon: xyz,
      iconBg: "#383E56",
      date: "Aug 2023 - Sept 2023",
      points: [
        "Collaborated with a dynamic team to create responsive web interfaces using React.js, Node.js, Three.js, and Tailwind CSS.",
        "Developed a website using Three.js, incorporating email.js for enhanced customer service and user interaction.",
        "Played a crucial role in the front-end development process, from conceptualization to deployment.",
        "Implemented innovative features and animations using Three.js, elevating the user experience on the website.",
        "Participated in code reviews and debugging sessions, ensuring high-quality code standards and website performance.",
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
      source_code_link: "https://github.com/Varun-2538/ReportEase",
    },
    {
      name: "Predictive sports analysis",
      description:
        "This Python-based tool is designed to analyze cricket matches ball by ball, providing insights into player performance, team strengths, weaknesses, and historical match data. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "Matplot lib",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Varun-2538/Predictive_sports_analysis",
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
      source_code_link: "https://github.com/Varun-2538/Network-Usage-Tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };