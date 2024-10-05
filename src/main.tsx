import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import routes from "./routes"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<p>Loading</p>}>
      <RouterProvider router={routes} fallbackElement={<p>Loading</p>} />
    </Suspense>
  </StrictMode>
)
