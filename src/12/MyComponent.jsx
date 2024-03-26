import { useState } from "react";

export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e) {
    setCar((car) => ({ ...car, year: e.target.year }));
    // ...은 car object를 의미함
    // ... == {year: 2024, make: "Ford", model: "Mustang", }
    // 같은 키값에 새로운 값으로 덮어쓰기 하는 원리
    // 풀어쓰면 car => ({year: 2024, make: "Ford", model: "Mustang", year: e.target.year})
  }

  function handleMakeChange(e) {
    setCar((car) => ({ ...car, make: e.target.make }));
  }

  function handleModelChange(e) {
    setCar((car) => ({ ...car, model: e.target.model }));
  }

  return (
    <div>
      <p>
        Your favorite car is : {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} /><br/>
      <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
      <input type="text" value={car.model} onChange={handleModelChange} /><br/>
    </div>
  );
}
