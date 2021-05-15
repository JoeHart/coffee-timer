import * as React from 'react'
import Button from '../components/Button'

export default function Homepage() {
  const [boops, setBoops] = React.useState(0)
  const onBoop = () => {
    // eslint-disable-next-line no-console
    console.log(`Boop`)
    setBoops((b) => b + 1)
  }
  return (
    <div>
      <h1>Next TS Starter</h1>
      <p>Go on and build something ya filthy animal.</p>
      <Button onClick={onBoop}>Boop</Button>
      <p>Boop-o-meter: {boops}</p>
    </div>
  )
}
