"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import CodeEditorWindow from "./CodeEditorWindow"
import TradingTerminalWindow from "./TradingTerminalWindow"

const DualWindowHero = () => {
  // Window z-index state for focus management
  const [editorZIndex, setEditorZIndex] = useState(10)
  const [terminalZIndex, setTerminalZIndex] = useState(11) // Terminal on top initially

  // Focus handling
  const focusEditor = () => {
    setEditorZIndex(12)
    setTerminalZIndex(11)
  }

  const focusTerminal = () => {
    setTerminalZIndex(12)
    setEditorZIndex(11)
  }

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto`}>
        <div className="flex flex-col justify-center items-center mt-5 absolute left-10 top-0">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Windows Container */}
        <div className="relative w-full h-[70vh] sm:h-[60vh] flex flex-col md:flex-row gap-6">
          {/* Code Editor Window */}
          <motion.div
            className="window-container md:w-1/2 w-full h-full flex"
            style={{
              zIndex: editorZIndex,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={focusEditor}
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-full h-full flex">
              <CodeEditorWindow />
            </div>
          </motion.div>

          {/* Trading Terminal Window */}
          <motion.div
            className="window-container md:w-1/2 w-full h-full flex"
            style={{
              zIndex: terminalZIndex,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={focusTerminal}
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-full h-full flex">
              <TradingTerminalWindow />
            </div>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default DualWindowHero
