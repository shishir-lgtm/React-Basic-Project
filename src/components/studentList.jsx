
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateStudentName } from "../utility/studentValidation";
import { addStudent,deleteStudent } from "../store/studentSlice";
 const StudentList = () => {

  const [name, setName] = useState("");

  const studentList = useSelector(
    (state) => state.students
  );

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setName(e.target.value);
  };

const handleAddStudent = () => {

  const validation = validateStudentName(name, studentList);

  if (!validation.isValid) {
    return alert(validation.message);
  }

  const newStudent = {
    id: Date.now(),
    name: validation.value
  };

  dispatch(addStudent(newStudent));

  setName("");
};

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>

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

      <h2>Total Students: {studentList.length}</h2>

      {studentList.map((student) => (
        <div
          className="student-item"
          key={student.id}
        >
          <p>{student.name}</p>

          <button
            className="delete-button"
            onClick={() => handleDeleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
};

export default StudentList;
