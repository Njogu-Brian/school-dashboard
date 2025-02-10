import React, { useState, useEffect } from "react";
import StudentList from "../components/Students/StudentList";
import AddStudentForm from "../components/Students/AddStudentForm";
import EditStudentForm from "../components/Students/EditStudentForm";
import SortFilterControls from "../components/Students/SortFilterControls";


const Students = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [sortOption, setSortOption] = useState("name");
    const [showOnlyGrade, setShowOnlyGrade] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/students")
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(error => console.error("Error fetching students:", error));
    }, []);

    const addStudent = (newStudent) => {
        fetch("http://localhost:4000/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
        .then(res => res.json())
        .then(data => setStudents([...students, data]))
        .catch(error => console.error("Error adding student:", error));
    };

    const editStudent = (e) => {
        setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
    };

    const saveEditStudent = (e) => {
        e.preventDefault();

        fetch(`http://localhost:4000/students/${editingStudent.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingStudent),
        })
        .then(res => res.json())
        .then(updatedStudent => {
            setStudents(students.map(student => 
                student.id === updatedStudent.id ? updatedStudent : student
            ));
            setEditingStudent(null);
        })
        .catch(error => console.error("Error updating student:", error));
    };

    const deleteStudent = (id) => {
        fetch(`http://localhost:4000/students/${id}`, {
            method: "DELETE",
        })
        .then(() => setStudents(students.filter(student => student.id !== id)))
        .catch(error => console.error("Error deleting student:", error));
    };

    const sortStudents = (a, b) => {
        if (sortOption === "name") return a.name.localeCompare(b.name);
        if (sortOption === "age") return a.age - b.age;
        return 0;
    };

    const filteredStudents = students
        .filter(student => showOnlyGrade ? student.grade.toLowerCase() === showOnlyGrade.toLowerCase() : true)
        .sort(sortStudents);

    return (
        <div>
            <h2>Students</h2>
            <SortFilterControls sortOption={sortOption} setSortOption={setSortOption} showOnlyGrade={showOnlyGrade} setShowOnlyGrade={setShowOnlyGrade} />
            <AddStudentForm onAddStudent={addStudent} />
            {editingStudent && <EditStudentForm editingStudent={editingStudent} onEditChange={editStudent} onSaveEdit={saveEditStudent} onCancelEdit={() => setEditingStudent(null)} />}
            <StudentList students={filteredStudents} onEditClick={setEditingStudent} onDeleteClick={deleteStudent} />
        </div>
    );
};

export default Students;
