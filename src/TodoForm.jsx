import React, { useState, useContext } from 'react'; 
import { TodoContext } from './contexts/TodoContext'; 

function TodoForm() { 
  const { addTodo } = useContext(TodoContext); 
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="List"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;