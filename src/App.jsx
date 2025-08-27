// src/App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css'; // import css เพื่อความสวยงาม

function App() {
  // State หลักสำหรับเก็บรายการ todos ทั้งหมด
  const [todos, setTodos] = useState([
    { id: 1, text: 'เรียนรู้ React Hooks', completed: false },
    { id: 2, text: 'ทำ Mini Project', completed: false },
  ]);

  // ฟังก์ชันสำหรับเพิ่ม todo ใหม่ (จะส่งไปให้ TodoForm ผ่าน props)
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // ใช้ timestamp เป็น id ชั่วคราว
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // เพิ่ม todo ใหม่เข้าไปใน array เดิม
  };

  // ฟังก์ชันสำหรับลบ todo (จะส่งไปให้ TodoList ผ่าน props)
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;