// store.js

import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import studentsReducer from "./studentSlice";
import { addStudent, deleteStudent } from "./studentSlice";
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: (action) => addStudent.match(action) || deleteStudent.match(action),

  effect: async (action, listenerApi) => {
    const students = listenerApi.getState().students;

    localStorage.setItem("students", JSON.stringify(students));
  },
});

const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
