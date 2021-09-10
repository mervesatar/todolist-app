import "./App.css";
import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoListApp({ toDoList, id, handleChange }) {
  console.log(toDoList);
  const handleToggle = (todoId) => {
    /**Id comes from todo after if there is a change on the completed boolean*/
    /**Looks at  todolist and if the given id is equal to the id in the map, it changes the value in the todo structure.*/
    let mapped = toDoList.map((task) => {
      return Number(task.id) === Number(todoId)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    toDoList = [...mapped];
    handleChange(id, toDoList);
  };
  const [state, setState] = useState();
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...toDoList,
      { id: toDoList.length, task: userInput, complete: false },
    ];
    // console.log("önce");
    // console.log(toDoList);
    toDoList = [...copy];
    setState(state);
    // console.log("sonra");
    // console.log(toDoList);
    // console.log("önce handle");
    handleChange(id, toDoList);
    // console.log("sonra handle");
    // console.log(toDoList);
  };

  return (
    <div>
      <div>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} handleToggle={handleToggle} />;
        })}
      </div>
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default ToDoListApp;
