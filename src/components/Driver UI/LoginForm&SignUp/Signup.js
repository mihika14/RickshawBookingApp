import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [fullName, setFullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [age, setAge] = useState(" ");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      if (response.status === "ok") {
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError(error.response?.data.error || "Something went wrong");
      setSuccess(false);
    }
  };

  return (
    <div className="driverform">
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <span>Full Name</span>
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
          <span>Email</span>
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
          <span>Password</span>
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
          <span>Phone Number</span>
          <input
            required=""
            placeholder=""
            type="tel"
            className="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <label>
          <span>Age</span>
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
