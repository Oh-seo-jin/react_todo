import { useState } from "react";
import "./Counter.css"

export default function Counter() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(c => c + 1)
    setCount(c => c + 1) 
    // 두개씩 올라가지 않네? 
    // => 위의 count 현재값이 렌더링 전까지는 변화가 없기 때문
    // setCount는 어차피 count 변수 처리하기 때문에 이름은 큰 상관X
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  )

}
