import React from "react";

class Todo extends React.Component {

    done(){
      this.props.done(this.props.index);
    }

  render() {
    return (
      <div className="todo row">
        <li
        className= {"col s6 offset-s4 "  + (this.props.compeleted ? 'line' : 'noline' )}
         onClick={this.done.bind(this)} key={this.props.text}>{this.props.text}</li>
        <button className="btn btn-small col" onClick={() => this.props.remove(this.props.index)}>Done</button>
      </div>
    );
  }
}




export default Todo;
