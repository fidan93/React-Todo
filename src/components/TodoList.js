// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
   
    return(
        <div>
            {props.todos.map(task => (
        
             <Todo key={task.id}  task={task} handleToggle = {props.handleToggle}/>   
            ))}

          <button onClick={props.handleCompleted}>Clear task</button>
        </div>
    )
}

export default TodoList;