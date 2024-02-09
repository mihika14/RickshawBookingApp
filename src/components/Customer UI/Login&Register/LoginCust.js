import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginCust() {
  return (
    <div className="driverform">
      <form class="form">
        <p class="title">Login as User </p>

        <label>
          <span>Email</span>
          <input required="" placeholder="" type="email" class="input" />
        </label>

        <label>
          <span>Password</span>
          <input required="" placeholder="" type="password" class="input" />
        </label>

        <Link to="/customerhomepage">
          <button class="submit">Submit</button>
        </Link>
        <p class="signin">
          Don't have an acount ? <Link to="/customerregister">SignUp</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginCust;
