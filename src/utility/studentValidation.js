export const validateStudentName = (name, studentList) => {
  // 1. Check whether input is a string
  if (typeof name !== "string") {
    return {
      isValid: false,
      message: "Invalid input",
    };
  }

  // 2. Remove leading/trailing spaces
  // Convert multiple consecutive spaces into one
  const trimmedName = name.trim().replace(/\s+/g, " ");

  // 3. Check empty input
  if (!trimmedName) {
    return {
      isValid: false,
      message: "Name cannot be empty",
    };
  }

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      message: "Name must contain at least 2 characters",
    };
  }

  if (trimmedName.length > 50) {
    return {
      isValid: false,
      message: "Name cannot exceed 50 characters",
    };
  }

  const namePattern = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

  if (!namePattern.test(trimmedName)) {
    return {
      isValid: false,
      message: "Name can only contain letters, spaces, hyphens and apostrophes",
    };
  }

  //  Normalize names for duplicate comparison

  const normalizeName = (value) => value.toLowerCase().replace(/\s+/g, "");

  const isDuplicate = studentList.some(
    (student) => normalizeName(student.name) === normalizeName(trimmedName),
  );

  if (isDuplicate) {
    return {
      isValid: false,
      message: "Student already exists",
    };
  }

  //  Return validated and normalized name
  return {
    isValid: true,
    message: "",
    value: trimmedName,
  };
};
