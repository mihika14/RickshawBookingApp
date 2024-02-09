import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LocationTime() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [startTimings, setStartTimings] = useState("");
  const [endTimings, setEndTimings] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
    console.log("Location Updated:", position);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/driverlocationandtime",
        {
          startTiming: startTimings,
          endTiming: endTimings,
          latitude: position.latitude,
          longitude: position.longitude,
        }
      );
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.response?.data.message || "Failed to store data");
      setSuccess(false);
    }
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

        {success && <p className="success">Data stored successfully</p>}
        {error && <p className="error">{error}</p>}

        <p className="signin">
          Don't have an account? <Link to="/driverregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LocationTime;
