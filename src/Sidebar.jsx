import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
      <Link to="/explore">Explore</Link>
    </div>
  );
}

export default Sidebar;
