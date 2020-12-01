import React from "react";

class TodoForm extends React.Component {

    constructor(){
      super();
      this.state = {
          textInput: ""
      }
    }

    handleChange= (e) =>{
     this.setState({textInput: e.target.value})
    }

    handleSubmit = (e) => {
     e.preventDefault();
     this.props.handleAdd(this.state.textInput);
     this.setState({ textInput:""});
    }

    render(){
        return (
            <form onSubmit ={this.handleSubmit}>
                <label>
                    Enter Task:
                    <input type="text" onChange={this.handleChange} value = {this.state.textInput }></input>
                    <button>Add</button>
                </label>
            </form>
        )
    }
}

export default TodoForm;