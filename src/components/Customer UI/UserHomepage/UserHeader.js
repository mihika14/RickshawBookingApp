import React, { useState } from "react";
import "./UserHomepage.css";
import logo from "./logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const UserHeader = () => {
  const [showSignOut, setShowSignOut] = useState(false);

  const handleUserIconClick = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    Swal.fire({
      icon: "success",
      text: "logged out",
    });
  };

  return (
    <div className="userhome-header">
      <img src={logo} className="userhome-logo" alt="Logo" />
      <h1 className="userhome-heading">Book a Rickshaw Now!</h1>
      <Link to="/booking">
        <button className="userbook-rickshaw">Book</button>
      </Link>
      <div className="userhome-icon-container">
        <FaRegUserCircle onClick={handleUserIconClick} />
        {showSignOut && (
          <div className="usersign-out-options">
            <Link to="/">
              <p onClick={handleSignOut}>Sign Out</p>
            </Link>
          </div>
        )}
      </div>
      <div className="user-options"></div>
    </div>
  );
};

export default UserHeader;
