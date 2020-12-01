import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggle(props.task.id);
    }
    return (
         <div onClick={handleClick}>
          <p>{props.task.task}:{props.task.completed ? "completed":"is not completed"}</p>  
        </div>
    )
}
export default Todo;