import { motion } from "framer-motion"

export default function Home() {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home component"
    >
      <h1> Home Component </h1>
    </motion.div>
  )
}
