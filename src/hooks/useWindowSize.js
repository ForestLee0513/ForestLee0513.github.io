import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const isBrowser = typeof window !== "undefined"
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0)

  useEffect(() => {
    if (!isBrowser) return

    const setWindowSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", setWindowSize)

    return () => {
      window.removeEventListener("resize", setWindowSize)
    }
  }, [isBrowser])

  return {
    width,
    height,
  }
}
