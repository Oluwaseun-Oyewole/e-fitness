import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useGlobalContext } from "../../../hooks"
import Hamburger from "../hambugger"

const Sidebar = () => {
  const { isOpen, handleScroll, scrollToTop } = useGlobalContext()
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const variants = {
    hidden: { x: "-100%", opacity: 0.3 },
    visible: {
      opacity: [0, 0.2, 0.6, 0.8, 1],
      x: 0,
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: [1, 0.8, 0.5, 0.3, 0],
      x: "-100%",
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 0.5,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="exit"
          className={`fixed top-0 left-0 right-0 w-5/5 h-screen overflow-hidden backdrop-blur-sm z-50 container`}
        >
          <div className="flex items-end justify-end w-full p-16">
            <Hamburger />
          </div>

          <button onClick={scrollToTop}>Scrool to top</button>

          <motion.ul
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariant}
            className="pt-20 flex flex-col items-start justify-center gap-5 text-center text-[rgba(0,0,0,0.8)]  font-extrabold text-4xl"
          >
            <motion.li
              variants={itemVariant}
              whileHover={{ scale: 1.2, color: "black" }}
            >
              <a href="/">HOME</a>
            </motion.li>
            <motion.li
              variants={itemVariant}
              whileHover={{ scale: 1.2, color: "black" }}
            >
              <a href="/#packages" onClick={handleScroll}>
                PACKAGES
              </a>
            </motion.li>
            <motion.li
              variants={itemVariant}
              whileHover={{ scale: 1.2, color: "black" }}
            >
              <li>
                <a href="/#packages" onClick={handleScroll}>
                  ABOUT TRAINER
                </a>
              </li>
            </motion.li>
          </motion.ul>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
