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
        }

        setPreviewResult(developerPreview)
        setShowPreview(true)
      }, 1000)
    } catch (error) {
      setPreviewResult({ error: error.message })
      setShowPreview(true)
    }
  }

  // Render preview content
  const renderPreview = () => {
    if (!previewResult) return <div className="text-gray-400">Executing code...</div>

    if (previewResult.error) {
      return <div className="text-red-500">Error: {previewResult.error}</div>
    }

    return (
      <div className="text-gray-300">
        <div className="mb-2">
          <span className="text-blue-400">const</span> Developer = {"{"}
        </div>
        <div className="ml-4">
          <div>
            <span className="text-cyan-400">name</span>: <span className="text-orange-400">"{previewResult.name}"</span>
            ,
          </div>
          <div>
            <span className="text-cyan-400">title</span>:{" "}
            <span className="text-orange-400">"{previewResult.title}"</span>,
          </div>
          <div>
            <span className="text-cyan-400">interests</span>: [
            {previewResult.interests.map((interest, i) => (
              <span key={i}>
                <span className="text-orange-400">"{interest}"</span>
                {i < previewResult.interests.length - 1 ? ", " : ""}
              </span>
            ))}
            ],
          </div>
          <div>
            <span className="text-cyan-400">skills</span>: [
            {previewResult.skills.map((skill, i) => (
              <span key={i}>
                <span className="text-orange-400">"{skill}"</span>
                {i < previewResult.skills.length - 1 ? ", " : ""}
              </span>
            ))}
            ],
          </div>
          <div>
            <span className="text-cyan-400">achievements</span>: [
            <div className="ml-4">
              {previewResult.achievements.map((achievement, i) => (
                <div key={i}>
                  <span className="text-orange-400">"{achievement}"</span>
                  {i < previewResult.achievements.length - 1 ? "," : ""}
                </div>
              ))}
            </div>
            ],
          </div>
          <div>
            <span className="text-cyan-400">focus</span>:{" "}
            <span className="text-orange-400">"{previewResult.focus}"</span>
          </div>
        </div>
        <div>{"}"}</div>
      </div>
    )
  }

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
        <div className="px-4 py-2 bg-[#1E1E1E] text-white border-r border-[#3C3C3C] flex items-center">
          <span className="mr-2">📄</span>
          portfolio.js
          <span className="ml-2 px-1 bg-[#333333] rounded">×</span>
        </div>
        <div className="px-4 py-2 text-gray-400 border-r border-[#3C3C3C] flex items-center">
          <span className="mr-2">📄</span>
          about.js
        </div>
        <div className="ml-auto px-4 py-2 text-gray-400 flex items-center">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`px-2 py-1 rounded ${
              showPreview ? "bg-[#007ACC] text-white" : "bg-[#333333] text-gray-300 hover:bg-[#444444]"
            }`}
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
        </div>
      </div>

      {/* Split view for code and preview */}
      <div className="flex flex-grow overflow-hidden">
        {/* Code editor content - flex-grow to take available space */}
        <div className={`flex flex-col ${showPreview ? "w-1/2" : "w-full"}`}>
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

        {/* Preview panel */}
        {showPreview && (
          <div className="w-1/2 border-l border-[#3C3C3C] flex flex-col">
            <div className="bg-[#252526] px-4 py-2 border-b border-[#3C3C3C] text-white text-sm">
              <div className="flex items-center">
                <span className="mr-2">🔍</span>
                Preview
              </div>
            </div>
            <div className="flex-grow overflow-auto p-4 bg-[#1E1E1E] font-mono text-sm">{renderPreview()}</div>
          </div>
        )}
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
