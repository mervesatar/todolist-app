import React from "react";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div>
      <FormControlLabel
        className={todo.complete ? "todo strike" : "todo"}
        control={
          <Checkbox
            id={todo.id}
            key={todo.id + todo.task}
            name="todo"
            value={todo.id}
            /**When the Checkbox changed, todo's completed boolean changes. */

            checked={todo.complete}
            /**This handle the changes. */

            onChange={handleClick}
            /**The text of the checkbox.*/

            inputProps={todo.task}
          />
        }
        label={todo.task}
      />
    </div>
  );
};

export default ToDo;
