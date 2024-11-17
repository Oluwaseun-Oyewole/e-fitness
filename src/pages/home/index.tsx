import { motion } from "framer-motion"
import Wrapper from "../../components/custom/wrapper"
import Features from "../../components/ui/features"
import Hero from "../../components/ui/hero"

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
    <Wrapper>
      <motion.section
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="container"
      >
        <Hero />
        <Features />
      </motion.section>
    </Wrapper>
  )
}
