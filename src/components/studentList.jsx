const StudentList = ({studentList,onDelete}) => {
  return (
    <div>
        <h2>Total Students: {studentList.length}</h2>
    { studentList.map((student)=>{
        return(
        <div className="student-item"  key={student.id}>
            <p> {student.name} </p> 
             <button className="delete-button" onClick={() => onDelete(student.id)}> 
                Delete
              </button>
        </div>
        )  
    })}
    </div>
  )
}
export default StudentList
