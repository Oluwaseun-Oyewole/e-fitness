import { motion } from "framer-motion"
import Feature1 from "../../../assets/svg/feature-1.svg"
import Feature2 from "../../../assets/svg/feature-2.svg"
import Feature3 from "../../../assets/svg/feature-3.svg"
import Feature4 from "../../../assets/svg/feature-4.svg"
import Feature5 from "../../../assets/svg/feature-5.svg"
import Feature from "../../../assets/svg/feature.svg"

const images = [Feature, Feature1, Feature2, Feature3, Feature4, Feature5]
const Features = () => {
  return (
    <motion.div
      className="h-[157px] text-center flex flex-col items-center justify-center gap-7"
      initial={{ y: 30 }}
      whileInView={{
        y: 0,
        transition: { ease: "easeInOut", type: "tween", duration: 0.7 },
      }}
      viewport={{
        amount: "some",
        once: false,
      }}
    >
      <motion.h1 className="opacity-60 text-lg">
        Features and Mentioned On:
      </motion.h1>

      <motion.div className="flex gap-5 items-center justify-between w-4/5 overflow-x-scroll">
        {images?.map((src, index) => {
          return (
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.44, 0, 0, 1],
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              src={src}
              alt={`feature-${index}`}
              className="w-[100px] md:w-[150px] md:h-[32px]"
            />
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Features
