import React from "react";
import "./Navbar.css";

const NavBar = ({ setFilter }) => {
  const handleFilterChange = (value) => {
    if (value === "") {
      setFilter(0);
    } else if (value === "status") {
      setFilter(1);
    } else if (value === "priority") {
      setFilter(2);
    }
  };

  return (
    <div className="navbar">
      <img src="Display.svg" alt="Left Icon" />
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">User</option>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default NavBar;
