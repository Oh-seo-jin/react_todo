import { useState } from "react";

export default function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value
    setFoods(f => [...f, newFood])
    document.getElementById("foodInput").value = ""
  }

  function handleRemoveFood(index) {
    // 부분적으로 제거할 수 없음
    // 제거할 index와 일치하지 않는 요소만 filtering
    setFoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => 
          <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
        )}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add Food!</button>
    </div>
  )
}