import React from 'react';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
           <FormControlLabel  className={todo.complete ? "todo strike" : "todo"}
        control={  <Checkbox id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id}
        checked={todo.complete}
        onChange={handleClick}
        inputProps= {todo.task}
      />
}
        label={todo.task}
      />
   
        </div>
       
        
          
    );
};

export default ToDo;