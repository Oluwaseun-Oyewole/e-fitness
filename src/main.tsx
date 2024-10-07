import { AnimatePresence } from "framer-motion"
import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import AnimatedRoutes from "./components/custom/animated-routes-wrapper"
import Loading from "./components/custom/loading"
import { GlobalContextProvider } from "./context"
import "./index.css"
import routes from "./routes"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <AnimatedRoutes>
          <GlobalContextProvider>
            <RouterProvider router={routes} fallbackElement={<Loading />} />
          </GlobalContextProvider>
        </AnimatedRoutes>
      </AnimatePresence>
    </Suspense>
  </StrictMode>
)
