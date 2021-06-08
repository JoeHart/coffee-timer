import React from 'react'
import Button from '../Button'
import usePreciseTimer from '../../hooks/usePreciseTimer'

export default function PreciseTimer() {
  const { start, timeSinceStart, pause } = usePreciseTimer()
  return (
    <div>
      <p>Timer: {timeSinceStart}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      {/* <Button onClick={reset}>Reset</Button> */}
    </div>
  )
}
