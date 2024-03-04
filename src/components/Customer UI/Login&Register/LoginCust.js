import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import '@sweetalert2/theme-dark/dark.css';

function LoginCust() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/loginuser", {
        email: email,
        password: password,
      });
      if (response.status === 201) {
        setError(null);
        navigate("/customerhomepage");
        Swal.fire({
          icon: "success",
          text: "You have successfully logged in",
        });
      }
    } catch (error) {
      setError("Invalid UserName or Password");
      Swal.fire({
        icon: "warning",
        title: "Invalid credentials!",
      });
    }
  };

  return (
    <div className="driverform">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Login as User </p>

        <label>
          <span className="form-title">Email</span>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span className="form-title">Password</span>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="submit">Submit</button>
        <p className="signin">
          Don't have an account ? <Link to="/customerregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginCust;
