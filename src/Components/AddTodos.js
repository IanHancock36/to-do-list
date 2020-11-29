import React, { Component } from "react";
import PropTypes from 'prop-types'; 


export class AddTodos extends Component {
  state = {
    title: " ",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodos(this.state.title);
    this.setState({title:''});
  }
  // below this will give us whatever we type in. and target it. 
  onChange =(e) => this.setState({title: e.target.value }); 
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          style={{ flex: "10", padding: "10px" }}
          name="title"
          placeholder="Add Todo...."
          value ={this.state.title}
          onChange ={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

AddTodos.propTypes = {
  addTodos: PropTypes.func.isRequired
}
export default AddTodos;
