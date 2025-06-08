import React from "react";
import '../../src/App.css';

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const Deletehandler = (id) => {
    const filttertodo = todos.filter((todo) => todo.id !== id);
    settodos(filttertodo);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCoomleted: !todo.isCoomleted } : todo
    );
    settodos(updatedTodos);
  };

  const rendertodos = todos.map((todo) => (
    <li key={todo.id} className="todo-item">
      <input
        type="checkbox"
        checked={todo.isCoomleted}
        onChange={() => toggleCompleted(todo.id)}
        className=""
      />
      <span className={`task-text${todo.isCoomleted ? ' completed' : ''}`}>
        {todo.title}
      </span>
      <div className="actions">
        <button className="delete-btn" onClick={() => Deletehandler(todo.id)}>✖</button>
      </div>
    </li>
  ));

  return (
    <div className="todo-glass todo-glass-p">
      <ol className="todo-list">
        {rendertodos}
      </ol>
    </div>
  );
};

export default Read;

