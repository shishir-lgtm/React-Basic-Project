const StudentList = ({studentList}) => {
  return (
    <div>
    { studentList.map((student)=>{
        return(
        <div className="student-item"  key={student.id}>
            <p> {student.name} </p> 
        </div>
        )  
    })}
    </div>
  )
}
export default StudentList
