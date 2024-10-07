import { createContext, PropsWithChildren, useState } from "react"

interface ContextType {
  globalColor: string
  changeGlobalColor: (color: string) => void
  isOpen: boolean
  toggle: () => void
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  scrollToTop: VoidFunction
}

export const GlobalContext = createContext<ContextType | undefined>(undefined)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [globalColor, setGlobalColor] = useState<string>("bg-gray-50")
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const changeGlobalColor = (color: string) => {
    return setGlobalColor(color)
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <GlobalContext.Provider
      value={{
        globalColor,
        changeGlobalColor,
        isOpen,
        toggle,
        handleScroll,
        scrollToTop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
