import React from "react";
import "./Homepage.css";
import rickshawgif from "./rickshaw-unscreen.gif";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
       <img src={rickshawgif} alt="Rickshaw GIF" className="rickshaw-gif" />
      <div className="apptext">
        <div className="apptitle">Urban<span className="glide">Glide</span></div>
        <div className="app-slogan"> Navigate the City with Ease!</div>
        {/* <div className="appdescr">
          It is designed to elevate your commuting experience to new heights.{" "}
          <br />
          With just a few taps, you gain access to a fleet of rickshaws ready to
          whisk you away on a journey that combines efficiency with a touch of
          glamour.
        </div> */}
        <div className="login-signup">Get Started</div>
        <Link to = '/driverlogin'><button className="driverlogin">
          Login as Driver
        </button>
        </Link>
        <Link to= '/customerlogin'>
        <button className="driverlogin">
          Login as Customer
        </button>
        </Link>
        <img src={rickshawgif} alt="Rickshaw GIF" className="rickshaw2-gif" />
      </div>
     
    </div>
  );
};

export default Homepage;
