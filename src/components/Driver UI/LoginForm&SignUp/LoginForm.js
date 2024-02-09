import React, {useState} from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from 'axios'

function LoginForm() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(
        "http://localhost:5000/logindriver",
        {
          email: email,
          password: password
        })
        console.log(response.data)
    }catch(error){
      setError("Invalid Email ID or password")
    }
  }
  return (
    <div className="driverform">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Login </p>

        <label>
          <span>Email</span>
          <input 
          required="" 
          placeholder="" 
          type="email" 
          class="input" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}  
          />
        </label>

        <label>
          <span>Password</span>
          <input 
          required="" 
          placeholder="" 
          type="password" 
          class="input" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)} 
          />
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
