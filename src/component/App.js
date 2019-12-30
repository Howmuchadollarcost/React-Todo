import React, { Component } from "react";
import AddTodo from "../container/AddTodo";
import Todo from "../component/Todo";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    todos: []
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      text: this.state.text,
      done: false
    };
    if (newTodo.text !== "") {
      let newTodos = [...this.state.todos, newTodo];
      this.setState({
        text: "",
        todos: newTodos
      });
    }
    e.target.reset();
  };

  removeTodo = i => {
    let temp = [...this.state.todos];
    temp.splice(i, 1);
    this.setState({
      todos:temp
    })
  };

  done = i => {
    let tempTodos = [...this.state.todos];
    tempTodos[i] = { ...tempTodos[i] };
    tempTodos[i].done = !tempTodos[i].done;
    this.setState({
      todos: tempTodos
    });
  };

  render() {
    const listTodos = this.state.todos.map((todo, index) => (
      <Todo
        text={todo.text}
        key={index}
        compeleted={todo.done}
        index={index}
        done={this.done.bind(this)}
        remove={this.removeTodo.bind(this)}
      />
    ));
    return (
      <div className="app">
        <AddTodo
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ul className="todos row">{listTodos}</ul>
      </div>
    );
  }
}

export default App;
