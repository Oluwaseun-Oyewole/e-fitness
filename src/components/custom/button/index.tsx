import { motion } from "framer-motion"
import { type ButtonHTMLAttributes, type PropsWithChildren } from "react"

type ButtonType = "default" | "primary" | "secondary" | "custom"
const CustomButton = ({
  children,
  buttonType = "default",
  fill,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    buttonType?: ButtonType
    fill?: string
  }) => {
  const styles = (buttonType: ButtonType) => {
    switch (buttonType) {
      case "primary":
        return "!bg-primary500 hover:!bg-purple-700 !py-4 lg:!py-5 !text-xs"
      case "secondary":
        return "!bg-black hover:!text-orange300"
      case "custom":
        return `${fill} rounded-xl text-white font-medium oswald group relative flex h-[56px] w-[180px] items-center justify-center gap-3 overflow-hidden rounded-xl md:h-[65px] md:w-[250px]`
      default:
        return `bg-black`
    }
  }
  return (
    <button className={styles(buttonType)} {...rest}>
      <motion.div className="absolute left-0 bottom-0 right-0 z-10 w-[0px] group-hover:w-full rounded-xl bg-black transition-all mx-auto duration-500 ease-in-out h-full" />
      <span
        className={`z-20 group-hover:text-gray-100 transition-all mx-auto duration-500 ease-in-out`}
      >
        {children}
      </span>
    </button>
  )
}

export default CustomButton
