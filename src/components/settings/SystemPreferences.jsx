import React, { useState } from "react";

const SystemPreferences = ({ settings, setSettings }) => {
  const [theme, setTheme] = useState(settings.theme);

  const handleSave = () => {
    const updatedSettings = { ...settings, theme };

    fetch("http://localhost:4000/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSettings),
    })
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error updating theme:", err));
  };

  return (
    <div>
      <h3>System Preferences</h3>
      <label>Theme: </label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SystemPreferences;
