import React, { useState } from "react";
import "./DriverHomepage.css";
import logo from "./logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const HomeHeader = () => {
  const [showSignOut, setShowSignOut] = useState(false);

  const handleUserIconClick = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    Swal.fire({
      icon: "success",
      text: "logged out",
    });
    
    console.log("Signing out...");
  };

  return (
    <div className="home-header">
      <img src={logo} className="logo" alt="Logo" />
      <h1 className="home-heading">Dashboard</h1>
      <div className="user-icon-container">
        <FaRegUserCircle onClick={handleUserIconClick} />
        {showSignOut && (
          <div className="sign-out-options">
            <Link to ='/'>
            <p onClick={handleSignOut}>Sign Out</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;

