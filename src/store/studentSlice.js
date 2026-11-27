import { createSlice } from "@reduxjs/toolkit";
import students from "../data/student.json";

const loadStudents = () => {
  try {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      const parsedStudents = JSON.parse(savedStudents);

      return Array.isArray(parsedStudents) ? parsedStudents : students;
    }

    return students;
  } catch {
    return students;
  }
};

const initialState = loadStudents();

const studentsSlice = createSlice({
  name: "students",
  initialState,

  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },

    deleteStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
