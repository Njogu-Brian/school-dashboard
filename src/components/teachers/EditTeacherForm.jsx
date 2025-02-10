import React from "react";

const EditTeacherForm = ({ teacher, onChange, onSave, onCancel }) => {
    return (
        <form onSubmit={onSave} style={{ background: "#f4f4f4", padding: "10px", marginBottom: "20px" }}>
            <h3>Editing {teacher.name}</h3>
            <input type="text" name="name" value={teacher.name} onChange={onChange} required />
            <input type="text" name="subject" value={teacher.subject} onChange={onChange} required />
            <input type="number" name="experience" value={teacher.experience} onChange={onChange} required />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditTeacherForm;
