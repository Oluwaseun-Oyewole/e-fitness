import { AnimatePresence } from "framer-motion"
import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import AnimatedRoutes from "./components/animated-routes-wrapper"
import Loading from "./components/loading"
import "./index.css"
import routes from "./routes"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <AnimatedRoutes>
          <RouterProvider router={routes} fallbackElement={<Loading />} />
        </AnimatedRoutes>
      </AnimatePresence>
    </Suspense>
  </StrictMode>
)
