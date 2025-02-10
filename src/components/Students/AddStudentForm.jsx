import React, { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
    const [newStudent, setNewStudent] = useState({ name: "", age: "", grade: "" });

    const handleChange = (e) => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStudent(newStudent);
        setNewStudent({ name: "", age: "", grade: "" }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input type="text" name="name" placeholder="Student Name" value={newStudent.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={newStudent.age} onChange={handleChange} required />
            <input type="text" name="grade" placeholder="Grade (e.g. Grade 5)" value={newStudent.grade} onChange={handleChange} required />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;
