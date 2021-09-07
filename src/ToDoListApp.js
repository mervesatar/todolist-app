import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import data from "./data.json";

function ToDoListApp() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };
  return (
    <div>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default ToDoListApp;
