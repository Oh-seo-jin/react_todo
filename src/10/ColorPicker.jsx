import { useState } from "react";
import './ColorPicker.css'

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e){
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="color">Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} id="color"/>
    </div>
  )
}