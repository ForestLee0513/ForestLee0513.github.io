let timer = null

export const throttle = (callback, delay) => {
  if (!timer) {
    timer = setTimeout(() => {
      callback()
      timer = null
    }, delay)
  }
}
