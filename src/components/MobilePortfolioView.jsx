"use client"
import {
  Code,
  ChevronRight,
  Award,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Cpu,
  Server,
  Layers,
} from "lucide-react"

const MobilePortfolioView = () => {
  const developerData = {
    name: "Varun",
    title: "Fullstack Developer",
    interests: ["Blockchain", "Web Development", "Hackathons"],
    skills: ["React", "Node.js", "Three.js", "Solidity"],
    achievements: [
      "Eth India'25: Snagged the Okto Track win ($2,500 prize)",
      "Rajasthan Police Hackathon 1.0: 1st in problem statement",
      "Barclays Project Expo: Took 1st prize for standout innovation",
      "Layer 2.0 Hackathon: Won the Shardeum Track",
    ],
    focus: "Building innovative web experiences",
    projects: [
      { name: "DeFi Dashboard", tech: "React, Solidity, Web3.js" },
      { name: "AI Code Assistant", tech: "Python, TensorFlow, React" },
      { name: "3D Portfolio", tech: "Three.js, React, GSAP" },
    ],
  }

  return (
    <div className="w-full max-h-[70vh] overflow-y-auto pb-16 font-mono">
      {/* Tech-savvy header with animated gradient */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

        <div className="relative p-5 z-10">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg border border-purple-400/20">
              <Terminal size={24} />
            </div>
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white tracking-tight">{developerData.name}</h1>
                <div className="ml-2 px-1.5 py-0.5 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                  <span>Online</span>
                </div>
              </div>
              <div className="mt-1">
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-xs border border-indigo-500/30 tracking-wide">
                  {developerData.title}
                </span>
              </div>
            </div>
          </div>

          <div className="flex mt-4 space-x-2">
            <a
              href="#"
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Tech stack section */}
      <div className="mb-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700/50 shadow-lg">
        <h2 className="text-base font-semibold text-white mb-3 flex items-center">
          <Layers className="mr-2 text-purple-400" size={18} />
          <span>Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {developerData.skills.map((skill, i) => (
            <div
              key={i}
              className="px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mr-2 border border-purple-500/20">
                {i === 0 && <Code size={16} className="text-purple-400" />}
                {i === 1 && <Server size={16} className="text-blue-400" />}
                {i === 2 && <Cpu size={16} className="text-indigo-400" />}
                {i === 3 && <Terminal size={16} className="text-green-400" />}
              </div>
              <span className="text-gray-200 text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects section */}
      <div className="mb-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700/50 shadow-lg">
        <h2 className="text-base font-semibold text-white mb-3 flex items-center">
          <Code className="mr-2 text-blue-400" size={18} />
          <span>Projects</span>
        </h2>

        <div className="space-y-2">
          {developerData.projects.map((project, i) => (
            <div
              key={i}
              className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium">{project.name}</h3>
                <div className="px-1.5 py-0.5 bg-blue-900/30 text-blue-400 rounded text-xs border border-blue-800/30">
                  Project
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-1">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements section */}
      <div className="mb-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700/50 shadow-lg">
        <h2 className="text-base font-semibold text-white mb-3 flex items-center">
          <Award className="mr-2 text-yellow-400" size={18} />
          <span>Achievements</span>
        </h2>

        <div className="space-y-2">
          {developerData.achievements.map((achievement, i) => (
            <div key={i} className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-start">
              <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mr-2 border border-yellow-500/30 shrink-0 mt-0.5">
                <Award size={14} className="text-yellow-400" />
              </div>
              <span className="text-gray-300 text-sm">{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Focus section */}
      <div className="mb-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700/50 shadow-lg">
        <h2 className="text-base font-semibold text-white mb-2 flex items-center">
          <Terminal className="mr-2 text-green-400" size={18} />
          <span>Current Focus</span>
        </h2>

        <div className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg">
          <div className="flex items-center">
            <span className="text-green-400 mr-1">$</span>
            <span className="text-gray-300 font-mono">{developerData.focus}</span>
            <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <a
          href="#about"
          className="flex items-center justify-between bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-3 text-white hover:from-purple-800 hover:to-blue-800 transition-colors border border-purple-700/30"
        >
          <span className="flex items-center">
            <Briefcase className="mr-2" size={18} />
            View Full Portfolio
          </span>
          <ChevronRight size={18} />
        </a>
      </div>
    </div>
  )
}

export default MobilePortfolioView
