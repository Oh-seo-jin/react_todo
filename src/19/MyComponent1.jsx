import { useState, useRef } from "react"

export default function MyComponent() {
  const [count, setCount] = useState(0) // render
  const countRef = useRef(0)            // no-render
  let countVar = 0                      // no-render

  // 실시간 변화
  const incrementState = () => {
    setCount(count + 1)
    console.log("State:",count)
    console.log("Ref:", countRef.current)
    console.log("Var:",countVar)
  }

  // 렌더링 안되고 변수값 유지
  const incrementRef = () => {
    countRef.current = countRef.current + 1
    console.log("State:",count)
    console.log("Ref:", countRef.current)
    console.log("Var:",countVar)
  }

  // 렌더링 안되고 변수값 초기화
  const incrementVar = () => {
    countVar++
    console.log("State:",count)
    console.log("Ref:", countRef.current)
    console.log("Var:",countVar)
  }

  return(
    <div>
      <p>State: {count} <button onClick={incrementState}>state increse</button></p>
      <p>Ref: {countRef.current} <button onClick={incrementRef}>ref increse</button></p>
      <p>Var: {countVar} <button onClick={incrementVar}>var increse</button></p>
    </div>
  )
}