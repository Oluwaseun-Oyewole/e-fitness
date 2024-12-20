import { AnimatePresence, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import left from "../../../assets/svg/left arrow.svg"
import right from "../../../assets/svg/right arrow.svg"
import { useGlobalContext } from "../../../hooks"
import { models, socialsImages } from "../../../utils/constants"
import AnimatedSVGPath from "../../custom/animated/animatedText"
import CustomButton from "../../custom/button"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { changeGlobalColor } = useGlobalContext()
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (currentIndex === 2) {
      return changeGlobalColor("bg-white")
    }
    changeGlobalColor("bg-gray-50")
  }, [currentIndex, changeGlobalColor])

  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, {
    once: true,
  })
  const variants = {
    hidden: { opacity: 0.3, transform: "translateX(0px)" },
    visible: {
      opacity: [0, 0.2, 0.6, 1],
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === models.length - 1 ? 0 : prevIndex + 1
    //   )
    // }, 10000)
    // return () => clearInterval(interval)
  }, [])
  return (
    <section className="max-w-[95%] mx-auto xl:min-h-[88vh] w-full">
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.ul
            ref={ref}
            className="flex transition-transform ease-in-out duration-900"
            // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            exit={{ opacity: 0 }}
          >
            {models?.map((model, index) => {
              return (
                <li
                  key={index}
                  className={`relative flex-none w-full flex flex-col lg:flex-row lg:items-center lg:justify-center`}
                >
                  <div className=" md:w-4/5 xl:basis-[45%] order-3 lg:order-1 py-6 lg:py-0">
                    <motion.div
                      initial={{ y: "-50%", opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          // duration: 0.8,
                          damping: 5,
                          stiffness: 50,
                          // mass: 1,
                        },
                      }}
                      viewport={{
                        amount: "some",
                        once: false,
                      }}
                    >
                      <h1
                        className="font-bold text-2xl"
                        style={{ color: model.fill }}
                      >
                        {model.heading}
                      </h1>
                      <h1 className="font-extrabold text-4xl">{model.title}</h1>
                    </motion.div>
                    <motion.p
                      initial={{ y: "30%", opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          ease: "easeInOut",
                          duration: 0.8,
                        },
                      }}
                      viewport={{
                        amount: "some",
                        once: false,
                      }}
                      className="font-medium pt-5 text-sm leading-6 md:text-base lg:text-lg"
                    >
                      {model.details}
                    </motion.p>
                    <div className="pt-4 lg:pt-14 pb-2 md:pb-6">
                      <CustomButton
                        children="GET STARTED"
                        buttonType="custom"
                        fill={model.color}
                      />
                    </div>
                    <div className="my-4 flex items-center font-bold justify-between w-[45%]">
                      <button onClick={prev}>
                        <img
                          src={left}
                          alt={model.title}
                          className="w-[20px]"
                        />
                      </button>
                      <p>
                        {currentIndex} OF {models.length - 1}
                      </p>
                      <button onClick={next}>
                        <img
                          src={right}
                          alt={model.title}
                          className="w-[20px]"
                        />
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 items-center absolute bottom-4 md:bottom-8 right-0 lg:left-0 md:w-1/5">
                      {socialsImages?.map((src, index) => {
                        return (
                          <motion.img
                            src={src}
                            className="w-[18px] cursor-pointer"
                            key={index}
                            whileHover={{ scale: 1.3 }}
                          />
                        )
                      })}
                    </div>
                  </div>

                  <div className="h-full relative order-1 lg:order-2">
                    <img
                      src={model.modelImage}
                      alt={model.title}
                      className="w-full h-[50vh] md:h-[70vh] xl:h-[88vh] object-cover"
                    />
                  </div>

                  <div className="lg:w-[250px] basis-[10%] hidden xl:block order-3">
                    <AnimatedSVGPath fill={model.fill} />
                  </div>
                </li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Hero
