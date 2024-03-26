import { useState } from "react"

// 버튼 클릭하면 이름 변경
export default function MyComponent_08() {

  const [name, setName] = useState("Guest") // set default
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)
  const updateName = () => {
    setName("KAI")
  }
  const updateAge = () => {
    setAge(30)
  }
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>NAME: {name}</p>
      <button onClick={updateName}>SET NAME</button>
      <p>AGE: {age}</p>
      <button onClick={updateAge}>SET AGE</button>
      <p>IS EMPLOYED: {isEmployed?"yes":"no"}</p>
      <button onClick={toggleEmployedStatus}>TOGGLE STATUS</button>
    </div>
  )
}