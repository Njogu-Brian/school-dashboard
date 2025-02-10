import React, { useState, useEffect } from "react";
import GeneralSettings from "../components/settings/GeneralSettings";
import UserManagement from "../components/settings/UserManagement";
import SystemPreferences from "../components/settings/SystemPreferences";
import BackupRestore from "../components/settings/BackupRestore";

const Settings = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/settings")
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error fetching settings:", err));
  }, []);

  return (
    <div>
      <h2>Settings</h2>
      {settings ? (
        <>
          <GeneralSettings settings={settings} setSettings={setSettings} />
          <UserManagement settings={settings} setSettings={setSettings} />
          <SystemPreferences settings={settings} setSettings={setSettings} />
          <BackupRestore />
        </>
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
};

export default Settings;
