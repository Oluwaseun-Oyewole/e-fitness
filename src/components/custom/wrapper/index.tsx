import React, { ReactNode } from "react"
import Footer from "../../ui/footer"
import Header from "../../ui/header"

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <main className="min-h-screen overflow-y-scroll overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Wrapper
