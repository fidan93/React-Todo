import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: 'Cook meal',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
  ,
  {
    task:"complete the project",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {todos}
  }

  handleAdd = (todo)=>{
this.setState({
 todos: [...this.state.todos,{task: todo, id: Date.now(),completed: false}] 
})
  }

  handleCompleted = () => {
    const newTask = this.state.todos.filter(task=>{
      return(!task.completed)
    })
    this.setState({
      todos: newTask
    })
  }

  handleToggle =(taskId) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if(taskId === task.id){
          return ({
            ...task,
            completed: !task.completed
          })
        }
        else{
          return task;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList todos = {this.state.todos} handleToggle = {this.handleToggle} handleCompleted={this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
