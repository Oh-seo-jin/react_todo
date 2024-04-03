import { useEffect, useRef } from "react"

export default function MyComponent() {
  const inputRef = useRef()

  // 실행 시 input에 focus
  useEffect(() => {
    console.log("Focus:", inputRef)
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`hello! ${inputRef.current.value}~`)
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  const handleOnKeyDown = (e) => {
    if (e.key == "Enter"){
      console.log("Enter")
      login()
    }
  }

  return (
    <div>
      <input type="text" placeholder="write username" ref={inputRef} onKeyDown={handleOnKeyDown}/>
      <button onClick={login}>Login</button>
    </div>
  )
}