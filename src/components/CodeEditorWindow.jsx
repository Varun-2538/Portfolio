"use client"

import { useState, useEffect, useRef } from "react"

const CodeEditorWindow = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showPreview, setShowPreview] = useState(false)
  const [previewResult, setPreviewResult] = useState(null)
  const cursorRef = useRef(null)
  const editorRef = useRef(null)
  const [previewTimer, setPreviewTimer] = useState(null)

  // Content to be typed with syntax highlighting tags
  const codeContent = [
    { text: "// Portfolio.js", type: "comment" },
    { text: "import ", type: "keyword" },
    { text: "{ Developer } ", type: "variable" },
    { text: "from ", type: "keyword" },
    { text: "'fullstack'", type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n", type: "newline" },

    { text: "import ", type: "keyword" },
    { text: "{ Blockchain } ", type: "variable" },
    { text: "from ", type: "keyword" },
    { text: "'web3'", type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n", type: "newline" },

    { text: "import ", type: "keyword" },
    { text: "{ Hackathons } ", type: "variable" },
    { text: "from ", type: "keyword" },
    { text: "'competitions'", type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n\n", type: "newline" },

    { text: "/**\n * @author Varun\n * @description Portfolio data\n */", type: "doccomment" },
    { text: "\n", type: "newline" },

    { text: "const ", type: "keyword" },
    { text: "Developer ", type: "variable" },
    { text: "= ", type: "operator" },
    { text: "{", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "name", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Varun'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "title", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Fullstack Developer'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "interests", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "[", type: "punctuation" },
    { text: "'Blockchain'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Web Development'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Hackathons'", type: "string" },
    { text: "]", type: "punctuation" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "skills", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "[", type: "punctuation" },
    { text: "'React'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Node.js'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Three.js'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "'Solidity'", type: "string" },
    { text: "]", type: "punctuation" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "achievements", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "[", type: "punctuation" },
    { text: "\n    ", type: "newline" },

    { text: "'Eth India\\'25: Snagged the Okto Track win ($2,500 prize)'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n    ", type: "newline" },

    { text: "'Rajasthan Police Hackathon 1.0: 1st in problem statement'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n    ", type: "newline" },

    { text: "'Barclays Project Expo: Took 1st prize for standout innovation'", type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n    ", type: "newline" },

    { text: "'Layer 2.0 Hackathon: Won the Shardeum Track'", type: "string" },
    { text: "\n  ", type: "newline" },

    { text: "]", type: "punctuation" },
    { text: ",", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "// Current focus", type: "comment" },
    { text: "\n  ", type: "newline" },

    { text: "focus", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "() ", type: "function" },
    { text: "=> ", type: "operator" },
    { text: "{", type: "punctuation" },
    { text: "\n    ", type: "newline" },

    { text: "return ", type: "keyword" },
    { text: "'Building innovative web experiences'", type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n  ", type: "newline" },

    { text: "}", type: "punctuation" },
    { text: "\n", type: "newline" },

    { text: "}", type: "punctuation" },
    { text: ";", type: "punctuation" },
    { text: "\n\n", type: "newline" },

    { text: "// Export the developer profile", type: "comment" },
    { text: "\n", type: "newline" },

    { text: "export default ", type: "keyword" },
    { text: "Developer", type: "variable" },
    { text: ";", type: "punctuation" },
  ]

  // Function to count lines for line numbers
  const countLines = (text) => {
    return text.split("\n").length
  }

  // Typing effect with syntax highlighting
  useEffect(() => {
    if (!isTyping) return

    if (currentLineIndex >= codeContent.length) {
      setIsTyping(false)
      // Execute code after typing is complete
      executeCode()
      return
    }

    const currentItem = codeContent[currentLineIndex]

    // Handle newlines
    if (currentItem.type === "newline") {
      setText((prev) => prev + currentItem.text)
      setCurrentLineIndex((prev) => prev + 1)
      return
    }

    // Type each character with a delay
    let currentChar = 0
    const typingInterval = setInterval(
      () => {
        if (currentChar < currentItem.text.length) {
          setText((prev) => {
            const newText = prev + currentItem.text[currentChar]
            // Auto-scroll to bottom as text is typed
            if (editorRef.current) {
              editorRef.current.scrollTop = editorRef.current.scrollHeight
            }
            return newText
          })
          currentChar++
        } else {
          clearInterval(typingInterval)
          setCurrentLineIndex((prev) => prev + 1)
        }
      },
      Math.random() * 20 + 20,
    ) // Random typing speed for more realistic effect

    return () => clearInterval(typingInterval)
  }, [currentLineIndex, isTyping])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0"
      }
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Generate line numbers based on text content
  const lineNumbers = () => {
    const lines = countLines(text)
    return Array.from({ length: lines }, (_, i) => i + 1).map((num) => (
      <div key={num} className="line-number">
        {num}
      </div>
    ))
  }

  // Function to render text with syntax highlighting
  const renderHighlightedText = () => {
    let highlightedText = ""
    const currentPosition = 0

    for (let i = 0; i < currentLineIndex; i++) {
      const item = codeContent[i]
      if (item.type === "newline") {
        highlightedText += item.text
      } else {
        highlightedText += `<span class="${item.type}">${item.text}</span>`
      }
    }

    return { __html: highlightedText }
  }

  // Execute code and show preview
  const executeCode = () => {
    try {
      // Simulate code execution
      setTimeout(() => {
        // Create a safe version of the Developer object from the code
        const developerPreview = {
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
            {
              name: "DeFi Dashboard",
              description: "A comprehensive dashboard for DeFi protocols",
              tech: ["React", "Solidity", "Web3.js"],
            },
            {
              name: "AI Code Assistant",
              description: "AI-powered coding assistant for developers",
              tech: ["Python", "TensorFlow", "React"],
            },
            {
              name: "3D Portfolio",
              description: "Interactive 3D portfolio website",
              tech: ["Three.js", "React", "GSAP"],
            },
          ],
        }

        setPreviewResult(developerPreview)
        setShowPreview(true) // Automatically show preview when code execution is complete
      }, 1000)
    } catch (error) {
      setPreviewResult({ error: error.message })
      setShowPreview(true)
    }
  }

  // Render enhanced preview content
  const renderPreview = () => {
    if (!previewResult) return <div className="text-gray-400">Executing code...</div>

    if (previewResult.error) {
      return <div className="text-red-500">Error: {previewResult.error}</div>
    }

    return (
      <div className="enhanced-preview h-full overflow-auto">
        {/* Header section with gradient background */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 p-8 rounded-lg mb-6 relative overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
                <span className="text-3xl font-bold text-white">{previewResult.name.charAt(0)}</span>
              </div>
              <div className="ml-4">
                <h1 className="text-4xl font-bold text-white">{previewResult.name}</h1>
                <p className="text-blue-300 text-xl">{previewResult.title}</p>
              </div>
            </div>

            <p className="text-white/80 text-lg max-w-2xl">
              Passionate developer focused on creating innovative solutions and pushing the boundaries of web
              technology.
            </p>
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-800/30 pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {previewResult.skills.map((skill, i) => (
              <div key={i} className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-800/30 flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span className="text-purple-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 border-b border-blue-800/30 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previewResult.projects.map((project, i) => (
              <div
                key={i}
                className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-5 hover:bg-blue-900/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-2">{project.name}</h3>
                <p className="text-blue-100/70 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 py-1 bg-blue-800/30 text-blue-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-b border-yellow-800/30 pb-2">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previewResult.achievements.map((achievement, i) => (
              <div key={i} className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 flex">
                <div className="w-10 h-10 rounded-full bg-yellow-800/30 flex items-center justify-center mr-3 shrink-0">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span className="text-yellow-100">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {previewResult.interests.map((interest, i) => (
              <div
                key={i}
                className="bg-green-900/20 border border-green-800/30 rounded-lg px-4 py-2 flex items-center"
              >
                <div className="w-6 h-6 rounded-full bg-green-800/30 flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-200">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Focus section */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-3">Current Focus</h2>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 border border-white/20">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white text-xl font-light">"{previewResult.focus}"</p>
            </div>
          </div>
        </div>
        {showPreview && (
          <div className="fixed bottom-4 right-4 bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Returning to code in <span className="font-bold ml-1">10s</span>
          </div>
        )}
      </div>
    )
  }

  useEffect(() => {
    if (showPreview && !isTyping) {
      // Set a timer to reset and restart the animation after 10 seconds
      const timer = setTimeout(() => {
        // Reset states to start over
        setText("")
        setCurrentLineIndex(0)
        setIsTyping(true)
        setShowPreview(false)
        setPreviewResult(null)
      }, 10000)

      setPreviewTimer(timer)
    }

    return () => {
      if (previewTimer) {
        clearTimeout(previewTimer)
      }
    }
  }, [showPreview, isTyping])

  return (
    <div className="code-editor-container w-full h-full bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl flex flex-col">
      {/* Code editor header */}
      <div className="code-editor-header flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#3C3C3C]">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-80 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-80 transition-opacity"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono flex items-center">
            <span className="mr-2">📄</span>
            portfolio.js
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500 text-xs">
          <div>JavaScript</div>
          <div>UTF-8</div>
        </div>
      </div>

      {/* Code editor tabs */}
      <div className="code-editor-tabs flex bg-[#252526] border-b border-[#3C3C3C] text-xs">
        <div className="px-6 py-2.5 bg-[#1E1E1E] text-white border-r border-[#3C3C3C] flex items-center">
          <span className="mr-2">📄</span>
          portfolio.js
          <span className="ml-2 px-1.5 py-0.5 bg-[#333333] rounded hover:bg-[#444444] cursor-pointer">×</span>
        </div>
        <div className="px-6 py-2.5 text-gray-400 border-r border-[#3C3C3C] flex items-center">
          <span className="mr-2">📄</span>
          about.js
        </div>
        <div className="ml-auto px-4 py-2 flex items-center">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-1.5 rounded font-medium text-sm bg-gradient-to-r from-[#007ACC] to-[#0063a5] text-white hover:from-[#0063a5] hover:to-[#004c80] transition-all shadow-md"
          >
            {showPreview ? "Show Code" : "Show Preview"}
          </button>
        </div>
      </div>

      {/* Content area - either code or preview, not split */}
      <div className="flex-grow overflow-hidden">
        {/* Code editor content - shown when preview is off */}
        {!showPreview && (
          <div className="flex flex-col h-full">
            <div className="code-editor-content-wrapper flex flex-grow overflow-hidden">
              {/* Line numbers */}
              <div className="line-numbers py-4 px-2 text-right bg-[#1E1E1E] border-r border-[#3C3C3C] select-none overflow-hidden">
                {lineNumbers()}
              </div>

              {/* Code content */}
              <div
                ref={editorRef}
                className="code-editor-content p-4 font-mono text-sm sm:text-base overflow-auto w-full"
              >
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <span dangerouslySetInnerHTML={renderHighlightedText()} />
                  <span ref={cursorRef} className="cursor">
                    |
                  </span>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Preview panel - full width when shown */}
        {showPreview && <div className="h-full overflow-auto bg-[#121212] p-6">{renderPreview()}</div>}
      </div>

      {/* Status bar - fixed at bottom */}
      <div className="code-editor-statusbar flex justify-between items-center px-4 py-1 bg-[#007ACC] text-white text-xs">
        <div className="flex items-center space-x-4">
          <span>
            Ln {countLines(text)}, Col {text.length - text.lastIndexOf("\n")}
          </span>
          <span>Spaces: 2</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>JavaScript</span>
          <span>UTF-8</span>
          <span>{!isTyping ? "✅ Executed" : "🔥 Typing..."}</span>
        </div>
      </div>
    </div>
  )
}

export default CodeEditorWindow
