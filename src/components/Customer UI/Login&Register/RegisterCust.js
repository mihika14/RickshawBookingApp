import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

function RegisterCust() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
      
      if (!name || !email || !password) {
        Swal.fire({
          icon: "error",
          title: "Missing Field",
          text: "Please fill in all fields",
        });
        return;
      }
    
      try {
        const response = await axios.post("http://localhost:5000/registeruser", {
          name: name,
          email: email,
          password: password,
        });
    
        if (response.status === 201) {
          setError(null);
          navigate("/customerhomepage");
        }
      } catch (error) {
        if (error.response?.status === 409) { 
          Swal.fire({
            icon: "warning",
            title: "User Already Exists",
            text: "Please use a different email",
          });
        } else {
          setError(error.response?.data.error || "Something went wrong");
        }
      }
    };
    

  return (
    <div className="driverform">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Register As User </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <span className="form-title">Full Name</span>
            <input
              required=""
              placeholder=""
              type="text"
              class="input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>

        <label>
          <span className="form-title">Email</span>
          <input
            required=""
            placeholder=""
            type="text"
            class="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span className="form-title">Password</span>
          <input
            required=""
            placeholder=""
            type="text"
            class="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button class="submit">Submit</button>
        <p class="signin">
          Already have an account ? <Link to="/customerlogin">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default RegisterCust;
