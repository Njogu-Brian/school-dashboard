import React, { useState } from "react";

const UserManagement = ({ settings, setSettings }) => {
  const [users, setUsers] = useState(settings.users);
  const [newUser, setNewUser] = useState({ name: "", role: "teacher" });

  const handleAddUser = () => {
    const updatedUsers = [...users, { id: `u${users.length + 1}`, ...newUser }];

    fetch("http://localhost:4000/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...settings, users: updatedUsers }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setSettings(data);
      })
      .catch((err) => console.error("Error updating users:", err));
  };

  return (
    <div>
      <h3>User Management</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="User Name" 
        value={newUser.name} 
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} 
      />
      <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
      </select>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserManagement;
