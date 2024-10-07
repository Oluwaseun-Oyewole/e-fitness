import { useContext } from "react"
import { GlobalContext } from "../context"

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error("context must be used within a provider")
  }
  return context
}
