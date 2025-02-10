import React, { useState, useEffect } from "react";
import AddCourseForm from "../components/courses/AddCourseForm";
import EditCourseForm from "../components/courses/EditCourseForm";
import CourseList from "../components/courses/CourseList";
import SortFilterControls from "../components/courses/SortFilterControls";
import "../styles/Courses.css"; // Import styles

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [editingCourse, setEditingCourse] = useState(null);
    const [sortOption, setSortOption] = useState("title");
    const [filterInstructor, setFilterInstructor] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error("Error fetching courses:", error));
    }, []);

    const handleAddCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    const handleUpdateCourse = (updatedCourse) => {
        setCourses(courses.map(course => 
            course.id === updatedCourse.id ? updatedCourse : course
        ));
        setEditingCourse(null);
    };

    const handleDeleteCourse = (id) => {
        fetch(`http://localhost:4000/courses/${id}`, { method: "DELETE" })
            .then(() => setCourses(courses.filter(course => course.id !== id)))
            .catch((error) => console.error("Error deleting course:", error));
    };

    const sortedCourses = [...courses].sort((a, b) => {
        if (sortOption === "title") return a.title.localeCompare(b.title);
        if (sortOption === "duration") return a.duration - b.duration;
        return 0;
    });

    const filteredCourses = sortedCourses.filter(course => 
        filterInstructor ? course.instructor === filterInstructor : true
    );

    return (
        <div className="courses-container">
            <h2 className="text-center mt-4">📚 Available Courses</h2>

            <SortFilterControls 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
                instructorFilter={filterInstructor} 
                setInstructorFilter={setFilterInstructor} 
            />

            <AddCourseForm onAddCourse={handleAddCourse} />

            {editingCourse && (
                <EditCourseForm 
                    course={editingCourse} 
                    onUpdateCourse={handleUpdateCourse} 
                    onCancel={() => setEditingCourse(null)} 
                />
            )}

            <CourseList 
                courses={filteredCourses} 
                onEdit={setEditingCourse} 
                onDelete={handleDeleteCourse} 
            />
        </div>
    );
};

export default Courses;
