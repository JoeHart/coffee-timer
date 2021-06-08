import { useState, useRef } from 'react'

export default function useTimer() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimer = () => {
    setIsActive(false)
    setSeconds(0)
  }

  const pauseTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      setIsActive(false)
    }
  }

  const startTimer = () => {
    setIsActive(true)
    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }

  const formatTime = () => {
    const getSeconds = `0${seconds % 60}`.slice(-2)
    const minutes = Math.floor(seconds / 60)
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return {
    formatTime,
    reset: resetTimer,
    start: startTimer,
    pause: pauseTimer,
  }
}
