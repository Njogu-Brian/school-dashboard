import React, { useState } from "react";

const GeneralSettings = ({ settings, setSettings }) => {
  const [schoolName, setSchoolName] = useState(settings.school_name);
  const [academicYear, setAcademicYear] = useState(settings.academic_year);

  const handleSave = () => {
    const updatedSettings = { ...settings, school_name: schoolName, academic_year: academicYear };
    
    fetch("http://localhost:4000/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSettings),
    })
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error updating settings:", err));
  };

  return (
    <div>
      <h3>General Settings</h3>
      <label>School Name: </label>
      <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      <br />
      <label>Academic Year: </label>
      <input value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default GeneralSettings;
