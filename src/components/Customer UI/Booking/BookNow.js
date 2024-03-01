import React, { useState, useEffect } from "react";

function BookNow({ bookingData }) {
  const [nearestDrivers, setNearestDrivers] = useState([]);
  const [customerLocation, setCustomerLocation] = useState(null);
  const numberOfNearestDrivers = 5;

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const dLatSquared = dLat * dLat;
    const dLonSquared = dLon * dLon;
    const sumOfSquares = dLatSquared + dLonSquared;
    const distance = Math.sqrt(sumOfSquares);
    return distance;
  }

  useEffect(() => {
    if (bookingData.latitude && bookingData.longitude) {
      setCustomerLocation({
        latitude: bookingData.latitude,
        longitude: bookingData.longitude
      });
    }
  }, [bookingData]);

  useEffect(() => {
    if (customerLocation) {
      fetch(`http://localhost:5000/fetchDriverLocationTime`)
        .then(response => response.json())
        .then(data => {
          const driversWithDistance = data.map(driver => {
            const distance = calculateDistance(customerLocation.latitude, customerLocation.longitude, driver.latitude, driver.longitude);
            return { ...driver, distance };
          });
          driversWithDistance.sort((a, b) => a.distance - b.distance);
          const nearestDrivers = driversWithDistance.slice(0, numberOfNearestDrivers);
          setNearestDrivers(nearestDrivers);
        })
        .catch(error => console.error("Error fetching drivers:", error));
    }
  }, [customerLocation, numberOfNearestDrivers]);

  return (
    <div className="book-now">
      <h1 className="booknow-drivers">Drivers Near You</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Distance (km)</th>
          </tr>
        </thead>
        <tbody>
          {nearestDrivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.distance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookNow;
