import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LocationTime() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [startTimings, setStartTimings] = useState("");
  const [endTimings, setEndTimings] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        function (error) {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const handleLocationUpdate = () => {
    // Handle the logic to update the form with the obtained location
    console.log("Location Updated:", position);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission with startTimings, endTimings, and location
    console.log("Form Submitted:", { startTimings, endTimings, position });
  };

  return (
    <div className="registrationform">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Update current location and time</p>

        <label>
          <span>Start Timings</span>
          <input
            required
            placeholder=""
            type="time"
            className="input"
            value={startTimings}
            onChange={(e) => setStartTimings(e.target.value)}
          />
        </label>

        <label>
          <span>End Timings</span>
          <input
            required
            placeholder=""
            type="time"
            className="input"
            value={endTimings}
            onChange={(e) => setEndTimings(e.target.value)}
          />
        </label>

        <button className="submit" onClick={handleLocationUpdate}>
          Track your location
        </button>

        <button type="submit" className="submit">
          Submit
        </button>

        <p className="signin">
          Don't have an account? <Link to="/driverregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LocationTime;
