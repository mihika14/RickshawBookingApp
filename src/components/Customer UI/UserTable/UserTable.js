import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTable.css'

function UserTable() {
  const [alldrivers, setAlldrivers] = useState([]);

  useEffect(() => {
    const fetchDriverDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/driverdetails');
        setAlldrivers(response.data); 
      } catch (error) {
        console.error('Error fetching driver details:', error);
      }
    };

    fetchDriverDetails();
  }, []);
    
  return (
    <div className="ratingstable">
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {alldrivers.map((driver, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{driver.name}</td>
              <td>{driver.telno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
