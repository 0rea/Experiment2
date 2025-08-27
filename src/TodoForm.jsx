// src/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ addTodo }) { // รับฟังก์ชัน addTodo มาจาก props
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันไม่ให้ฟอร์ม refresh หน้า
    if (!inputValue.trim()) return; // ไม่เพิ่มถ้าค่าว่าง
    addTodo(inputValue);
    setInputValue(''); // ล้างค่าใน input field
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="เพิ่มรายการใหม่..."
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
}

export default TodoForm;