import { useState } from "react";
import "./ToDoList.css"

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    "Wake up at 6:00 AM",
    "Eat Breakfaset",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("")

  function handleInputChange(e){
    setNewTask(e.target.value)
  }

  function addTask() {
    if(newTask.trim() != "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    } 
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_,i) => i !== index) // 참이 나오면 선택, 거짓이 나오면 탈락
    setTasks(updatedTasks)
  }

  function moveTaskUp(index){
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] 
      = [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks)
      console.log(updatedTasks)
    }
  }

  function moveTaskDown(index){
    if (index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] 
      = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks)
      console.log(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div className="input-box">
        <input type="text" placeholder="enter a task" value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => 
        <li key={index} className="to-do-task">
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>Up👆🏻</button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>Down👇🏻</button>
        </li>
        )}
      </ol>
    </div>
  );
}
