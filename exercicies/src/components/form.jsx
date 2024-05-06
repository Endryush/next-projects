import { useState } from "react"

export default function form () {
  const[value, setValue] = useState('')
  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      {value}
    </div>
  )
}