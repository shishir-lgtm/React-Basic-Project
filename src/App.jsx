import students from "./data/student.json"
import StudentList from "./components/studentList.jsx";
import './App.css'
import { useState,useEffect } from "react";

function App() {
  const [name,setName]=useState("")
  const[studentList,setStudentList]=useState(students)
 
  const handleInput=(e)=>{
      setName(e.target.value)
  }
   
  const handleAddStudent=()=>{
    const newStudent={
    id:Date.now(),
    name:name
  }
    setStudentList((students)=>{
     return  [...students,newStudent]
    })
    setName("")
  }
  useEffect(()=>{
   console.log("Student List is changed")
  },[studentList])
  return (
    <div className="app-container">
      <h1>Student List</h1>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleInput}
        placeholder="Enter name!"
      />
      <button
        type="button"
        onClick={handleAddStudent}
      >
        Add Student
      </button>
      <StudentList studentList={studentList}/>
    </div>
  )
}

export default App
