import { useState, useEffect, useCallback } from "react"
import { throttle } from "../utils/throttle"

export const useScrollPosition = () => {
  const isBrowser = typeof window !== "undefined"
  const [position, setPosition] = useState(isBrowser ? window.scrollY : 0)

  const setScrollPosition = useCallback(() => {
    throttle(() => {
      setPosition(window.scrollY)
    }, 200)
  }, [])

  useEffect(() => {
    if (!isBrowser) return

    window.addEventListener("scroll", setScrollPosition)

    return () => {
      window.removeEventListener("scroll", setScrollPosition)
    }
  }, [isBrowser, setScrollPosition])

  return position
}
