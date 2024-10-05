import { useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState<T | null>(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(url, {
          method: "GET",
          cache: "force-cache",
          signal: controller.signal,
        })
        const data = await response.json()
        if (isMounted) {
          setData(data)
        }
      } catch (error) {
        if (error instanceof Error && !controller.signal) {
          setError(error.message as T)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return {
    loading,
    data,
    error,
  }
}
