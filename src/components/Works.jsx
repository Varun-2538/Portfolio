"use client"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { projects } from "../constants"
import { github } from "../assets"
import { useEffect, useState } from "react"

const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => {
  // Use a more mobile-friendly animation with reduced delay
  const animationVariant = fadeIn("up", "spring", Math.min(index * 0.2, 0.5), 0.5)

  return (
    <motion.div variants={animationVariant} initial="hidden" animate="show" className="project-card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          // Disable tilt on mobile for better performance
          reverse: window.innerWidth < 768 ? true : false,
          max: window.innerWidth < 768 ? 15 : 45,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy" // Add lazy loading for better performance
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_Link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github || "/placeholder.svg"} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {/* Fix for heading visibility */}
      <div style={{ display: "block", visibility: "visible", opacity: 1 }}>
        <motion.div
          variants={textVariant()}
          initial="show"
          animate="show"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <p className={`${styles.sectionSubText} text-center`} style={{ opacity: 1, visibility: "visible" }}>
            My Works
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`} style={{ opacity: 1, visibility: "visible" }}>
            Project.
          </h2>
        </motion.div>
      </div>

      {/* Fix for description visibility */}
      <div className="w-full flex justify-center items-center" style={{ opacity: 1, visibility: "visible" }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="show"
          animate="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{ opacity: 1, visibility: "visible" }}
        >
          The showcased projects provide evidence of my abilities and experience by featuring practical instances of my
          work. Each project is briefly described and includes links to its code repository and live demos. These
          projects highlight my capacity to tackle complex challenges, work with various technologies, and effectively
          oversee project management.
        </motion.p>
      </div>

      {/* Force render with inline styles to ensure visibility */}
      <div
        className="mt-20 flex flex-wrap justify-center gap-7"
        style={{
          minHeight: "200px",
          display: "flex",
          visibility: "visible",
          opacity: 1,
        }}
      >
        {/* Add a fallback for when animations might not trigger properly */}
        {!isMounted && projects.length > 0 && <div className="text-white text-center w-full">Loading projects...</div>}

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

// Add a custom wrapper to ensure visibility on mobile
const MobileAwareSection = (Component, idName) => {
  return function HOC() {
    const WrappedComponent = SectionWrapper(Component, idName)

    return (
      <div style={{ display: "block", visibility: "visible", opacity: 1 }}>
        <WrappedComponent />
      </div>
    )
  }
}

export default MobileAwareSection(Works, "")
