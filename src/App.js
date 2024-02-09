import "./App.css";
import LoginForm from "./components/Driver UI/LoginForm&SignUp/LoginForm";
import SignUp from "./components/Driver UI/LoginForm&SignUp/Signup";
import Homepage from "./components/Homepage/Homepage";
import DriverHomepage from "./components/Driver UI/DriverHomepage/DriverHomepage";
import LoginCust from "./components/Customer UI/Login&Register/LoginCust";
import RegisterCust from "./components/Customer UI/Login&Register/RegisterCust";
import UserHome from "./components/Customer UI/UserHomepage/UserHome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/driverlogin" element={<LoginForm />} />
        <Route exact path="/driverregister" element={<SignUp />} />
        <Route exact path="/driverhomepage" element={<DriverHomepage />} />
        <Route exact path="/customerlogin" element={<LoginCust />} />
        <Route exact path="/customerregister" element={<RegisterCust />} />
        <Route exact path="/customerhomepage" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
