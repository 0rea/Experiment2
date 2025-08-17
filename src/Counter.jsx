import React, { useState, useEffect } from 'react'; 

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ทำงาน!');
    document.title = `คุณกดไปแล้ว ${count} ครั้ง`;

  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>นับเลข (พร้อม Effect)</h3>
      <p>กดไปแล้ว: {count} ครั้ง</p>
      <button onClick={handleIncrement}>
        เพิ่มค่า +
      </button>
    </div>
  );
}

export default Counter;