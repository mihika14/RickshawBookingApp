import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="driverform">
      <form class="form">
        <p class="title">Login </p>

        <label>
          <span>Email</span>
          <input required="" placeholder="" type="email" class="input" />
        </label>

        <label>
          <span>Password</span>
          <input required="" placeholder="" type="password" class="input" />
        </label>

        <Link to="/driverhomepage">
          <button class="submit">Submit</button>
        </Link>
        <p class="signin">
          Don't have an acount ? <Link to="/driverregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
