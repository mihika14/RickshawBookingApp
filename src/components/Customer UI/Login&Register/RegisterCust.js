import React from "react";
import './LoginForm.css'
import { Link } from "react-router-dom";

function RegisterCust() {
  return (
    <div className="driverform">
    <form class="form">
      <p class="title">Register As User </p>
      <p class="message">Signup now and get full access to our app. </p>
      <div class="flex">
        <label>
        <span>Full Name</span>
          <input required="" placeholder="" type="text" class="input" />
        
        </label>
      </div>

      <label>
      <span>Email</span>
        <input required="" placeholder="" type="email" class="input" />
    
      </label>

      <label>
      <span>Password</span>
        <input required="" placeholder="" type="password" class="input" />
        
      </label>
      <label>
      <span>Confirm password</span>
        <input required="" placeholder="" type="password" class="input" />
      
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