import React from "react";

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          {course.title} - {course.instructor} ({course.duration} weeks)
          <button onClick={() => onEdit(course)}>Edit</button>
          <button onClick={() => onDelete(course.id)} style={{ marginLeft: "10px", color: "red" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
