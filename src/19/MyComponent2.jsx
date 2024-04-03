import { useState, useRef, useEffect } from "react"

export default function MyComponent() {
  const [count, setCount] = useState(0)
  const [renderCount, setRenderCount] = useState(0)
  const renderRef = useRef(0)

  useEffect(() => {
    console.log("렌더링:", renderCount)
    console.log("렌더링:", renderRef.current)
    // setRenderCount(renderCount + 1)
    renderRef.current = renderRef.current + 1
  })

  return (
    <>
      <p>State: {count}</p>
      <p>render State: {renderCount}</p>
      <p>Ref: {renderRef.current}</p>
      <button onClick={() => setCount(count+1)}>State increase</button>
    </>
  )
}