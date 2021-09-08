import "./App.css";
import ToDo from "./ToDo";
import React from "react";
/**Here the todolist is mapped and its todo values is written via the ToDo function*/

const ToDoList = ({ toDoList, handleToggle }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}
    </div>
  );
};

export default ToDoList;
