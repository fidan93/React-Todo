import React from "react";
import '../index.css'
const Todo = props => {
    const handleClick = () => {
        props.handleToggle(props.task.id);
    }
    return (
         <div onClick={handleClick} className ={`item ${props.task.completed ? "completed":""}`}>
          <p>{props.task.task}:{props.task.completed ? "completed":"is not completed"}</p>  
        </div>
    )
}
export default Todo;