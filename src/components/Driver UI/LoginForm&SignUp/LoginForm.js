import React, { useState } from "react";
import "./Form.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/logindriver", {
        email: email,
        password: password,
      });
      if (response.status === 201) {
        navigate("/driverhomepage");
        Swal.fire({
          icon: "success",
          text: "You have succesfully logged in",
        });
      }
    } catch (error) {
      setError("Invalid Email ID or password");
      Swal.fire({
        icon: "warning",
        title:"Invalid credentials!",
    })
    }
  };
  return (
    <div className="driverform">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Login </p>

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
          Don't have an acount ? <Link to="/driverregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
