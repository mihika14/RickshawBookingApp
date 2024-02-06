import React from "react";
import "./RatingsTable.css";

function RatingsTable() {
  const driverdetails = [
    { name: "Rajesh kumar ", ratings: 5 },
    { name: "Suresh kumar", ratings: 4 },
    { name: "Ramesh kumar ", ratings: 3 },
    { name: "Arajesh kumar ", ratings: 2 },
    { name: "Prajesh kumar ", ratings: 1 },
    { name: "Rajeshi kumar ", ratings: 3 },
    { name: "Rajeshwari kumar ", ratings: 5 },
    { name: "Rajesha kumar ", ratings: 4 },
  ];

  const topdrivers = driverdetails.sort((a,b) => a.ratings-b.ratings)

  return (
    <div className="ratingstable">
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {topdrivers.map((driver, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{driver.name}</td>
              <td>{driver.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RatingsTable;
