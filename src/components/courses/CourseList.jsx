import React from "react";

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <div className="mt-3">
      <h4 className="text-center">Course List</h4>
      <ul className="list-group">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{course.title}</strong> - {course.instructor} ({course.duration} weeks)
            </div>
            <div>
              <button className="btn btn-sm btn-warning mx-2" onClick={() => onEdit(course)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(course.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
