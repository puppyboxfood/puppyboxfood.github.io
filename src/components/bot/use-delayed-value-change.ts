import React, { useEffect, useState } from "react"

const waitTime = 1500

export default (onChange) => {
  const [value, setValue] = useState()
  const [percentage, setPercentage] = useState()
  const [timeoutRef, setTimeoutRef] = useState()

  useEffect(() => {
    if (value) {
      if (timeoutRef) {
        clearTimeout(timeoutRef.timeout)
        clearInterval(timeoutRef.interval)
      }
      const waitUntil = (new Date()).getTime() + waitTime
      const interval = setInterval(() => {
        if (waitUntil) {
          const percent = (waitTime - (waitUntil - (new Date()).getTime())) / waitTime
          setPercentage(Math.round(percent * 100))
        }
      }, 10)
      const timeout = setTimeout(() => {
        onChange(value)
      }, waitTime)

      setTimeoutRef({timeout, interval})
    }
  }, [value])

  useEffect(() => {

    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef.timeout)
        clearInterval(timeoutRef.interval)
      }
    }
  }, [])

  return [value, setValue, percentage]
}
