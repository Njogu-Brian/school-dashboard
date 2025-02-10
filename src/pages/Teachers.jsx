import React, { useState, useEffect } from "react";
import TeacherList from "../components/teachers/TeacherList";
import AddTeacherForm from "../components/teachers/AddTeacherForm";
import EditTeacherForm from "../components/teachers/EditTeacherForm";
import SortFilterControls from "../components/teachers/SortFilterControls";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [editingTeacher, setEditingTeacher] = useState(null);
    const [sortOption, setSortOption] = useState("name");
    const [subjectFilter, setSubjectFilter] = useState("");

    // Fetch teachers from JSON Server
    useEffect(() => {
        fetch("http://localhost:4000/teachers")
            .then((res) => res.json())
            .then((data) => setTeachers(data))
            .catch((error) => console.error("Error fetching teachers:", error));
    }, []);

    // Add new teacher
    const handleAddTeacher = (newTeacher) => {
        fetch("http://localhost:4000/teachers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTeacher),
        })
        .then((res) => res.json())
        .then((data) => {
            setTeachers([...teachers, data]);
        })
        .catch((error) => console.error("Error adding teacher:", error));
    };

    // Edit teacher
    const handleEditSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/teachers/${editingTeacher.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingTeacher),
        })
        .then((res) => res.json())
        .then((updatedTeacher) => {
            setTeachers(teachers.map(teacher =>
                teacher.id === updatedTeacher.id ? updatedTeacher : teacher
            ));
            setEditingTeacher(null);
        })
        .catch((error) => console.error("Error updating teacher:", error));
    };

    // Click "Edit" button
    const handleEditClick = (teacher) => {
        setEditingTeacher(teacher);
    };

    // Delete teacher
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/teachers/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setTeachers(teachers.filter(teacher => teacher.id !== id));
        })
        .catch((error) => console.error("Error deleting teacher:", error));
    };

    // Sorting function
    const sortTeachers = (a, b) => {
        if (sortOption === "name") return a.name.localeCompare(b.name);
        if (sortOption === "experience") return a.experience - b.experience;
        return 0;
    };

    // Filter and sort teachers
    const filteredTeachers = teachers
        .filter(teacher => subjectFilter ? teacher.subject.toLowerCase().includes(subjectFilter.toLowerCase()) : true)
        .sort(sortTeachers);

    return (
        <div>
            <h2>Teachers</h2>

            <SortFilterControls 
                sortOption={sortOption} setSortOption={setSortOption} 
                subjectFilter={subjectFilter} setSubjectFilter={setSubjectFilter} 
            />

            <AddTeacherForm onAdd={handleAddTeacher} />

            {editingTeacher && (
                <EditTeacherForm 
                    teacher={editingTeacher} 
                    onChange={(e) => setEditingTeacher({ ...editingTeacher, [e.target.name]: e.target.value })} 
                    onSave={handleEditSubmit} 
                    onCancel={() => setEditingTeacher(null)} 
                />
            )}

            <TeacherList teachers={filteredTeachers} onEdit={handleEditClick} onDelete={handleDelete} />
        </div>
    );
};

export default Teachers;
