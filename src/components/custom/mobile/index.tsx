import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../../../hooks"

export const MobileNavigation = () => {
  const { mobileMenu, handleScroll } = useGlobalContext()
  const variants = {
    hidden: { x: "100%", opacity: 0.3 },
    visible: {
      opacity: [0, 0.2, 0.6, 0.8, 1],
      x: 0,
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 100,
        damping: 10,
      },
    },
    exit: { opacity: [1, 0.8, 0.5, 0.5, 0] },
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  //   const item = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1 },
  //   }

  return (
    <AnimatePresence>
      {mobileMenu && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="exit"
          className="fixed z-50 bg-white backdrop-blur-md right-0 top-[12vh] flex h-screen w-full items-center justify-center overflow-hidden shadow-md lg:hidden"
        >
          <motion.ul
            initial="hidden"
            animate="show"
            variants={container}
            className="mt-5 flex flex-col justify-center gap-5 text-center text-sm font-medium"
          >
            <ul className="">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/#packages" onClick={handleScroll}>
                  PACKAGES
                </a>
              </li>
              <li>
                <a href="/#packages" onClick={handleScroll}>
                  ABOUT TRAINER
                </a>
              </li>
            </ul>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
