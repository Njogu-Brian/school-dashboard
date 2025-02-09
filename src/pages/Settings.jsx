import React, { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <h1>Settings</h1>
      <p>Configure your school dashboard preferences.</p>

      <h2>Appearance</h2>
      <label>Theme: </label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option>Light</option>
        <option>Dark</option>
      </select>

      <h2>Language</h2>
      <label>Choose Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
        <option>Swahili</option>
      </select>

      <h2>System Settings</h2>
      <button onClick={() => alert("System Settings Updated!")}>
        Save Changes
      </button>
    </div>
  );
}

export default Settings;
