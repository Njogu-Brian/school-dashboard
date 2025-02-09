import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/finance">Finance</Link></li>  {/* New Link */}
        <li><Link to="/settings">Settings</Link></li>  {/* New Link */}
      </ul>
    </nav>
  );
}

export default NavBar;
