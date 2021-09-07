import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { GrFormClose} from 'react-icons/gr';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {
  BrowserRouter,

  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ToDoListApp from "./ToDoListApp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
function Home() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name == "firstName") {
      setName(event.target.value);
    } else if (event.target.name == "lastName") {
      setSurname(event.target.value);
    }
  };
  let history = useHistory();
  const HandleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);

    history.push("/about");
  };

  return (
    <div className="inputField">
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleInputChange} />
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={handleInputChange} />
        <div>
          <button type="submit" onClick={HandleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function About(props) {
  const useStyles = makeStyles({
    root: {
      width: 200,
      height: 350,
      backgroundColor: "#cdc0ff",
      padding: "10px",
      position: "absolute",
      display: "flex",
      top: "0px",

      flex: "auto",
      flexDirection: "column",
      margin: "auto",
    },
    button: {
      width: 80,
      height: 40,
      backgroundColor: "#cdc0ff",
      padding: "10px",

      display: "flex",
      flex: "auto",
      flexDirection: "column",
      margin: "auto",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 10,
      alignItems: "center",
    },
    media: {
      margin: "auto",
      width: 100,
      height: 0,
      alignItems: "center",
      paddingTop: "50%", // 16:9
      borderRadius: 100 / 2,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const [items , setItems] = useState([{"id":0}]);
  let ID=null;
const generateID=()=>{
ID=Math.floor(Math.random() * 39399393);
}


  const removeTodoCard = (todoCardId) => {
    console.log("sile basıldı");

    // let index=items.findIndex(id => id === todoCardId);
    // let newList=items.splice(index+2,1);
    setItems(items.filter((item) => item.id !== Number(todoCardId)));

      
       
  
   };

   
const addItem = () => {
generateID();
let copy = [...items];
copy = [...copy, { id: Math.floor(Math.random() * 39399393)}];
setItems(copy);
// setItems(oldArray => [...oldArray, {id:ID,
// content:<ToDoListApp id={ID} removeTodoCard={removeTodoCard} />}]);

  };



  return (
    <div>
      
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="./image.jpg" />
        <CardContent>
          <Typography
            className={classes.title}
            color="primary"
            gutterBottom
          >
            {localStorage.getItem("name")} {localStorage.getItem("surname")}
          </Typography>
          <Typography variant="h5" component="h2">
            To Do List
          </Typography>
        </CardContent>
      </Card>
      <div>
     
                  <TodoCard items={items} removeTodoCard={removeTodoCard} />
              
        
               
      </div>
    
<Card className={classes.button}>
        <CardActions>
          <Button size="small" color="primary" onClick={addItem}>
            Create
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

function TodoCard({items,removeTodoCard}) {
useEffect(() => {
console.log("value changed");
  }, [items.length]);
  
  return(  
    <div>
        { items.map( item =>{
      return(
     <div  className="container"> 
    <div className="todo-icons">
   <GrFormClose   id={item.id}
   className="todo-icon"
   onClick={(e)=>removeTodoCard(e.currentTarget.id)}
  /> 
  </div>
 <ToDoListApp/>
  </div> 
    )})}
    </div>
 
  
  );
  }
export default App;
