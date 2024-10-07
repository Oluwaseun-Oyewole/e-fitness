import { PropsWithChildren, useEffect } from "react"
import { withRouter } from "../components/custom/router"

const ScrollToTop = ({
  children,
  location: { pathname },
}: {
  location: { pathname: string }
} & PropsWithChildren) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return children || null
}

export default withRouter(ScrollToTop)
