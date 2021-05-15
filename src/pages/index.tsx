import Button from '../components/Button'

export default function Homepage() {
  const onBoop = () => {
    // eslint-disable-next-line no-console
    console.log(`Boop`)
  }

  return (
    <div>
      <h1>Next TS Starter</h1>
      <p>Go on and build something ya filthy animal.</p>
      <Button onClick={onBoop}>Boop</Button>
    </div>
  )
}
