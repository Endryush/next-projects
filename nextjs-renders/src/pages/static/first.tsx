import { useEffect, useState } from "react"

export default function First () {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(Math.random())
  }, [])
  return (
    <div>
      <h2>Static Content 1</h2>
      <p>This is some static content for the first page of my site.</p>
      <p>
        Dont need anything, but const num need to be SSR, try to delete all mentions about num and this file run SSG
      </p>
      {num}
    </div>
  )
}