import React from "react";
import "./StudentLists.css"; // Import styling

const StudentList = ({ students, onEditClick, onDeleteClick }) => {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Age: {student.age} years</p>
            <p>Grade: {student.grade}</p>

            <div className="student-actions">
              <button className="edit" onClick={() => onEditClick(student)}>Edit</button>
              <button className="delete" onClick={() => onDeleteClick(student.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;
