import React from "react";

const StudentList = ({ students, onEditClick, onDeleteClick }) => {
    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    {student.name} - {student.age} years old, {student.grade}
                    <button onClick={() => onEditClick(student)}>Edit</button>
                    <button 
                        onClick={() => onDeleteClick(student.id)} 
                        style={{ marginLeft: "10px", color: "red" }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default StudentList;
