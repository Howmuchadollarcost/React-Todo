import React from "react";

function AddTodo(props) {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit} className="row">
        <input
          value={props.text}
          type="text"
          name="todo"
          className="input-field col s6 offset-s4"
          onChange={props.handleChange}
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default AddTodo;
