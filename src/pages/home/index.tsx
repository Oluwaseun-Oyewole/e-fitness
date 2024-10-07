import { motion } from "framer-motion"
import Wrapper from "../../components/custom/wrapper"
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
      </motion.section>
    </Wrapper>
  )
}
