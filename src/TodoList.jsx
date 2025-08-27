// src/TodoList.jsx
import React from 'react';

function TodoList({ todos, deleteTodo }) { // รับ todos และ deleteTodo มาจาก props
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;