import React, { useState, useEffect } from "react";

const AddCourseForm = ({ onAddCourse }) => {
    const [newCourse, setNewCourse] = useState({
        title: "",
        instructor: "",
        duration: "",
    });
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/teachers")
            .then((res) => res.json())
            .then((data) => setTeachers(data))
            .catch((error) => console.error("Error fetching teachers:", error));
    }, []);

    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:4000/courses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCourse),
        })
        .then((res) => res.json())
        .then((data) => {
            onAddCourse(data);
            setNewCourse({ title: "", instructor: "", duration: "" });
        })
        .catch((error) => console.error("Error adding course:", error));
    };

    return (
        <div className="card p-3 mt-3 shadow-sm">
            <h4 className="text-center">Add a New Course</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Course Title</label>
                    <input 
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter course title"
                        value={newCourse.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Instructor</label>
                    <select 
                        name="instructor" 
                        className="form-control"
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
                </div>

                <div className="mb-3">
                    <label className="form-label">Duration (weeks)</label>
                    <input 
                        type="number"
                        name="duration"
                        className="form-control"
                        placeholder="Enter duration in weeks"
                        value={newCourse.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" className="btn btn-primary w-100">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourseForm;
