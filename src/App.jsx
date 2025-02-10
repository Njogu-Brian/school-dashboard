import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Outlet />  {/* This will render the current page */}
      </div>
    </div>
  );
}

export default App;
