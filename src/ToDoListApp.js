import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import data from "./data.json";

function ToDoListApp() {
  const [toDoList, setToDoList] = useState(data);
  /**Data is the json file for just to try out the code. It can be empty. */
  const handleToggle = (id) => {
    /**Id comes from todo after if there is a change on the completed boolean*/
    /**Looks at  todolist and if the given id is equal to the id in the map, it changes the value in the todo structure.*/

    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  /**This add the new todo that comes from todoform.*/

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
