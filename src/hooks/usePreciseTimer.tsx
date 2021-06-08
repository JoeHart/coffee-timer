import { useState, useRef } from 'react'

export default function usePreciseTimer() {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [timeSinceStart, setTimeSinceStart] = useState(0)

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number | null>(null)

  const animate = () => {
    if (startTime != null) {
      setTimeSinceStart(performance.now() - startTime)
    }
    requestRef.current = requestAnimationFrame(animate)
  }

  const startTimer = () => {
    console.log({ startTime, ref: requestRef.current })
    if (startTime == null) {
      setStartTime(performance.now())
    }
    // Only start the animation if it doesn't already exist.
    if (requestRef.current === null) {
      requestAnimationFrame(animate)
    }
  }
  const pauseTimer = () => {
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current)
      requestRef.current = null
    }
  }

  const resetTimer = () => {
    setStartTime(null)
    setTimeSinceStart(0)
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current)
      requestRef.current = null
    }
  }

  return {
    startTime,
    start: startTimer,
    pause: pauseTimer,
    reset: resetTimer,
    timeSinceStart,
  }
}
