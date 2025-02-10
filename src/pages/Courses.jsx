import React, { useState, useEffect } from "react";
import AddCourseForm from "../components/courses/AddCourseForm";
import EditCourseForm from "../components/courses/EditCourseForm";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [editingCourse, setEditingCourse] = useState(null);
    const [sortOption, setSortOption] = useState("title");
    const [filterInstructor, setFilterInstructor] = useState("");

    // Fetch courses
    useEffect(() => {
        fetch("http://localhost:4000/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error("Error fetching courses:", error));
    }, []);

    // Add course to state
    const handleAddCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    // Update course in state
    const handleUpdateCourse = (updatedCourse) => {
        setCourses(courses.map(course => 
            course.id === updatedCourse.id ? updatedCourse : course
        ));
        setEditingCourse(null);
    };

    // Delete course
    const handleDeleteCourse = (id) => {
        fetch(`http://localhost:4000/courses/${id}`, { method: "DELETE" })
            .then(() => setCourses(courses.filter(course => course.id !== id)))
            .catch((error) => console.error("Error deleting course:", error));
    };

    // Sorting
    const sortedCourses = [...courses].sort((a, b) => {
        if (sortOption === "title") return a.title.localeCompare(b.title);
        if (sortOption === "duration") return a.duration - b.duration;
        return 0;
    });

    // Filtering
    const filteredCourses = sortedCourses.filter(course => 
        filterInstructor ? course.instructor === filterInstructor : true
    );

    return (
        <div>
            <h2>Courses</h2>

            {/* Sorting & Filtering */}
            <label>Sort by: </label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="title">Title</option>
                <option value="duration">Duration</option>
            </select>

            <label> Filter by Instructor: </label>
            <input 
                type="text" 
                placeholder="Enter instructor name"
                value={filterInstructor}
                onChange={(e) => setFilterInstructor(e.target.value)}
            />

            {/* Add Course Form */}
            <AddCourseForm onAddCourse={handleAddCourse} />

            {/* Edit Course Form */}
            {editingCourse && (
                <EditCourseForm 
                    course={editingCourse} 
                    onUpdateCourse={handleUpdateCourse} 
                    onCancel={() => setEditingCourse(null)} 
                />
            )}

            {/* Display Courses */}
            <ul>
                {filteredCourses.map(course => (
                    <li key={course.id}>
                        {course.title} - {course.instructor}, {course.duration} weeks
                        <button onClick={() => setEditingCourse(course)}>Edit</button>
                        <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
