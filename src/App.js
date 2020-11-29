import React, { Component } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodos from "./Components/AddTodos";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Mow the yard",
        completed: false,
      },
      {
        id: 3,
        title: "Paint the trim",
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo =(id) =>{
    this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !==id)]});
  }




  addTodos =(title) =>{
   const newTodo ={
     id: 4,
     title: title, 
     completed: false 
   }
    this.setState({todos: [...this.state.todos, newTodo] });
}
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodos addTodos ={this.addTodos} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
