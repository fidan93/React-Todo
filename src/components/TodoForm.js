import React from "react";

class TodoForm extends React.Component {

    constructor(){
      super();
      this.state = {
          add: "",
          search: ""
      }
    }

    handleChange= (e) =>{
        const{name,value}=e.target;
        if(e.target.name === "search"){this.props.handleSearch(e.target.value)}
        this.setState({...this.state,[name]: value}) 
    }

    handleSubmit = (e) => {
     e.preventDefault();
     this.props.handleAdd(this.state.add);
     this.setState({ add:""});
    }

    search = (e) => {
      
        this.props.handleSearch(this.state.search)
    }

    render(){

    //console.log(this.state.search)
        return (<>
            <form onSubmit ={this.handleSubmit}>
                <label>
                    Enter Task:
                    <input type="text" name="add" onChange={this.handleChange} value = {this.state.add }></input>
                    
                </label>
                <button>Add</button>
                <br/>
              
            </form>
              <label>
              Search Task:
              <input type="text" name ="search" onChange={this.handleChange} value = {this.state.search }></input>
              
          </label>
          <button onClick={this.search}>Search</button></>
        )
    }
}

export default TodoForm;