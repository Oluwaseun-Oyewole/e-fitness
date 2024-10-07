import { motion } from "framer-motion"
import Wrapper from "../../components/custom/wrapper"
import Hero from "../../components/ui/hero"
import Packages from "../../components/ui/packages"

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
        <Packages />
      </motion.section>
    </Wrapper>
  )
}
