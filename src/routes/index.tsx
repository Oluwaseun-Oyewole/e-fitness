import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/errors"
import { Home, Packages } from "./lazy"
import { Routes } from "./routes"

const routes = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.packages,
    element: <Packages />,
    errorElement: <ErrorPage />,
  },
])

export default routes
