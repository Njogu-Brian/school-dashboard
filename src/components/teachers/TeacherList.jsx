import React from "react";

const TeacherList = ({ teachers, onEdit, onDelete }) => {
    return (
        <ul>
            {teachers.map((teacher) => (
                <li key={teacher.id}>
                    {teacher.name} - {teacher.subject}, {teacher.experience} years experience
                    <button onClick={() => onEdit(teacher)}>Edit</button>
                    <button onClick={() => onDelete(teacher.id)} style={{ color: "red", marginLeft: "10px" }}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TeacherList;
