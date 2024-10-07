import React, { ReactNode } from "react"
import { useGlobalContext } from "../../../hooks"
import Footer from "../../ui/footer"
import Header from "../../ui/header"

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { globalColor, isOpen } = useGlobalContext()
  return (
    <React.Fragment>
      <main
        className={`h-screen overflow-y-scroll ${globalColor} ${isOpen && "opacity-80"}`}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Wrapper
