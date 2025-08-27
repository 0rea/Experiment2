// src/Welcome.jsx

// รับ props เป็น parameter ของฟังก์ชัน
function Welcome({name}) {
  // เข้าถึงค่า props ผ่าน props.ชื่อprops
  return <h2>ยินดีต้อนรับ, {name}!</h2>;
}

// หรือใช้ Destructuring (นิยมกว่า)
// function Welcome({ name }) {
//   return <h2>ยินดีต้อนรับ, {name}!</h2>;
// }

export default Welcome;