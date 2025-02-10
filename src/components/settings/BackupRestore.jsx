import React from "react";

const BackupRestore = () => {
  const handleBackup = () => {
    alert("Backup feature will be implemented soon!");
  };

  const handleRestore = () => {
    alert("Restore feature will be implemented soon!");
  };

  return (
    <div>
      <h3>Backup & Restore</h3>
      <button onClick={handleBackup}>Backup Data</button>
      <button onClick={handleRestore}>Restore Data</button>
    </div>
  );
};

export default BackupRestore;
