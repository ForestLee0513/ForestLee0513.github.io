import { useState, useEffect, useCallback } from "react"

export const useScrollPosition = () => {
  const isBrowser = typeof window !== "undefined"
  const [position, setPosition] = useState(0)

  const setScrollPosition = useCallback(() => {
    setPosition(window.scrollY)
  }, [])

  useEffect(() => {
    if (!isBrowser) return

    setPosition(window.scrollY)
    window.addEventListener("scroll", setScrollPosition)

    // cleanup
    return () => {
      setPosition(0)
      window.removeEventListener("scroll", setScrollPosition)
    }
  }, [isBrowser, setScrollPosition])

  return position
}
