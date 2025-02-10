import React, { useState, useEffect } from "react";

const AddCourseForm = ({ onAddCourse }) => {
    const [newCourse, setNewCourse] = useState({
        title: "",
        instructor: "",
        duration: "",
    });
    const [teachers, setTeachers] = useState([]); // Store teachers list

    // Fetch teachers to populate dropdown
    useEffect(() => {
        fetch("http://localhost:4000/teachers")
            .then((res) => res.json())
            .then((data) => setTeachers(data))
            .catch((error) => console.error("Error fetching teachers:", error));
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:4000/courses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCourse),
        })
        .then((res) => res.json())
        .then((data) => {
            onAddCourse(data); // Update UI
            setNewCourse({ title: "", instructor: "", duration: "" }); // Reset form
        })
        .catch((error) => console.error("Error adding course:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={handleChange}
                required
            />
            
            {/* Dropdown for Instructor */}
            <select 
                name="instructor" 
                value={newCourse.instructor} 
                onChange={handleChange}
                required
            >
                <option value="">Select Instructor</option>
                {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                        {teacher.name}
                    </option>
                ))}
            </select>

            <input 
                type="number"
                name="duration"
                placeholder="Duration (weeks)"
                value={newCourse.duration}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Course</button>
        </form>
    );
};

export default AddCourseForm;
