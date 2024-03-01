import React, { useState, useEffect } from "react";
import "./Booking.css";
import rickshawimage from "./rickshawani.jpg";
import BookNow from "./BookNow";
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

function Booking() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [bookingData, setBookingData] = useState({
    latitude: null,
    longitude: null,
  });

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
          setError(error.message);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
      setError("Geolocation is not available in your browser.");
    }
  }, []);

  const handleLocationUpdate = (event) => {
    event.preventDefault();
    if (position) {
      console.log("Location Updated:", position);
      setBookingData({
        latitude: position.latitude,
        longitude: position.longitude,
      });
      Swal.fire({
        icon: "success",
        text: "Location recorded",
      });
      const coordinatesInput = document.getElementById("coordinates");
      coordinatesInput.value = `${position.latitude}, ${position.longitude}`;
    } else {
      console.log("Location data not available.");
    }
  };

  return (
    <div>
      <button className="track-btn" onClick={handleLocationUpdate}>
        Track Your Location
      </button>
      <div className="booking-container">
        <div id="bookingLater-container">
          <form
            className="booking-form"
            action=""
            onSubmit={handleLocationUpdate}
          >
            <h3 className="booking-header">Book For Later</h3>
            <img className="booking-image" src={rickshawimage} alt="Rickshaw" />
            <br />
            <label className="booking-label">Enter Time</label>
            <input
              className="booking-input"
              type="time"
              placeholder="Enter Time"
            />
            <br />
            <label className="booking-label">Coordinates:</label>
            <input
              id="coordinates"
              className="booking-input"
              type="text"
              readOnly
            />
            <br />
            <button type="submit" className="book-submit">
              Submit
            </button>
          </form>
        </div>
        <div id="bookNow-container">
          <BookNow bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
}

export default Booking;
