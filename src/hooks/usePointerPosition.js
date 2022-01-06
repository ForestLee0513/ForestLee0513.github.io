import { useState, useEffect, useCallback } from "react"

export const usePointerPosition = fromCenter => {
  const isBrowser = typeof window !== "undefined"
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const setMousePosition = useCallback(event => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    if (fromCenter) {
      setPosition({
        x: event.clientX - centerX,
        y: event.clientY - centerY,
      })
    } else {
      setPosition({
        y: event.clientY,
        x: event.clientX,
      })
    }
  }, [])

  useEffect(() => {
    if (!isBrowser) return

    setPosition(window.scrollY)
    window.addEventListener("mousemove", setMousePosition)

    // cleanup
    return () => {
      setPosition({
        x: 0,
        y: 0,
      })
      window.removeEventListener("mousemove", setMousePosition)
    }
  }, [isBrowser, setMousePosition])

  return position
}
