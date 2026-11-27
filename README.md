# Student Management App

## Overview

A React application built with Vite and Redux Toolkit to manage student records with add, delete, input validation, and LocalStorage persistence.

## Features

- Add and delete students.
- Display student list and total count.
- Validate empty, invalid, and duplicate names.
- Persist student data using LocalStorage.
- Load saved data after page refresh.

## Tech Stack

- React.js
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- CSS
- LocalStorage

## Concepts Practiced

- React Hooks: `useState`, `useSelector`, `useDispatch`.
- Redux Store, Slice, Actions, and Reducers.
- Redux Listener Middleware for side effects.
- Input validation using regular expressions.
- Array and string methods.
- LocalStorage and JSON methods.

## Project Structure

```text
src/
├── components/
│   └── studentList.jsx
├── data/
│   └── student.json
├── store/
│   ├── store.js
│   └── studentSlice.js
├── utils/
│   └── studentValidation.js
├── App.jsx
└── main.jsx
```

## Data Flow

```text
User Interaction
       |
       v
StudentList.jsx
       |
       v
Input Validation
       |
       v
Dispatch Action
       |
       v
Redux Reducer
       |
       v
Redux Store
       |
       v
Listener Middleware
       |
       v
LocalStorage
```

- **StudentList:** Handles UI and user interactions.
- **Validation:** Checks input and duplicate names.
- **Slice:** Manages student state and actions.
- **Store:** Configures Redux and Listener Middleware.
- **Middleware:** Saves updated state to LocalStorage.

## Screen Recording

[Watch the Student Management App Demo]
https://drive.google.com/file/d/1xbcZxXPEfK4EfiRk9rRC1JdM5dhc3L1P/view?usp=drivesdk
