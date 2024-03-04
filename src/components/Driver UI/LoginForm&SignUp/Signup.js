import React, { useState } from "react";
import "./Form.css";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

function SignUp() {
  const navigate= useNavigate()
  const [fullName, setFullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [age, setAge] = useState(" ");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !phoneNumber || !age) {
      Swal.fire({
        icon: "error",
        title: "Missing Field",
        text: "Please fill in all fields",
      });
      return;
    } 
    try {
      const response = await axios.post(
        "http://localhost:5000/registerdriver",
        {
          name: fullName,
          email: email,
          password: password,
          telno: phoneNumber,
          age: age,
        }
      );

      if (response.status === 200) {
        navigate('/driverhomepage')
        setSuccess(true);
        setError(null);
        Swal.fire({
          icon: "success",
          text: "Registered",
        });
      }
    }  catch (error) {
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
        <p class="title">Register </p>
        <p class="message">*Signup now and get full access to our app* </p>
        <div class="flex">
          <label >
            <span className="label">Full Name</span>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
        </div>

        <label>
          <span className="label">Email</span>
          <input
            required=""
            placeholder=""
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span className="label">Password</span>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <span className="label">Phone Number</span>
          <input
            required=""
            placeholder=""
            type="tel"
            className="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <label >
          <span className="label">Age</span>
          <input
            required=""
            placeholder=""
            type="number"
            className="input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <button type="submit" className="submit">
          Submit
        </button>
        {success && <p className="success">Registration successful</p>}
        {error && <p className="error">{error}</p>}
        <p className="signin">
          Already have an account ? <Link to="/">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignUp;
