import React from 'react'
import Button from '../Button'
import useTimer from '../../hooks/useTimer'

export default function Timer() {
  const { start, pause, reset, formatTime } = useTimer()
  return (
    <div>
      <p>Timer: {formatTime()}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}
