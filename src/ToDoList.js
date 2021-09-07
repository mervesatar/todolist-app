import "./App.css";
import ToDo from "./ToDo";
import React from "react";

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
