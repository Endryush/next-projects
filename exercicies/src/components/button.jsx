function action1() {
  console.log('Action 1')
}

export default function Button () {
  return (
    <div>
      <button onClick={action1}>Click me</button>
    </div>
  )
}