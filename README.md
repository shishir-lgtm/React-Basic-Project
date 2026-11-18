# Student Management App

## Overview

A simple Student Management application built using React.js and Vite. It allows users to manage a list of students with add and delete functionality.

## Features

- **Display Students:** Displays the list of students using the `StudentList` component.
- **Add Student:** Adds a new student using an input field and button.
- **Delete Student:** Removes a student from the list using the Delete button.
- **Student Count:** Displays the total number of students.
- **LocalStorage Integration:** Saves student data in LocalStorage so the data persists after refreshing the page.
- **useEffect:** Tracks changes in the student list and synchronizes the updated data with LocalStorage.

## Concepts Practiced

- React `useState` hook for state management.
- React `useEffect` hook for handling side effects.
- Props for passing data and functions from parent to child components.
- Array methods: `map()`, `filter()`, and spread operator.
- Lazy initialization of state.
- LocalStorage methods: `getItem()` and `setItem()`.
- JSON methods: `JSON.parse()` and `JSON.stringify()`.

## Component Structure

```text
App
 ├── Input Field
 ├── Add Student Button
 └── StudentList
      ├── Total Student Count
      ├── Student Name
      └── Delete Button
```

## Screen Recording

[Watch the Student Management App Demo]
(https://drive.google.com/file/d/1R0OkuXF6qW-HEm4wQi1Imrmw4oFacsTx/view?usp=drivesdk)

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- Browser LocalStorage
