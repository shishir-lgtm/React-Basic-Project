import students from "./data/student.json"
import StudentList from "./components/studentList.jsx";
import './App.css'
import { useState,useEffect } from "react";

function App() {
  const [name,setName]=useState("")
  const[studentList,setStudentList]=useState(()=>{
    const savedStudents=localStorage.getItem("students");
  return savedStudents ? JSON.parse(savedStudents) : students;
  })
 
  const handleInput=(e)=>{
      setName(e.target.value)
  }
   
  const handleAddStudent=()=>{
    if (!name.trim()){
    return alert("input field is empty")
    }
    
    const newStudent={
    id:Date.now(),
    name:name
  }
  const duplicateStudentEntry=studentList.some((student)=>{
     return student.name.toLowerCase() === newStudent.name.trim().toLowerCase()
  })
  if(duplicateStudentEntry){
    return alert("student already exist")
  }
    setStudentList((students)=>{
     return  [...students,newStudent]
    })
    setName("")
  }
  const handleDeleteStudent = (id) => {
  setStudentList((students) => {
    return students.filter((student) => student.id !== id);
  });
};
  useEffect(()=>{
   console.log("Student List is changed")
     localStorage.setItem("students", JSON.stringify(studentList));
  },[studentList])
  return (
    <div className="app-container">
      <h1>Student List</h1>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleInput}
        placeholder="Enter name"
      />
      <button
        type="button"
        onClick={handleAddStudent}
      >
        Add Student
      </button>
      <StudentList 
      studentList={studentList}
      onDelete={handleDeleteStudent}
      />
    </div>
  )
}

export default App
