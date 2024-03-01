import React, { useState } from "react";

function FareCalculator() {
  const [distance, setDistance] = useState("");
  const [fare, setFare] = useState(0);

  function calculateFare() {
    const farePerKm = 5;
    const fareAmount = farePerKm * distance;
    setFare(fareAmount);
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculateFare();
  }

  return (
    <>
    <h3 className="fare-header">Explore Fare Options </h3>
    <form className="fare-form" onSubmit={handleSubmit}>
      <label>
        <span className="form-title">Enter approx distance (kms):</span>
        <input
          required
          placeholder=""
          type="number"
          className="input"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <div className="fare">₹{fare}</div>
      <button className="submit" type="submit">
        Calculate Fare
      </button>
    </form>
    </>
  );
}

export default FareCalculator;
