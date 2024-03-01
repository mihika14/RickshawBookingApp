import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useMatch } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '@sweetalert2/theme-dark/dark.css';

function LoginCust() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
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
          text: "You have succesfully logged in",
        });
      }
    } catch (error) {
      setError("Ibvalid UserName or Password");
      Swal.fire({
        icon: "warning",
        title:"Invalid credentials!",
    })
    }
  };

  return (
    <div className="driverform">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Login as User </p>

        <label>
          <span className="form-title">Email</span>
          <input
            required=""
            placeholder=""
            type="email"
            class="input"
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
            class="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
          <button type="submit" className="submit">Submit</button>
        <p class="signin">
          Don't have an account ? <Link to="/customerregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginCust;
