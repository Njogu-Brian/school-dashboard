import React, { useState } from "react";

const AddTeacherForm = ({ onAdd }) => {
    const [newTeacher, setNewTeacher] = useState({ name: "", subject: "", experience: "" });

    const handleChange = (e) => {
        setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newTeacher);
        setNewTeacher({ name: "", subject: "", experience: "" }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Teacher Name" value={newTeacher.name} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={newTeacher.subject} onChange={handleChange} required />
            <input type="number" name="experience" placeholder="Years of Experience" value={newTeacher.experience} onChange={handleChange} required />
            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default AddTeacherForm;
